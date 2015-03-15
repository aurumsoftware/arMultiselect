##Important: Please keep in mind that this is an ongoing project. :)

#AngularJS Dropdown Multiselect

This package was forked from https://github.com/semeano/ng-dropdown-multiselect and the only differences from the original are:

- you can chose use font-awsome or glyphicon(default).

###Install
    bower install ac-dropdown-multiselect --save


<div>
  <h1>Full API Documentation</h1>
  <h2>Attributes</h2>
  <p>List of allowed attributes, you can find more information about them in the usage examples above.</p>
  <table class="table table-condensed">
      <thead>
          <tr>
              <th>Attribute Name</th>
              <th>Type</th>
              <th>Description</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td><strong>selected-model</strong>
              </td>
              <td>Object / Array</td>
              <td>The object the will contain the model for the selected items in the dropdown.</td>
          </tr>
          <tr>
              <td><strong>options</strong>
              </td>
              <td>Object / Array</td>
              <td>The options for the dropdown.</td>
          </tr>
          <tr>
              <td><strong>extra-settings</strong>
              </td>
              <td>Object</td>
              <td>The settings for the directive, more information about these settings are available below.</td>
          </tr>
          <tr>
              <td><strong>events</strong>
              </td>
              <td>Object</td>
              <td>Events callbacks, more information below.</td>
          </tr>
          <tr>
              <td><strong>translation-texts</strong>
              </td>
              <td>Object</td>
              <td>Gives the ability to modify the default texts in the directive. More information below.</td>
          </tr>
          <tr>
              <td><strong>group-by</strong>
              </td>
              <td>String</td>
              <td>The name of the property which you like to group by your options. See grouping example.</td>
          </tr>
          <tr>
              <td><strong>search-filter</strong>
              </td>
              <td>String</td>
              <td>Uses for settings the search filter from outside the direcrtive.</td>
          </tr>
          <tr>
              <td><strong>use-font-awesome</strong>
              </td>
              <td>String</td>
              <td>Uses for settings font-awesome as icon library.</td>
          </tr>
      </tbody>
  </table>
  <h2>Settings</h2>
  <p>Available settings that effects the display or behavior of the directive.
      <br>These setting are set with the "extra-settings" attribute.</p>
  <table class="table table-condensed">
      <thead>
          <tr>
              <th>Property Name</th>
              <th>Type</th>
              <th>Default Value</th>
              <th>Description</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>dynamicTitle</td>
              <td>Boolean</td>
              <td>true</td>
              <td>Indicates if the text of the button should change when selecting items from the list.</td>
          </tr>
          <tr>
              <td>closeOnBlur</td>
              <td>Boolean</td>
              <td>true</td>
              <td>Indicates if the dropdown should close when clicking outside of it's scope.</td>
          </tr>
          <tr>
              <td>displayProp</td>
              <td>String</td>
              <td>label</td>
              <td>The name of the property that contains the text for the item.</td>
          </tr>
          <tr>
              <td>idProp</td>
              <td>String</td>
              <td>id</td>
              <td>The name of the property that contains the id for the elements.</td>
          </tr>
          <tr>
              <td>externalIdProp</td>
              <td>String</td>
              <td>id</td>
              <td>The name of the property that will use for the selected items model.</td>
          </tr>
          <tr>
              <td>enableSearch</td>
              <td>Boolean</td>
              <td>false</td>
              <td>Indicated if to show the search input or not.</td>
          </tr>
          <tr>
              <td>enableNewItem</td>
              <td>Boolean</td>
              <td>false</td>
              <td>Indicated if to show the new item input or not.</td>
          </tr>
          <tr>
              <td>enableEditItem</td>
              <td>Boolean</td>
              <td>false</td>
              <td>Option to enable inline editing and removing items.</td>
          </tr>
          <tr>
              <td>selectionLimit</td>
              <td>Number</td>
              <td>0</td>
              <td>The max allowed selected items for the list. For more information see the examples above.</td>
          </tr>
          <tr>
              <td>showCheckAll</td>
              <td>Boolean</td>
              <td>true</td>
              <td>Indicates if to show the "Check All" item.</td>
          </tr>
          <tr>
              <td>showUncheckAll</td>
              <td>Boolean</td>
              <td>true</td>
              <td>Indicates if to show the "Uncheck All" item.</td>
          </tr>
          <tr>
              <td>closeOnSelect</td>
              <td>Boolean</td>
              <td>false</td>
              <td>Indicates if to close the dropdown after checking an item on the list.</td>
          </tr>
          <tr>
              <td>closeOnDeselect</td>
              <td>Boolean</td>
              <td>false</td>
              <td>Indicates if to close the dropdown after unchecking an item on the list.</td>
          </tr>
          <tr>
              <td>alwaysOpened</td>
              <td>Boolean</td>
              <td>false</td>
              <td>Indicates if the dropdown list should be always opened or not. This ignores any click to close the dropdown list.</td>
          </tr>
          <tr>
              <td>noSeparators</td>
              <td>Boolean</td>
              <td>false</td>
              <td>Indicates if you want separator on the dropdown menu (normally between check all / uncheck / search / new item fields.</td>
          </tr>
          <tr>
              <td>buttonClasses</td>
              <td>String</td>
              <td>btn btn-default</td>
              <td>The CSS classes that used for setting the style of the button.</td>
          </tr>
          <tr>
              <td>groupByTextProvider</td>
              <td>Function</td>
              <td>angular.noop</td>
              <td>A callback to a function that provide that name for each group when using group-by attribute. The parameter for the function will be the value of the group-by property.</td>
          </tr>
          <tr>
              <td>scrollable</td>
              <td>Boolean</td>
              <td>false</td>
              <td>Indicates if the dropdown is scrollable, useful if you have a lot of items.</td>
          </tr>
          <tr>
              <td>scrollableHeight</td>
              <td>Number</td>
              <td>300px</td>
              <td>Indicates the height of the drop down if the dropdown is scrollable.</td>
          </tr>
          <tr>
              <td>smartButtonMaxItems</td>
              <td>Number</td>
              <td>0</td>
              <td>Manages the "Smart Button Text" feature, defines the maximum amount of items to on the button.</td>
          </tr>
          <tr>
              <td>smartButtonTextConverter</td>
              <td>Function</td>
              <td>angular.noop</td>
              <td>Related the "Smart Button Text" feature, if a function provided - it will called with two paramters: The item's text and the original item, the return value will displayed instead of the item's display property. This feature is useful when you want to convert the displayed text into something else.</td>
          </tr>
      </tbody>
  </table>
  <h2>Events</h2>
  <p>Available event callbacks what the directive fires. These callbacks are set with "events" attribute.</p>
  <table class="table table-condensed">
      <thead>
          <tr>
              <th>Event Name</th>
              <th>Parameters</th>
              <th>Description</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>onItemSelect</td>
              <td>item</td>
              <td>Fired when selecting an item.</td>
          </tr>
          <tr>
              <td>onItemDeselect</td>
              <td>item</td>
              <td>Fired when unselecting an item.</td>
          </tr>
          <tr>
              <td>onSelectAll</td>
              <td></td>
              <td>Fired when clicking select all.</td>
          </tr>
          <tr>
              <td>onUnselectAll</td>
              <td></td>
              <td>Fired when clicking unselect all.</td>
          </tr>
          <tr>
              <td>onInitDone</td>
              <td></td>
              <td>Fired when the directive done with the "link" phase.</td>
          </tr>
          <tr>
              <td>onMaxSelectionReached</td>
              <td></td>
              <td>Fired when the user reaches the max allowed selected items.</td>
          </tr>
          <tr>
              <td>onNewItemAdd</td>
              <td>newItem</td>
              <td>Fired when the user enters a new item on the input field. Requires "enableNewItem" setting to be true.</td>
          </tr>
          <tr>
              <td>onItemEdit</td>
              <td>id, label</td>
              <td>Fired when the user edits an item. Arguments: the id and the label of the edited item.</td>
          </tr>
          <tr>
              <td>onItemRemove</td>
              <td>id</td>
              <td>Fired when the user removes an item. Arguments: the id of the removed item.</td>
          </tr>
      </tbody>
  </table>
  <h2>Translation Texts</h2>
  <p>Available texts that you can override if you wan't to make a translation for your website. These are set with the "translation-texts" attribute.</p>
  <table class="table table-condensed">
      <thead>
          <tr>
              <th>Property Name</th>
              <th>Default Value</th>
              <th>Description</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>checkAll</td>
              <td>Check All</td>
              <td>"Check All" item's text.</td>
          </tr>
          <tr>
              <td>uncheckAll</td>
              <td>Uncheck All</td>
              <td>"Uncheck All" item's text.</td>
          </tr>
          <tr>
              <td>selectionCount</td>
              <td>checked</td>
              <td>The suffix for "X/Y" that showed when using selection limit.</td>
          </tr>
          <tr>
              <td>selectionOf</td>
              <td>/</td>
              <td>The value between the selected values and the max values when using selection limit.</td>
          </tr>
          <tr>
              <td>searchPlaceholder</td>
              <td>Search...</td>
              <td>The placeholder for the search input.</td>
          </tr>
          <tr>
              <td>newItemPlaceholder</td>
              <td>New item</td>
              <td>The placeholder for the new item input.</td>
          </tr>
          <tr>
              <td>buttonDefaultText</td>
              <td>Select</td>
              <td>The default text that used for the button when no items selected.</td>
          </tr>
          <tr>
              <td>dynamicButtonTextSuffix</td>
              <td>checked</td>
              <td>The suffix for the button that used when using "dynamicText".</td>
          </tr>
      </tbody>
  </table>
</div>