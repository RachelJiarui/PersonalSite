# Paragraph Formatting Guide

Paragraph values in `index.js` support inline HTML. Use the tags below to apply formatting.

---

## Bullet List

```js
"Intro text: <ul><li>First item</li><li>Second item</li><li>Third item</li></ul>"
```

### With sub-bullets

Nest a `<ul>` or `<ol>` inside the `<li>` you want to expand:

```js
"Intro text: <ul><li>Top level item<ul><li>Sub-item one</li><li>Sub-item two</li></ul></li><li>Another top level item</li></ul>"
```

---

## Numbered List

```js
"Steps: <ol><li>First step</li><li>Second step</li><li>Third step</li></ol>"
```

---

## Callout / Blockquote

Indented with a vertical bar on the left.

```js
"She wrote: <blockquote>The will is a law to itself.</blockquote> This means..."
```

---

## Mathematical Symbols

Use HTML entities or paste Unicode characters directly — both work.

```js
"&forall; x &rightarrow; y  —  equivalent to: ∀ x → y"
```

| Symbol | HTML Entity    | Unicode |
|--------|---------------|---------|
| ∀      | `&forall;`    | ∀       |
| ∃      | `&exist;`     | ∃       |
| →      | `&rightarrow;`| →       |
| ←      | `&leftarrow;` | ←       |
| ↔      | `&harr;`      | ↔       |
| ∈      | `&isin;`      | ∈       |
| ∧      | `&and;`       | ∧       |
| ∨      | `&or;`        | ∨       |
| ¬      | `&not;`       | ¬       |
| ≤      | `&le;`        | ≤       |
| ≥      | `&ge;`        | ≥       |
