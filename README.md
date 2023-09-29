# Trilium JSON Editor (tje)

The Trilium JSON Editor is a table (spreadsheet)  type editor for single depth JSON notes. It allows for JSON editing of any Code→JSON note type. It provides auto save functionality, formatting, formulas and more. The heart of this is the amazing x-spreadsheet javascript repo located here. 

The original js and css files from the repo are used here untouched (mostly, see comments at the top of each file to see what has been changed) and additional functionality is located in the TJE js note. Minimal css is included in TJE css, including the inline inclusion of the toolbar svg images to allow for use offline.

There are no external dependancies so this should all work identically both online and offline.

<img width="903" alt="image" src="https://github.com/sottey/tje/assets/8494620/60794845-7ea6-4f5a-8a48-a59d968a5b3d">


## Installation

To install, import the release zip file with safe import unselected. If you wish, you can do a manual review and install of the files. 

Notes:

- The Root should be a note of type RenderNote. It should have a relation attribute (~renderNote) pointing to TJE html.
- The CSS files as well as the x-spreadsheet min js notes are actually HTML notes, wrapped in <style> and <script> tags, respectively. This is to control order and scope.



## Usage

Once imported/configured, simply go to the “Trillium JSON Editor” note. When opened, it will look for all JSON notes (see below for criteria) and put them in the drop down list. Selecting an item will load that JSON into a table for editing.

If autosave is checked, the data will be saved on any change (see below for exceptions). If unchecked, data will only be saved when the “Save” button is clicked.

If you have JSON notes that you do not want to be put in the list, you can add the attribute #tjeExclude to the note and it will not appear in the list.

The tje does NOT currently support multi-level JSON, only flat, single level JSON. If you load a multi level JSON note, it will not display correctly and, if Save is clicked, could corrupt your JSON note.

Notes:

- The dropdown list is populated with any note that is:
  - A Code note
  - A JSON CodeType
  - Does NOT have the attribute #tjeExclude
- Autosave only occurs when a cell is edited then Enter is pressed. Clicking elsewhere does NOT trigger the save. (see Roadmap below)
- The drop down list sorts alphabetically. If you would like to impose a specific order, name the notes with a numbered prefix (e.g. 01), 02), etc.).



## Roadmap (stuff ta do)

- Handle other cell exits in addition to the enter key (tab, loss of focus, etc.)
- Expose multiple sheet capabilities
- Column Sorting
- Ability to store “last edited note” so it auto selects when returning to the editor
- Confirmation on leaving note if current data is not saved
- New Row Templating
- Possibly migrate to WolfTable
