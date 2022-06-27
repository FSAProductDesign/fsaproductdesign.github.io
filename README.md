# CONTENT OF THIS PACKAGE
---
1. /assets
   1. /css - The CSS used by the templates. 
   2. /scss - The Sass files used to maintain the CSS. These are compiled into the CSS files above. 
   3. /fontawesome - The font awesome files. 
   4. /js - The javascript files.
   5. /fonts - The font files.
2. /banner - The USDS banner templates
3. /footer - The USDS footer template.
4. /header - The USDS header templates.


# INTRODUCTION
---
This package contains templates for the USDS header, footer, and banners. 
This document describes required dependencies, installation instructions, and usages of included scripts.


# REQUIREMENTS
---
The USDS brand templates have a dependency on Font Awesome Pro assets. The templates are compatible with Font Awesome Pro 5.
Information on the Font Awesome Pro license can be found at: https://fontawesome.com/license.


# FONT AWESOME INSTALLATION
---
To set your Font Awesome Pro files with the USDS brand templates, follow these steps to add the needed assets to the assets/fontawesome directory.

1. Download Fontawesome Pro for Web from: https://fontawesome.com/download.
2. Copy the /webfonts content into the assets/fontawesome/webfonts directory.
3. Copy the /css/all.css file into the assets/fontawesome/css directory.

# STYLING USING SASS 
---
The USDS brand templates uses Syntactically Awesome Stylesheets(Sass) to maintain the CSS. These files can be found under the assets/scss directory.  
These files must be compiled into CSS before the templates can use them.

More information about SASS can be found here: https://sass-lang.com.

# HOW TO COMPILE SASS TO CSS
---
The USDS brand templates use Node Package Manager (npm) to acquire and run the necessary libraries to compile SASS to CSS.  
The package.json file in the root directory outlines dependencies and scripts used in the templates.

1.Ensure nodejs is installed on your system. Information about nodejs can be found at: nodejs.org/en/.
2. Open a terminal and navigate to the usds-brand-templates directory.
3. Run a npm installation by typing in "npm install" and pressing enter. This will install the dependencies in the node_modules folder.
4. Run any of the following commands to execute the script to compile the desired .scss file to .css format.
   1. npm run css:header 
   2. npm run css:modal
   3. npm run css:footer
   4. npm run css:banner 
   5. npm run css:all