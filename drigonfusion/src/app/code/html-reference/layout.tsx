import React from "react";
import { cn } from "~/lib/utils";

export default async function HTMLLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex flex-row min-h-screen'>
      <div className='bg-secondary text-secondary-foreground w-44 h-full sticky top-0 z-10 shadow-lg'>
        <h4 className='prose-h4 text-center shadow-lg'>HTML Reference</h4>
        <div className='overflow-auto max-h-[calc(100vh-1.75rem)]'>
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
    "href": "/code/html-reference/body/section"
  },
  {
    "title": "nav",
    "href": "/code/html-reference/body/nav"
  },
  {
    "title": "article",
    "href": "/code/html-reference/body/article"
  },
  {
    "title": "aside",
    "href": "/code/html-reference/body/aside"
  },
  {
    "title": "h1 - h6",
    "href": "/code/html-reference/body/h"
  },
  {
    "title": "header",
    "href": "/code/html-reference/body/header"
  },
  {
    "title": "footer",
    "href": "/code/html-reference/body/footer"
  },
  {
    "title": "address",
    "href": "/code/html-reference/body/address"
  },
  {
    "title": "main",
    "href": "/code/html-reference/body/main"
  },
  {
    "title": "p",
    "href": "/code/html-reference/body/p"
  },
  {
    "title": "hr",
    "href": "/code/html-reference/body/hr"
  },
  {
    "title": "pre",
    "href": "/code/html-reference/body/pre"
  },
  {
    "title": "blockquote",
    "href": "/code/html-reference/body/blockquote"
  },
  {
    "title": "lists",
    "href": "/code/html-reference/body/lists"
  },
  {
    "title": "figure",
    "href": "/code/html-reference/body/figure"
  },
  {
    "title": "div",
    "href": "/code/html-reference/body/div"
  },
  {
    "title": "a",
    "href": "/code/html-reference/body/a"
  },
  {
    "title": "em",
    "href": "/code/html-reference/body/em"
  },
  {
    "title": "strong",
    "href": "/code/html-reference/body/strong"
  },
  {
    "title": "small",
    "href": "/code/html-reference/body/small"
  },
  {
    "title": "s",
    "href": "/code/html-reference/body/s"
  },
  {
    "title": "cite",
    "href": "/code/html-reference/body/cite"
  },
  {
    "title": "q",
    "href": "/code/html-reference/body/q"
  },
  {
    "title": "dfn",
    "href": "/code/html-reference/body/dfn"
  },
  {
    "title": "abbr",
    "href": "/code/html-reference/body/abbr"
  },
  {
    "title": "data",
    "href": "/code/html-reference/body/data"
  },
  {
    "title": "time",
    "href": "/code/html-reference/body/time"
  },
  {
    "title": "code",
    "href": "/code/html-reference/body/code"
  },
  {
    "title": "var",
    "href": "/code/html-reference/body/var"
  },
  {
    "title": "samp",
    "href": "/code/html-reference/body/samp"
  },
  {
    "title": "kbd",
    "href": "/code/html-reference/body/kbd"
  },
  {
    "title": "sub",
    "href": "/code/html-reference/body/sub"
  },
  {
    "title": "sup",
    "href": "/code/html-reference/body/sup"
  },
  {
    "title": "i",
    "href": "/code/html-reference/body/i"
  },
  {
    "title": "b",
    "href": "/code/html-reference/body/b"
  },
  {
    "title": "u",
    "href": "/code/html-reference/body/u"
  },
  {
    "title": "mark",
    "href": "/code/html-reference/body/mark"
  },
  {
    "title": "ruby",
    "href": "/code/html-reference/body/ruby"
  },
  {
    "title": "bdi",
    "href": "/code/html-reference/body/bdi"
  },
  {
    "title": "bdo",
    "href": "/code/html-reference/body/bdo"
  },
  {
    "title": "span",
    "href": "/code/html-reference/body/span"
  },
  {
    "title": "br",
    "href": "/code/html-reference/body/br"
  },
  {
    "title": "wbr",
    "href": "/code/html-reference/body/wbr"
  },
  {
    "title": "ins",
    "href": "/code/html-reference/body/ins"
  },
  {
    "title": "del",
    "href": "/code/html-reference/body/del"
  },
  {
    "title": "picture",
    "href": "/code/html-reference/body/picture"
  },
  {
    "title": "source",
    "href": "/code/html-reference/body/source"
  },
  {
    "title": "img",
    "href": "/code/html-reference/body/img"
  },
  {
    "title": "iframe",
    "href": "/code/html-reference/body/iframe"
  },
  {
    "title": "embed",
    "href": "/code/html-reference/body/embed"
  },
  {
    "title": "object",
    "href": "/code/html-reference/body/object"
  },
  {
    "title": "param",
    "href": "/code/html-reference/body/param"
  },
  {
    "title": "video",
    "href": "/code/html-reference/body/video"
  },
  {
    "title": "audio",
    "href": "/code/html-reference/body/audio"
  },
  {
    "title": "track",
    "href": "/code/html-reference/body/track"
  },
  {
    "title": "map",
    "href": "/code/html-reference/body/map"
  },
  {
    "title": "area",
    "href": "/code/html-reference/body/area"
  },
  {
    "title": "table",
    "href": "/code/html-reference/body/table"
  },
  {
    "title": "caption",
    "href": "/code/html-reference/body/caption"
  },
  {
    "title": "colgroup",
    "href": "/code/html-reference/body/colgroup"
  },
  {
    "title": "col",
    "href": "/code/html-reference/body/col"
  },
  {
    "title": "tbody",
    "href": "/code/html-reference/body/tbody"
  },
  {
    "title": "thead",
    "href": "/code/html-reference/body/thead"
  },
  {
    "title": "tfoot",
    "href": "/code/html-reference/body/tfoot"
  },
  {
    "title": "tr",
    "href": "/code/html-reference/body/tr"
  },
  {
    "title": "td",
    "href": "/code/html-reference/body/td"
  },
  {
    "title": "th",
    "href": "/code/html-reference/body/th"
  },
  {
    "title": "form",
    "href": "/code/html-reference/body/form"
  },
  {
    "title": "label",
    "href": "/code/html-reference/body/label"
  },
  {
    "title": "input",
    "href": "/code/html-reference/body/input"
  },
  {
    "title": "button",
    "href": "/code/html-reference/body/button"
  },
  {
    "title": "select",
    "href": "/code/html-reference/body/select"
  },
  {
    "title": "datalist",
    "href": "/code/html-reference/body/datalist"
  },
  {
    "title": "optgroup",
    "href": "/code/html-reference/body/optgroup"
  },
  {
    "title": "option",
    "href": "/code/html-reference/body/option"
  },
  {
    "title": "textarea",
    "href": "/code/html-reference/body/textarea"
  },
  {
    "title": "output",
    "href": "/code/html-reference/body/output"
  },
  {
    "title": "progress",
    "href": "/code/html-reference/body/progress"
  },
  {
    "title": "meter",
    "href": "/code/html-reference/body/meter"
  },
  {
    "title": "fieldset",
    "href": "/code/html-reference/body/fieldset"
  },
  {
    "title": "legend",
    "href": "/code/html-reference/body/legend"
  },
  {
    "title": "details",
    "href": "/code/html-reference/body/details"
  },
  {
    "title": "summary",
    "href": "/code/html-reference/body/summary"
  },
  {
    "title": "dialog",
    "href": "/code/html-reference/body/dialog"
  },
  {
    "title": "template",
    "href": "/code/html-reference/body/template"
  },
  {
    "title": "canvas",
    "href": "/code/html-reference/body/canvas"
  },
  {
    "title": "slot",
    "href": "/code/html-reference/body/slot"
  },
  {
    "title": "shadow",
    "href": "/code/html-reference/body/shadow"
  }  
]