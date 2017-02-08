##Important: Please keep in mind that this is an ongoing project. :)

#aurum-multiselect - AngularJS Multiselect element

This package was forked from https://github.com/semeano/ng-dropdown-multiselect and the only differences from the original are:

* Removed dropdown and select for use only the simple component of multiselect with or without search filter.
* See too [aurum-select](#) dropdown element.

###Install
  bower install aurum-multiselect --save

#Full API Documentation

##Example HTML

```
<aurum-multiselect
	options="exampledata"
	selected-model="examplemodel"
	events="exampleevents"
	search="Filter names..."
	placeholder="Select a name"
	dynamic-title="true"
	label="label"
	class="arSelect">
</aurum-multiselect>
```

##Attributes

List of allowed attributes, you can find more information about them in the usage examples above.

| Attribute Name      | Type         | Description    |
| ------------------- | ------------ | -------------- |
| **selected-model**  | Object/Array | The object the will contain the model for the selected items in the dropdown. |
| **options**         | Object/Array | The options for the dropdown. |
| **events**          | Object       | vents callbacks, more information below. |
| **search**          | String       | Enable search filter on dropdown with placeholder name of field search. |
| **label**     	  | String       | Label of object to display text item selected. |
| **placeholder**     | String       | Placeholder text of the button. |
| **dynamic-title**   | Boolean      | `true` to eanble dynamic title (default false). |

##Settings

* Set `search` attribute to enable search filter with string to text placeholder; 
* Set `placeholder` attribute to set button placeholder;
* Set `label` attribute to define propertie of object in selected items;
* Set `dynamic-title` attribute `true` to enable dynamic title on select;

##Events

Available event callbacks what the directive fires. These callbacks are set with `events` attribute.

| Event name  | Paramaters  | Description   |
| ----------- | ----------- | ------------- |
| **onItemSelect** | item | Fired when selecting an item. |
| **onInitDone** |  | Fired when the directive done with the "link" phase. |