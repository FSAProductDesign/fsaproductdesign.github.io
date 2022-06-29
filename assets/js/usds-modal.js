
class UsdsFocusTrap {

	// Reference - https://stackoverflow.com/questions/1599660/which-html-elements-can-receive-focus
	get tabFocusableElementsSelector() {
		return 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable]';
	}

	get storedAriaHiddenAttribute() {
		return 'usds-focus-trap-aria-hidden-initial';
	}

	get storedFocusTrapRegionAttribute() {
		return 'usds-focus-trap-region';
	}

	get storedFocusTrapRegionDelimiter() {
		return ',';
	}

	constructor() {
		this.elementToTrapId = '';
		this.elementOnReturnId = '';

		this.keydownListener = null;
	}

	getValidParent(node) {
		let validAncestor = null;
		if (
			node != null &&
			node.parentNode !== document.documentElement &&
			node.parentNode !== document
		) {
			validAncestor = node.parentNode;
			// node is shadowRoot?
			if (validAncestor == null && node.host != null) {
				validAncestor = node.host;
			}
			// TODO: node is iframe?
		}
		return validAncestor;
	}

	forEachChildOfEachValidParentOf(element, callback) {
		let ancestorElement = this.getValidParent(element);
		while (ancestorElement != null) {
			if (ancestorElement !== document.head) {
				let ancestorElementChildren = ancestorElement.children;
				for (let i = 0; i < ancestorElementChildren.length; i++) {
					if (
						ancestorElementChildren[i] != null &&
						ancestorElementChildren[i] !== element
					) {
						callback(ancestorElementChildren[i]);
					}
				}
			}

			ancestorElement = this.getValidParent(ancestorElement);
		}
	}

	parseAriaHiddenState(element) {
		let ariaHidden = null;
		if (element != null) {
			switch (element.getAttribute(this.storedAriaHiddenAttribute)) {
				case 'true':
					return true;
				case 'false':
					return false;
				case 'undefined':
					return undefined;
			}
		}
		return ariaHidden;
	}

	setup() {
		let elementToTrap = document.getElementById(this.elementToTrapId);
		if (elementToTrap != null) {

			// make inaccessible the other parts of the document that aren't the trapped element
			this.forEachChildOfEachValidParentOf(elementToTrap, function(child) {
				const storedAriaHidden = this.parseAriaHiddenState(child);
				if (storedAriaHidden === null) {
					const initialAriaHidden = child.getAttribute('aria-hidden');
					child.setAttribute(this.storedAriaHiddenAttribute, ''+(initialAriaHidden !== null ? initialAriaHidden : undefined));
				}
				child.setAttribute('aria-hidden', 'true');
			}.bind(this));

			// try to trap focus within the trapped element
			document.addEventListener('keydown', this.keydownListener = function(event) {
				// TODO: if active modal...
				if (event.key === 'Tab') {
					let tabFocusableElements = elementToTrap.querySelectorAll(this.tabFocusableElementsSelector);
					if (tabFocusableElements.length > 0) {
						if (event.shiftKey === false) {
							// enduser is tabbing forward
							if (document.activeElement === tabFocusableElements[tabFocusableElements.length-1]) {
								event.preventDefault();
								tabFocusableElements[0].focus();
							}
						} else {
							// enduser is tabbing backward
							if (document.activeElement === tabFocusableElements[0]) {
								event.preventDefault();
								tabFocusableElements[tabFocusableElements.length-1].focus();
							}
						}
					} else {
						event.preventDefault();
					}
				}
			}.bind(this));

		}
	}

	teardown() {
		let elementToTrap = document.getElementById(this.elementToTrapId);
		if (elementToTrap != null) {

			this.forEachChildOfEachValidParentOf(elementToTrap, function(child) {
				const ariaHidden = this.parseAriaHiddenState(child);
				if (ariaHidden === true || ariaHidden === false) {
					child.setAttribute('aria-hidden', ''+ariaHidden);
				} else {
					child.removeAttribute('aria-hidden');
				}
				child.removeAttribute(this.storedAriaHiddenAttribute);
			}.bind(this));

		}

		if (this.keydownListener != null) {
			document.removeEventListener('keydown', this.keydownListener);
		}

		let elementOnReturn = document.getElementById(this.elementOnReturnId);
		if (elementOnReturn != null && typeof elementOnReturn.focus === 'function') {
			elementOnReturn.focus();
		}
	}

}

class UsdsModal {

	constructor() {
		this.modalId = '';
		this.controlId = '';
		this.focusTrap = null;
	}

	open() {
		document.body.classList.add('usds-overlay-present');

		let modal = document.getElementById(this.modalId);
		if (modal != null) {
			modal.classList.remove('usds-modal-hidden');
			modal.classList.add('usds-modal-shown');

			this.focusTrap = new UsdsFocusTrap();
			this.focusTrap.elementToTrapId = this.modalId;
			this.focusTrap.elementOnReturnId = this.controlId;
			this.focusTrap.setup();

			modal.focus();
		}
	}

	close() {
		document.body.classList.remove('usds-overlay-present');

		let modal = document.getElementById(this.modalId);
		modal.classList.remove('usds-modal-shown');
		modal.classList.add('usds-modal-hidden');

		this.focusTrap.teardown();
	}

}

class UsdsModalService {

	openModal(modal) {}

	closeModal(modal) {}

	toggleModal(modal) {}

	initModal(modal) {}

	initModals() {

		let modals = document.querySelectorAll('.usds-modal');
		for (let i = 0; i < modals.length; i++) {
			if (!modals[i].hasAttribute('usds-modal-hydrated')) {
				let modalInstance = new UsdsModal();
				modalInstance.modalId = modals[i].id;
	
				modals[i].classList.remove('usds-modal-shown');
				modals[i].classList.add('usds-modal-hidden');
	
				modals[i].addEventListener('click', function(event) {
					// TODO: filter on .usds-modal-overlay for close on backdrop click
				});
	
				let openers = document.querySelectorAll('[data-usds-modal-control=' + modals[i].id + ']');
				for (let j = 0; j < openers.length; j++) {
					openers[j].addEventListener('click', function(event) {
						modalInstance.controlId = event.target.id;
						modalInstance.open();
					});
				}
	
				let closers = modals[i].querySelectorAll('[data-usds-modal-closer]');
				for (let k = 0; k < closers.length; k++) {
					closers[k].addEventListener('click', function(event) {
						modalInstance.close();
					});
				}
	
				// TODO: allow close on ESC

				modals[i].setAttribute('usds-modal-hydrated', '');
			}

		}

	}

}


var usdsModalService;

function initModalServices() {
	usdsModalService = new UsdsModalService();
	usdsModalService.initModals();
}

if (document.readyState !== 'loading') {
	initModalServices();
} else {
	window.addEventListener('DOMContentLoaded', function(event) {
		initModalServices();
	});
}

