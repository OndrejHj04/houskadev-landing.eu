const window = {
  name: "window",
  title: "Banner",
  type: "document",
  fields: [
    { name: "shown", title: "Zobrazit", type: "boolean" },
    {
      name: "title",
      title: "Titulek",
      type: "string",
      validation: (Rule) =>
        Rule.custom((field, context) => {
          if (context.document.shown && !field) {
            return "Je potřeba vyplnit titulek, pokud je nastaveno zapnutí banneru";
          }

          return true;
        }),
    },
  ],
};

export default window;

// context.document.shown && !field
