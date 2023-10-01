> This project is in an experimental phase. Feel welcomed to hang out with us on [🔗Discord](https://discord.gg/W4e8ReQWv2) if you like the project!

# qwikcn

Just like [shadcn/ui](https://github.com/shadcn-ui/ui) but for Qwik.

The goal of this ~~library~~ component collection is to have the first complete, production-ready set of reusable components for Qwik applications with copy/pasting ability a la shadcn for maximum customizability.

> As some headless libraries have a different API than their headless couterpart used by shadcn, this cannot be a 100% port. Compatibility will be set on a best-efforts basis. For example, shadcn's Form component uses react-hooks-form and zod, while qwikcn uses modular-forms and valibot. By consequence, the resulting API is a bit different, but I try to keep the base design system as close as possible.

> Under the hood, qwikcn uses a combination of qwik-ui's headless components, qwikify$ed shadcn components, and html elements. There aren't a lot of production ready components yet in qwik-ui, so qwikcn will adopt them as they get production ready. Until then, the most complex, non-often used shadcn headless components will be qwikify$ed, and those likely to be reused a lot will be served as html elements, even though that might mean less accessibility.

## Contributing

Please read the [contributing guide](/CONTRIBUTING.md).

## License

Licensed under the [MIT license](https://github.com/shadcn/ui/blob/main/LICENSE.md).
