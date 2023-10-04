> This project is in an experimental phase. Feel welcomed to hang out with us on [Discord](https://discord.gg/W4e8ReQWv2) if you like the project!

# qwikcn

Just like [shadcn/ui](https://github.com/shadcn-ui/ui) but for Qwik. Part of [the 𝕏 stack](https://github.com/x-ploration-of-mars/x-stack).

The goal of this component ~~library~~ collection is to have the first complete, production-ready set of reusable components for Qwik applications with copy/pasting ability a la shadcn for maximum customizability.

> This is not a 100% port. Being on Qwik means that Qwikcn must use Qwik-compatible headless libraries (hi 👋 [qwik-ui](https://qwikui.com/docs/headless/introduction/) & [modular-forms](https://modularforms.dev/qwik/guides/introduction)) that can have a slightly different API compared to shadcn's headless libraries (such as [radix/ui](https://www.radix-ui.com/primitives) or [react-hook-form](https://react-hook-form.com/)). As a consequence, compatibility will be set on a best-efforts basis, but I'll to keep the base design system as close as possible. You can expect 90% parity.

> Under the hood, qwikcn uses a combination of qwik-ui's headless components, qwikify$ed shadcn components, and html elements. There aren't a lot of production ready components yet in qwik-ui, so qwikcn will adopt them as they get production ready. Until then, the most complex, non-often used shadcn headless components will be qwikify$ed, even though that can decrease performance; and those likely to be reused a lot will be served as html elements, even though that might mean less accessibility.

## Contributing

Please read the [contributing guide](/CONTRIBUTING.md).

## License

Licensed under the [MIT license](https://github.com/shadcn/ui/blob/main/LICENSE.md).
