> ⚠️ This project is in an experimental phase. Feel welcomed to hang out with us on [Discord](https://discord.gg/W4e8ReQWv2) if you like the project!

# qwikcn

Just like [shadcn/ui](https://github.com/shadcn-ui/ui) but for Qwik. Part of [the 𝕏 stack](https://github.com/x-ploration-of-mars/x-stack).

The goal of this component ~~library~~ collection is to have the first complete, production-ready set of reusable components for Qwik applications with copy/pasting ability a la shadcn for maximum customizability.

> ⚠️ This is not a 100% port. Being on Qwik means that Qwikcn must use Qwik-compatible headless libraries (hi 👋 [qwik-ui](https://qwikui.com/docs/headless/introduction/) & [modular-forms](https://modularforms.dev/qwik/guides/introduction)) that can have a slightly different API compared to shadcn's headless libraries (such as [radix/ui](https://www.radix-ui.com/primitives) or [react-hook-form](https://react-hook-form.com/)). As a consequence, compatibility will be set on a best-efforts basis, but I'll to keep the base design system as close as possible. You can expect 90% parity.

> ⚠️ Under the hood, qwikcn uses a combination of qwik-ui's headless components, qwikify$ed shadcn components, and html elements. There aren't a lot of production ready components yet in qwik-ui, so qwikcn will adopt them as they get production ready. Until then, the most complex, non-often used shadcn headless components will be qwikify$ed, even though that can decrease performance; and those likely to be reused a lot will be served as html elements, even though that might mean less accessibility.

## Contributing

Please read the [contributing guide](/CONTRIBUTING.md).

## License

Licensed under the [MIT license](https://github.com/shadcn/ui/blob/main/LICENSE.md).

## Static Site Generator (Node.js)

```shell
pnpm build.server
```

## Vercel Edge

This starter site is configured to deploy to [Vercel Edge Functions](https://vercel.com/docs/concepts/functions/edge-functions), which means it will be rendered at an edge location near to your users.

## Installation

The adaptor will add a new `vite.config.ts` within the `adapters/` directory, and a new entry file will be created, such as:

```
└── adapters/
    └── vercel-edge/
        └── vite.config.ts
└── src/
    └── entry.vercel-edge.tsx
```

Additionally, within the `package.json`, the `build.server` script will be updated with the Vercel Edge build.

## Production build

To build the application for production, use the `build` command, this command will automatically run `pnpm build.server` and `pnpm build.client`:

```shell
pnpm build
```

[Read the full guide here](https://github.com/BuilderIO/qwik/blob/main/starters/adapters/vercel-edge/README.md)

## Dev deploy

To deploy the application for development:

```shell
pnpm deploy
```

Notice that you might need a [Vercel account](https://docs.Vercel.com/get-started/) in order to complete this step!

## Production deploy

The project is ready to be deployed to Vercel. However, you will need to create a git repository and push the code to it.

You can [deploy your site to Vercel](https://vercel.com/docs/concepts/deployments/overview) either via a Git provider integration or through the Vercel CLI.
