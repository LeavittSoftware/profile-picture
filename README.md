# lss-profile-picture

[![Build status](https://ci.appveyor.com/api/projects/status/l7ia32h1aj6ursli?svg=true)](https://ci.appveyor.com/project/aarondrabeck/profile-picture)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/LssPolymerElements/profile-picture)

To install use: `bower install --save lss-profile-picture`

[ LIVE DEMO AND API ](https://www.webcomponents.org/element/LssPolymerElements/profile-picture)


<!---
```
<custom-element-demo>
  <template is="dom-bind">
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="lss-profile-picture-menu.html">
    <link rel="import" href="lss-profile-picture.html">
        <style is="custom-style" include="demo-pages-shared-styles">
            
            lss-profile-picture-menu[person-id="771130"] {
                --lss-profile-picture-menu-button-background-color: var(--paper-indigo-500);
                --lss-profile-picture-menu-button-color: #fff;
                --lss-profile-picture-signout-button-background-color: var(--paper-pink-a200);
                --lss-profile-picture-signout-button-color: #fff;
            }

            lss-profile-picture-menu {
              margin-bottom: 200px;
            }
        </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
        <h3>LSS Profile Picture Demo</h3>
                <lss-profile-picture shape="square" person-id="11056"></lss-profile-picture>

        <h3>LSS Profile Picture Menu Demo</h3>
                <lss-profile-picture-menu person-id="11056"></lss-profile-picture-menu>

```
