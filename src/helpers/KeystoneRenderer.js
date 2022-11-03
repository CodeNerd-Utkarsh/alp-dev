export const renderers = {
    inline: {
      bold: ({ children }) => {
        return <strong>{children}</strong>;
      },
      link: ({ children, href }) => {
        return <a href={href} style={{color: "inherit"}}>{children}</a>;
      }
    },
    block: {
        paragraph: ({ children, textAlign }) => {
          return <p style={{ textAlign }}>{children}</p>;
        },
    }
};
