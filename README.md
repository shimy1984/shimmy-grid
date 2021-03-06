shimmy-grid
===========

Succinct Sass/Compass CSS structuring grid that is all brains and no fluff.

##Features

* Built-in optional CSS reset
* Highly customizable and lightweight
	* Change settings in `_base.scss`
* Easy master grid width adjustment
	* Default: 960px
	* Can be: any unit (pixels, em, percent, etc.)
* Easily adjust total column count
	* Default: 6
	* Can be: 0 - 12
* Great multi-language support
	* Easy grid float direction adjustment
		* Default: left
		* Can be: left or right
	* Easy grid text direction adjustment
		* Default: ltr
		* Can be: ltr or rtl
* Infinite grid and row nesting
* Default grid class
	* `.g`
* Default row class
	* `.r`
* Available column classes
	* `.one-whole`
	* `.one-half`
	* `.one-third`, `.two-thirds`
	* `.one-fourth`, `.two-fourths`, `.three-fourths`
	* `.one-fifth`, `.two-fifths`, `.three-fifths`, `.four-fifths`
	* `.one-sixth`, `.two-sixths`, `.three-sixths`, `.four-sixths`, `.five-sixths`
	* `.one-seventh`, `.two-sevenths`, `.three-sevenths`, `.four-sevenths`, `.five-sevenths`, `.six-sevenths`
	* `.one-eighth`, `.two-eighths`, `.three-eighths`, `.four-eighths`, `.five-eighths`, `.six-eighths`, `.seven-eighths`
	* `.one-ninth`, `.two-ninths`, `.three-ninths`, `.four-ninths`, `.five-ninths`, `.six-ninths`, `.seven-ninths`, `.eight-ninths`
	* `.one-tenth`, `.two-tenths`, `.three-tenths`, `.four-tenths`, `.five-tenths`, `.six-tenths`, `.seven-tenths`, `.eight-tenths`, `.nine-tenths`
	* `.one-eleventh`, `.two-elevenths`, `.three-elevenths`, `.four-elevenths`, `.five-elevenths`, `.six-elevenths`, `.seven-elevenths`, `.eight-elevenths`, `.nine-elevenths`, `.ten-elevenths`
	* `.one-twelfth`, `.two-twelfths`, `.three-twelfths`, `.four-twelfths`, `.five-twelfths`, `.six-twelfths`, `.seven-twelfths`, `.eight-twelfths`, `.nine-twelfths`, `.ten-twelfths`, `.eleven-twelfths`
* Push/pull any column
	* Easily adjust total push/pull column count
		* Default: 6
		* Can be: 0 - 12
	* Columns of nested rows can be pushed/pulled as well!
	* Just prepend `push-` or `pull-` to a column class
		* `<div class="one-third push-one-sixth"></div>`
* Optional outside padding and gutters at grid level
	* Add a `.pad` class for outside padding
		* `<div class="g pad"></div>`
	* Add a `.gutter` class to use gutters
		* `<div class="g gutter"></div>`
	* Use `.pad` and `.gutter` together
		* `<div class="g pad gutter"></div>`
	* Pad or gutter the grid vertically
		* `<div class="g pad-v gutter-v"></div>`
	* Pad or gutter the grid horizontally
		* `<div class="g pad-h gutter-h"></div>`
* Responsive features at grid, row, or column level
	* Grid & row level
		* Just add a `.respond` class
			* `<div class="g respond"></div>`
		* Works with nested rows!
		* Works with outside padding and gutters!
			* `<div class="g respond pad gutter"></div>`
		* Easily defined for any size (tablet and mobile are the default)
			* Default: when the browser is < 768px all columns in a `.respond` grid/row will resize to 50% width
			* Default: when the browser is < 480px all columns in a `.respond` grid/row will resize to 100% width
	* Column level
		* Just prepend a column class with `tablet-` or `phone-` to target those devices
			* `<div class="one-fourth tablet-one-third phone-one-whole"></div>`
		* Column level responsive classes override the `.respond` class at the grid and/or row level.
		* Hide or position columns offscreen using `.tablet-hidden`, `.tablet-offscreen`, `.phone-hidden`, `.phone-offscreen`
		* Easily define device orientation, for example: `.tablet-portrait-one-third`, `.phone-landscape-two-fifths`
* Very easy to use markup
* Cross browser support: IE 6+, Chrome, Firefox, Safari, Opera
	* Responsive features not compatible with IE 8 and below
		* See FAQs

##Examples

* Basic:

```
<div class="g">
	<div class="r">
		<div class="one-whole"></div>
	</div>
	<div class="r">
		<div class="one-third"></div>
		<div class="two-thirds"></div>
	</div>
</div>
```

* Basic responsive grid:

```
<div class="g respond">
	<div class="r">
		<div class="one-whole"></div>
	</div>
	<div class="r">
		<div class="one-third"></div>
		<div class="two-thirds"></div>
	</div>
</div>
```

* Basic grid with gutters and responsive columns:

```
<div class="g gutter">
	<div class="r">
		<div class="one-whole"></div>
	</div>
	<div class="r">
		<div class="one-third tablet-one-half phone-one-whole"></div>
		<div class="two-thirds tablet-one-half phone-one-whole"></div>
	</div>
</div>
```

* Outside padding and push/pull:

```
<div class="g pad">
	<div class="r">
		<div class="one-fourth"></div>
		<div class="two-fourths pull-one-sixth"></div>
        <div class="one-fourth push-two-thirds"></div>
	</div>
</div>
```

* Nesting, push/pull, responsive rows, outside padding, and gutters:

```
<div class="g pad gutter">
	<div class="r">
		<div class="one-third pull-two-fifths"></div>
		<div class="two-thirds">
			<div class="r">
				<div class="one-fourth"></div>
				<div class="three-fourths pull-one-sixth">
					<div class="r respond">
						<div class="one-third"></div>
						<div class="one-third push-one-half"></div>
						<div class="one-third"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="r respond">
		<div class="one-half"></div>
		<div class="one-half"></div>
	</div>
</div>
```

##FAQs

Q: Where can I find the global settings?

A: The global settings are found in the `_base.scss` file.

Q: Why aren't the responsive features supported on IE 8 and below?

A: Because IE sucks. Those versions of IE aren't found on mobile devices so I wouldn't worry about it.

##Notes

1. Push/pull functionality is disabled while in a responsive state.

##Additional Info

If you find any bugs or have questions/concerns please let me know.

**Thank you for gitting out the word on shimmy-grid! (See what I did there).**