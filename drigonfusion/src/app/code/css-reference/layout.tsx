import React from "react";
import { cn } from "~/lib/utils";

export default async function HTMLLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex flex-row min-h-screen'>
      <div className='bg-secondary text-secondary-foreground w-44 h-full'>
        <h4 className='prose-h4 text-center'>HTML Reference</h4>
        <div className='overflow-auto max-h-[calc(100vh)]'>
          <ul className='space-y-2'>
            {
              list.map((data) => (
                <ListItem
                  key={data.title}
                  title={data.title}
                  href={data.href}
                >
                </ListItem>
              ))
            }
          </ul>
        </div>
      </div>
      <div className='prose flex-grow'>
        {children}
      </div>
    </main>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
  return (
    <li>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
    </li>
  )
})
ListItem.displayName = "ListItem"

const list = [
  {
    title: 'Home',
    href: '/code/html-reference',
  },
  {
    "title": "DOCTYPE",
    "href": "/code/html-reference/doctype"
  },
  {
    "title": "html",
    "href": "/code/html-reference/html"
  },
  {
    "title": "head",
    "href": "/code/html-reference/head"
  },
  {
    "title": "title",
    "href": "/code/html-reference/head/title"
  },
  {
    "title": "base",
    "href": "/code/html-reference/head/base"
  },
  {
    "title": "link",
    "href": "/code/html-reference/head/link"
  },
  {
    "title": "meta",
    "href": "/code/html-reference/head/meta"
  },
  {
    "title": "style",
    "href": "/code/html-reference/style"
  },
  {
    "title": "script",
    "href": "/code/html-reference/script"
  },
  {
    "title": "noscript",
    "href": "/code/html-reference/noscript"
  },
  {
    "title": "body",
    "href": "/code/html-reference/body"
  },
  {
    "title": "section",
    "href": "/code/html-reference/section"
  },
  {
    "title": "nav",
    "href": "/code/html-reference/nav"
  },
  {
    "title": "article",
    "href": "/code/html-reference/article"
  },
  {
    "title": "aside",
    "href": "/code/html-reference/aside"
  },
  {
    "title": "h1",
    "href": "/code/html-reference/h1"
  },
  {
    "title": "h2",
    "href": "/code/html-reference/h2"
  },
  {
    "title": "h3",
    "href": "/code/html-reference/h3"
  },
  {
    "title": "h4",
    "href": "/code/html-reference/h4"
  },
  {
    "title": "h5",
    "href": "/code/html-reference/h5"
  },
  {
    "title": "h6",
    "href": "/code/html-reference/h6"
  },
  {
    "title": "header",
    "href": "/code/html-reference/header"
  },
  {
    "title": "footer",
    "href": "/code/html-reference/footer"
  },
  {
    "title": "address",
    "href": "/code/html-reference/address"
  },
  {
    "title": "main",
    "href": "/code/html-reference/main"
  },
  {
    "title": "p",
    "href": "/code/html-reference/p"
  },
  {
    "title": "hr",
    "href": "/code/html-reference/hr"
  },
  {
    "title": "pre",
    "href": "/code/html-reference/pre"
  },
  {
    "title": "blockquote",
    "href": "/code/html-reference/blockquote"
  },
  {
    "title": "ol",
    "href": "/code/html-reference/ol"
  },
  {
    "title": "ul",
    "href": "/code/html-reference/ul"
  },
  {
    "title": "li",
    "href": "/code/html-reference/li"
  },
  {
    "title": "dl",
    "href": "/code/html-reference/dl"
  },
  {
    "title": "dt",
    "href": "/code/html-reference/dt"
  },
  {
    "title": "dd",
    "href": "/code/html-reference/dd"
  },
  {
    "title": "figure",
    "href": "/code/html-reference/figure"
  },
  {
    "title": "figcaption",
    "href": "/code/html-reference/figcaption"
  },
  {
    "title": "div",
    "href": "/code/html-reference/div"
  },
  {
    "title": "a",
    "href": "/code/html-reference/a"
  },
  {
    "title": "em",
    "href": "/code/html-reference/em"
  },
  {
    "title": "strong",
    "href": "/code/html-reference/strong"
  },
  {
    "title": "small",
    "href": "/code/html-reference/small"
  },
  {
    "title": "s",
    "href": "/code/html-reference/s"
  },
  {
    "title": "cite",
    "href": "/code/html-reference/cite"
  },
  {
    "title": "q",
    "href": "/code/html-reference/q"
  },
  {
    "title": "dfn",
    "href": "/code/html-reference/dfn"
  },
  {
    "title": "abbr",
    "href": "/code/html-reference/abbr"
  },
  {
    "title": "data",
    "href": "/code/html-reference/data"
  },
  {
    "title": "time",
    "href": "/code/html-reference/time"
  },
  {
    "title": "code",
    "href": "/code/html-reference/code"
  },
  {
    "title": "var",
    "href": "/code/html-reference/var"
  },
  {
    "title": "samp",
    "href": "/code/html-reference/samp"
  },
  {
    "title": "kbd",
    "href": "/code/html-reference/kbd"
  },
  {
    "title": "sub",
    "href": "/code/html-reference/sub"
  },
  {
    "title": "sup",
    "href": "/code/html-reference/sup"
  },
  {
    "title": "i",
    "href": "/code/html-reference/i"
  },
  {
    "title": "b",
    "href": "/code/html-reference/b"
  },
  {
    "title": "u",
    "href": "/code/html-reference/u"
  },
  {
    "title": "mark",
    "href": "/code/html-reference/mark"
  },
  {
    "title": "ruby",
    "href": "/code/html-reference/ruby"
  },
  {
    "title": "rt",
    "href": "/code/html-reference/rt"
  },
  {
    "title": "rp",
    "href": "/code/html-reference/rp"
  },
  {
    "title": "bdi",
    "href": "/code/html-reference/bdi"
  },
  {
    "title": "bdo",
    "href": "/code/html-reference/bdo"
  },
  {
    "title": "span",
    "href": "/code/html-reference/span"
  },
  {
    "title": "br",
    "href": "/code/html-reference/br"
  },
  {
    "title": "wbr",
    "href": "/code/html-reference/wbr"
  },
  {
    "title": "ins",
    "href": "/code/html-reference/ins"
  },
  {
    "title": "del",
    "href": "/code/html-reference/del"
  },
  {
    "title": "picture",
    "href": "/code/html-reference/picture"
  },
  {
    "title": "source",
    "href": "/code/html-reference/source"
  },
  {
    "title": "img",
    "href": "/code/html-reference/img"
  },
  {
    "title": "iframe",
    "href": "/code/html-reference/iframe"
  },
  {
    "title": "embed",
    "href": "/code/html-reference/embed"
  },
  {
    "title": "object",
    "href": "/code/html-reference/object"
  },
  {
    "title": "param",
    "href": "/code/html-reference/param"
  },
  {
    "title": "video",
    "href": "/code/html-reference/video"
  },
  {
    "title": "audio",
    "href": "/code/html-reference/audio"
  },
  {
    "title": "track",
    "href": "/code/html-reference/track"
  },
  {
    "title": "map",
    "href": "/code/html-reference/map"
  },
  {
    "title": "area",
    "href": "/code/html-reference/area"
  },
  {
    "title": "table",
    "href": "/code/html-reference/table"
  },
  {
    "title": "caption",
    "href": "/code/html-reference/caption"
  },
  {
    "title": "colgroup",
    "href": "/code/html-reference/colgroup"
  },
  {
    "title": "col",
    "href": "/code/html-reference/col"
  },
  {
    "title": "tbody",
    "href": "/code/html-reference/tbody"
  },
  {
    "title": "thead",
    "href": "/code/html-reference/thead"
  },
  {
    "title": "tfoot",
    "href": "/code/html-reference/tfoot"
  },
  {
    "title": "tr",
    "href": "/code/html-reference/tr"
  },
  {
    "title": "td",
    "href": "/code/html-reference/td"
  },
  {
    "title": "th",
    "href": "/code/html-reference/th"
  },
  {
    "title": "form",
    "href": "/code/html-reference/form"
  },
  {
    "title": "label",
    "href": "/code/html-reference/label"
  },
  {
    "title": "input",
    "href": "/code/html-reference/input"
  },
  {
    "title": "button",
    "href": "/code/html-reference/button"
  },
  {
    "title": "select",
    "href": "/code/html-reference/select"
  },
  {
    "title": "datalist",
    "href": "/code/html-reference/datalist"
  },
  {
    "title": "optgroup",
    "href": "/code/html-reference/optgroup"
  },
  {
    "title": "option",
    "href": "/code/html-reference/option"
  },
  {
    "title": "textarea",
    "href": "/code/html-reference/textarea"
  },
  {
    "title": "output",
    "href": "/code/html-reference/output"
  },
  {
    "title": "progress",
    "href": "/code/html-reference/progress"
  },
  {
    "title": "meter",
    "href": "/code/html-reference/meter"
  },
  {
    "title": "fieldset",
    "href": "/code/html-reference/fieldset"
  },
  {
    "title": "legend",
    "href": "/code/html-reference/legend"
  },
  {
    "title": "details",
    "href": "/code/html-reference/details"
  },
  {
    "title": "summary",
    "href": "/code/html-reference/summary"
  },
  {
    "title": "dialog",
    "href": "/code/html-reference/dialog"
  },
  {
    "title": "template",
    "href": "/code/html-reference/template"
  },
  {
    "title": "canvas",
    "href": "/code/html-reference/canvas"
  },
  {
    "title": "slot",
    "href": "/code/html-reference/slot"
  },
  {
    "title": "shadow",
    "href": "/code/html-reference/shadow"
  }  
]