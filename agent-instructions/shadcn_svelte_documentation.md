# accordion

---
title: Accordion
description: A vertically stacked set of interactive headings that each reveal a section of content.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/accordion
bits: https://www.bits-ui.com/docs/components/accordion
---

<script>
    import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="accordion-demo" class="[&_[data-melt-accordion]]:sm:max-w-[70%]">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="accordion" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import * as Accordion from "$lib/components/ui/accordion";
</script>

<Accordion.Root>
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
    <Accordion.Content>
      Yes. It adheres to the WAI-ARIA design pattern.
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
```


---

# alert-dialog

---
title: Alert Dialog
description: A modal dialog that interrupts the user with important content and expects a response.
featured: true
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/alert-dialog
bits: https://www.bits-ui.com/docs/components/alert-dialog
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="alert-dialog-demo">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="alert-dialog" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import * as AlertDialog from "$lib/components/ui/alert-dialog";
</script>

<AlertDialog.Root>
  <AlertDialog.Trigger>Open</AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Header>
      <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
      <AlertDialog.Description>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialog.Description>
    </AlertDialog.Header>
    <AlertDialog.Footer>
      <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
      <AlertDialog.Action>Continue</AlertDialog.Action>
    </AlertDialog.Footer>
  </AlertDialog.Content>
</AlertDialog.Root>
```


---

# alert

---
title: Alert
description: Displays a callout for user attention.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/alert
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp } from '$lib/components/docs';
</script>

<ComponentPreview name="alert-demo">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="alert" />

<ManualInstall>

1. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import * as Alert from "$lib/components/ui/alert";
</script>

<Alert.Root>
  <Alert.Title>Heads up!</Alert.Title>
  <Alert.Description>
    You can add components to your app using the cli.
  </Alert.Description>
</Alert.Root>
```

## Examples

### Default

<ComponentPreview name="alert-demo">

<div />

</ComponentPreview>

### Destructive

<ComponentPreview name="alert-destructive">

<div />

</ComponentPreview>


---

# aspect-ratio

---
title: Aspect Ratio
description: Displays content within a desired ratio.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/aspect-ratio
bits: https://www.bits-ui.com/docs/components/aspect-ratio
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="aspect-ratio-demo">

<div/>

</ComponentPreview>

## Installation

<PMAddComp name="aspect-ratio" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import { AspectRatio } from "$lib/components/ui/aspect-ratio";
</script>

<div class="w-[450px]">
  <AspectRatio ratio={16 / 9} class="bg-muted">
    <img src="..." alt="..." class="rounded-md object-cover" />
  </AspectRatio>
</div>
```


---

# avatar

---
title: Avatar
description: An image element with a fallback for representing the user.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/avatar
bits: https://www.bits-ui.com/docs/components/avatar
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="avatar-demo">

<div/>

</ComponentPreview>

## Installation

<PMAddComp name="avatar" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar";
</script>

<Avatar.Root>
  <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
  <Avatar.Fallback>CN</Avatar.Fallback>
</Avatar.Root>
```


---

# badge

---
title: Badge
description: Displays a badge or a component that looks like a badge.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/badge
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp } from '$lib/components/docs';
  import { BadgeDemo, BadgeDestructive, BadgeOutline, BadgeSecondary } from '$lib/registry/default/example'
</script>

<ComponentPreview name="badge-demo">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="badge" />

<ManualInstall>

1. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import { Badge } from "$lib/components/ui/badge";
</script>
```

```svelte
<Badge variant="outline">Badge</Badge>
```

### Link

You can use the `badgeVariants` helper to create a link that looks like a badge.

```svelte
<script lang="ts">
  import { badgeVariants } from "$lib/components/ui/badge";
</script>

<a href="/dashboard" class={badgeVariants({ variant: "outline" })}>Badge</a>
```

## Examples

### Default

<ComponentPreview name="badge-demo">

<div />

</ComponentPreview>

---

### Secondary

<ComponentPreview name="badge-secondary">

<div />

</ComponentPreview>

---

### Outline

<ComponentPreview name="badge-outline">

<div />

</ComponentPreview>

---

### Destructive

<ComponentPreview name="badge-destructive">

<div />

</ComponentPreview>


---

# breadcrumb

---
title: Breadcrumb
description: Displays the path to the current resource using a hierarchy of links.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/breadcrumb
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp } from '$lib/components/docs';
</script>

<ComponentPreview name="breadcrumb-demo">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="breadcrumb" />

<ManualInstall>

1. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
</script>

<Breadcrumb.Root>
  <Breadcrumb.List>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/components">Components</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
    </Breadcrumb.Item>
  </Breadcrumb.List>
</Breadcrumb.Root>
```

## Examples

### Custom separator

Use a custom component in the `<slot>` of `<Breadcrumb.Separator />` to create a custom separator.

<ComponentPreview name="breadcrumb-separator">

<div />

</ComponentPreview>

---

### Dropdown

You can compose `<Breadcrumb.Item />` with a `<DropdownMenu />` to create a dropdown in the breadcrumb.

<ComponentPreview name="breadcrumb-dropdown">

<div />

</ComponentPreview>

---

### Collapsed

We provide a `<Breadcrumb.Ellipsis />` component to show a collapsed state when the breadcrumb is too long.

<ComponentPreview name="breadcrumb-ellipsis">

<div />

</ComponentPreview>

---

### Link component

To use a custom link component from your routing library, you can use the `asChild` prop on `<Breadcrumb.Link />`.

<ComponentPreview name="breadcrumb-link">

<div />

</ComponentPreview>

---

### Responsive

Here's an example of a responsive breadcrumb that composes `<Breadcrumb.Item />` with `<Breadcrumb.Ellipsis />`, `<DropdownMenu />`, and `<Drawer />`.

It displays a dropdown on desktop and a drawer on mobile.

<ComponentPreview name="breadcrumb-responsive">

<div />

</ComponentPreview>


---

# button

---
title: Button
description: Displays a button or a component that looks like a button.
featured: true
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/button
bits: https://www.bits-ui.com/docs/components/button
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="button-demo">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="button" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import { Button } from "$lib/components/ui/button";
</script>
```

```svelte
<Button variant="outline">Button</Button>
```

### Link

You can convert the `<button>` into an `<a>` element by simply passing an `href` as a prop.

```svelte
<script lang="ts">
  import { Button } from "$lib/components/ui/button";
</script>

<Button href="/dashboard">Dashboard</Button>
```

Alternatively, you can use the `buttonVariants` helper to create a link that looks like a button.

```svelte
<script lang="ts">
  import { buttonVariants } from "$lib/components/ui/button";
</script>

<a href="/dashboard" class={buttonVariants({ variant: "outline" })}>
  Dashboard
</a>
```

## Examples

### Primary

<ComponentPreview name="button-demo">

<div />

</ComponentPreview>

---

### Secondary

<ComponentPreview name="button-secondary">

<div />

</ComponentPreview>

---

### Destructive

<ComponentPreview name="button-destructive">

<div />

</ComponentPreview>

---

### Outline

<ComponentPreview name="button-outline">

<div />

</ComponentPreview>

---

### Ghost

<ComponentPreview name="button-ghost">

<div />

</ComponentPreview>

---

### Link

<ComponentPreview name="button-link">

<div />

</ComponentPreview>

---

### With Icon

<ComponentPreview name="button-with-icon">

<div />

</ComponentPreview>

---

### Icon

<ComponentPreview name="button-icon">

<div />

</ComponentPreview>

---

### Loading

<ComponentPreview name="button-loading">

<div />

</ComponentPreview>


---

# calendar

---
title: Calendar
description: A calendar component that allows users to select dates.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/calendar
bits: https://www.bits-ui.com/docs/components/calendar
---

<script>
    import { ComponentPreview, ManualInstall, Callout, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="calendar-demo">

<div />

</ComponentPreview>

## About

The `<Calendar />` component is built on top of the [Bits Calendar](https://www.bits-ui.com/docs/components/calendar) component, which uses the [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/index.html) package to handle dates.

If you're looking for a range calendar, check out the [Range Calendar](/docs/components/range-calendar) component.

## Installation

<PMAddComp name="calendar" />

<ManualInstall>

1. Install `bits-ui` and `@internationalized/date`:

<PMInstall command="bits-ui @internationalized/date" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Date Picker

You can use the `<Calendar />` component to build a date picker. See the [Date Picker](/docs/components/date-picker) page for more information.

## Examples

### Form

<ComponentPreview name="date-picker-demo">

<div />

</ComponentPreview>

## Advanced Customization

The `<Calendar />` component can be combined with other components to create a more complex calendar.

<Callout>
    By default, we export the combined Calendar component as <code>Calendar</code> as there are quite a few pieces that need to be combined to create it. We're modifying that component in the examples below.
</Callout>

### Month & Year Selects

Here's an example of how you could create a calendar with month and year select dropdowns instead of the previous and next buttons.

<ComponentPreview name="calendar-with-selects">

<div />

</ComponentPreview>


---

# card

---
title: Card
description: Displays a card with header, content, and footer.
featured: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/card
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp } from '$lib/components/docs';
</script>

<ComponentPreview name="card-with-form">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="card" />

<ManualInstall>

1. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import * as Card from "$lib/components/ui/card";
</script>

<Card.Root>
  <Card.Header>
    <Card.Title>Card Title</Card.Title>
    <Card.Description>Card Description</Card.Description>
  </Card.Header>
  <Card.Content>
    <p>Card Content</p>
  </Card.Content>
  <Card.Footer>
    <p>Card Footer</p>
  </Card.Footer>
</Card.Root>
```

### Modify the heading level

By default, the `<Card.Title>` component renders an `<h3>` element. You can change this by passing a `tag` prop to the component.

For example:

```svelte
<Card.Title tag="h1">This will render an H1</Card.Title>
```

...

```svelte
<Card.Title tag="h6">This will render an H6</Card.Title>
```

## Examples

<ComponentPreview name="card-demo">

<div />

</ComponentPreview>


---

# carousel

---
title: Carousel
description: A carousel with motion and swipe built using Embla.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/carousel
bits: https://www.embla-carousel.com/get-started/svelte/
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="carousel-demo">

<div />

</ComponentPreview>

## About

The carousel component is built using the [Embla Carousel](https://www.embla-carousel.com/get-started/svelte/) library.

## Installation

<PMAddComp name="carousel" />

<ManualInstall>

1. Install `embla-carousel-svelte`:

<PMInstall command="embla-carousel-svelte -D" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index.js";
</script>

<Carousel.Root>
  <Carousel.Content>
    <Carousel.Item>...</Carousel.Item>
    <Carousel.Item>...</Carousel.Item>
    <Carousel.Item>...</Carousel.Item>
  </Carousel.Content>
  <Carousel.Previous />
  <Carousel.Next />
</Carousel.Root>
```

## Examples

### Sizes

To set the size of the items, you can use the `basis` utility class on the `<Carousel.Item />`.

<ComponentPreview name="carousel-size">

<div />

</ComponentPreview>

```svelte title="Example" showLineNumbers {4-6}
<!-- 33% of the carousel width. -->
<Carousel.Root>
  <Carousel.Content>
    <Carousel.Item class="basis-1/3">...</Carousel.Item>
    <Carousel.Item class="basis-1/3">...</Carousel.Item>
    <Carousel.Item class="basis-1/3">...</Carousel.Item>
  </Carousel.Content>
</Carousel.Root>
```

```svelte title="Responsive" showLineNumbers {4-6}
<!-- 50% on small screens and 33% on larger screens. -->
<Carousel.Root>
  <Carousel.Content>
    <Carousel.Item class="md:basis-1/2 lg:basis-1/3">...</Carousel.Item>
    <Carousel.Item class="md:basis-1/2 lg:basis-1/3">...</Carousel.Item>
    <Carousel.Item class="md:basis-1/2 lg:basis-1/3">...</Carousel.Item>
  </Carousel.Content>
</Carousel.Root>
```

### Spacing

To set the spacing between the items, we use a `pl-[VALUE]` utility on the `<Carousel.Item />` and a negative `-ml-[VALUE]` on the `<Carousel.Content />`.

<ComponentPreview name="carousel-spacing">

<div />

</ComponentPreview>

```svelte title="Example" showLineNumbers /-ml-4/ /pl-4/
<Carousel.Root>
  <Carousel.Content class="-ml-4">
    <Carousel.Item class="pl-4">...</Carousel.Item>
    <Carousel.Item class="pl-4">...</Carousel.Item>
    <Carousel.Item class="pl-4">...</Carousel.Item>
  </Carousel.Content>
</Carousel.Root>
```

```svelte title="Responsive" showLineNumbers /-ml-2/ /pl-2/ /md:-ml-4/ /md:pl-4/
<Carousel.Root>
  <Carousel.Content class="-ml-2 md:-ml-4">
    <Carousel.Item class="pl-2 md:pl-4">...</Carousel.Item>
    <Carousel.Item class="pl-2 md:pl-4">...</Carousel.Item>
    <Carousel.Item class="pl-2 md:pl-4">...</Carousel.Item>
  </Carousel.Content>
</Carousel.Root>
```

### Orientation

Use the `orientation` prop to set the orientation of the carousel.

<ComponentPreview name="carousel-orientation">

<div />

</ComponentPreview>

```svelte showLineNumbers /vertical | horizontal/
<Carousel.Root orientation="vertical | horizontal">
  <Carousel.Content>
    <Carousel.Item>...</Carousel.Item>
    <Carousel.Item>...</Carousel.Item>
    <Carousel.Item>...</Carousel.Item>
  </Carousel.Content>
</Carousel.Root>
```

## Options

You can pass options to the carousel using the `opts` prop. See the [Embla Carousel docs](https://www.embla-carousel.com/api/options/) for more information.

```svelte showLineNumbers {2-5}
<Carousel.Root
  opts={{
    align: "start",
    loop: true,
  }}
>
  <Carousel.Content>
    <Carousel.Item>...</Carousel.Item>
    <Carousel.Item>...</Carousel.Item>
    <Carousel.Item>...</Carousel.Item>
  </Carousel.Content>
</Carousel.Root>
```

## API

Use reactive state and the `bind:api` directive to get an instance of the carousel API.

<ComponentPreview name="carousel-api">

<div />

</ComponentPreview>

```svelte showLineNumbers {2,5,18}
<script lang="ts">
  import { type CarouselAPI } from "$lib/components/ui/carousel/context.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";

  let api: CarouselAPI;
  let count = 0;
  let current = 0;

  $: if (api) {
    count = api.scrollSnapList().length;
    current = api.selectedScrollSnap() + 1;
    api.on("select", () => {
      current = api.selectedScrollSnap() + 1;
    });
  }
</script>

<Carousel.Root bind:api>
  <Carousel.Content>
    <Carousel.Item>...</Carousel.Item>
    <Carousel.Item>...</Carousel.Item>
    <Carousel.Item>...</Carousel.Item>
  </Carousel.Content>
</Carousel.Root>
```

## Events

You can listen to events using the api instance from `bind:api`.

```svelte showLineNumbers {2,5,7-11,14}
<script lang="ts">
  import { type CarouselAPI } from "$lib/components/ui/carousel/context.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";

  let api: CarouselAPI;

  $: if (api) {
    api.on("select", () => {
      // do something on select
    });
  }
</script>

<Carousel.Root bind:api>
  <Carousel.Content>
    <Carousel.Item>...</Carousel.Item>
    <Carousel.Item>...</Carousel.Item>
    <Carousel.Item>...</Carousel.Item>
  </Carousel.Content>
</Carousel.Root>
```

## Plugins

You can use the `plugins` prop to add plugins to the carousel.

```svelte showLineNumbers {2,7-11}
<script lang="ts">
  import Autoplay from "embla-carousel-autoplay";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
</script>

<Carousel.Root
  plugins={[
    Autoplay({
      delay: 2000,
    }),
  ]}
>
  <!-- ... -->
</Carousel.Root>
```

<ComponentPreview name="carousel-plugin">

<div />

</ComponentPreview>

See the [Embla Carousel docs](https://www.embla-carousel.com/api/plugins/) for more information on using plugins.


---

# checkbox

---
title: Checkbox
description: A control that allows the user to toggle between checked and not checked.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/checkbox
bits: https://www.bits-ui.com/docs/components/checkbox
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="checkbox-demo">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="checkbox" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import { Checkbox } from "$lib/components/ui/checkbox";
</script>
```

```svelte
<Checkbox />
```

## Examples

### With Text

<ComponentPreview name="checkbox-with-text">

<div />

</ComponentPreview>

### Disabled

<ComponentPreview name="checkbox-disabled">

<div />

</ComponentPreview>

### Form

<ComponentPreview name="checkbox-form-single">

<div />

</ComponentPreview>

<ComponentPreview name="checkbox-form-multiple">

<div />

</ComponentPreview>


---

# collapsible

---
title: Collapsible
description: An interactive component which expands/collapses a panel.
component: true
featured: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/collapsible
bits: https://www.bits-ui.com/docs/components/collapsible
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="collapsible-demo">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="collapsible" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import * as Collapsible from "$lib/components/ui/collapsible";
</script>

<Collapsible.Root>
  <Collapsible.Trigger>Can I use this in my project?</Collapsible.Trigger>
  <Collapsible.Content>
    Yes. Free to use for personal and commercial projects. No attribution
    required.
  </Collapsible.Content>
</Collapsible.Root>
```


---

# combobox

---
title: Combobox
description: Autocomplete input and command palette with a list of suggestions.
component: true
---

<script>
  import { ComponentPreview, ManualInstall, Callout } from '$lib/components/docs';
</script>

<ComponentPreview name="combobox-demo">

<div />

</ComponentPreview>

## Installation

The Combobox is built using a composition of the `<Popover />` and the `<Command />` components.

See installation instructions for the [Popover](/docs/components/popover#installation) and the [Command](/docs/components/command#installation) components.

## Usage

```svelte
<script lang="ts">
  import Check from "lucide-svelte/icons/check";
  import ChevronsUpDown from "lucide-svelte/icons/chevrons-up-down";
  import * as Command from "$lib/registry/default/ui/command/index.js";
  import * as Popover from "$lib/registry/default/ui/popover/index.js";
  import { Button } from "$lib/registry/default/ui/button/index.js";
  import { cn } from "$lib/utils.js";
  import { tick } from "svelte";

  const frameworks = [
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];

  let open = false;
  let value = "";

  $: selectedValue =
    frameworks.find((f) => f.value === value)?.label ??
    "Select a framework...";

  // We want to refocus the trigger button when the user selects
  // an item from the list so users can continue navigating the
  // rest of the form with the keyboard.
  function closeAndFocusTrigger(triggerId: string) {
    open = false;
    tick().then(() => {
      document.getElementById(triggerId)?.focus();
    });
  }
</script>

<Popover.Root bind:open let:ids>
  <Popover.Trigger asChild let:builder>
    <Button
      builders={[builder]}
      variant="outline"
      role="combobox"
      aria-expanded={open}
      class="w-[200px] justify-between"
    >
      {selectedValue}
      <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
    </Button>
  </Popover.Trigger>
  <Popover.Content class="w-[200px] p-0">
    <Command.Root>
      <Command.Input placeholder="Search framework..." />
      <Command.Empty>No framework found.</Command.Empty>
      <Command.Group>
        {#each frameworks as framework}
          <Command.Item
            value={framework.value}
            onSelect={(currentValue) => {
              value = currentValue;
              closeAndFocusTrigger(ids.trigger);
            }}
          >
            <Check
              class={cn(
                "mr-2 h-4 w-4",
                value !== framework.value && "text-transparent"
              )}
            />
            {framework.label}
          </Command.Item>
        {/each}
      </Command.Group>
    </Command.Root>
  </Popover.Content>
</Popover.Root>
```

## Examples

### Combobox

<ComponentPreview name="combobox-demo">

<div />

</ComponentPreview>

### Popover

<ComponentPreview name="combobox-popover">

<div />

</ComponentPreview>

### Dropdown menu

<ComponentPreview name="combobox-dropdown-menu">

<div />

</ComponentPreview>

### Form

Since the Combobox is built using the `<Popover />` and the `<Command />` components, we need to use the `<Form.Control />` component. `<Form.Control />` enables us to apply the right `aria-*` attributes to non-standard form elements, and adds a hidden input to ensure the form is submitted with the correct value.

Note: You must be on version `0.5.0` or higher of `formsnap` for this to work correctly.

<ComponentPreview name="combobox-form">

<div />

</ComponentPreview>


---

# command

---
title: Command
description: Fast, composable, unstyled command menu for Svelte.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/command
bits: https://github.com/huntabyte/cmdk-sv
---

<script>
  import { ComponentPreview, ManualInstall, Callout, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="command-demo" align="start" >

<div />

</ComponentPreview>

## About

The `<Command />` component uses the [`cmdk-sv`](https://cmdk-sv.com) library to provide a fast, composable, unstyled command menu for Svelte.

<Callout>

**Note:** `cmdk-sv` is a new library and is still in alpha. While I don't anticipate a ton of breaking changes, as the API aligns with the original, I want to bring this to your awareness. If you find any bugs, please [open an issue](https://github.com/huntabyte/cmdk-sv) with the library, rather than this project.

</Callout>

## Installation

<PMAddComp name="command" />

<ManualInstall>

1. Install `cmdk-sv` and `bits-ui`:

<PMInstall command="cmdk-sv bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import * as Command from "$lib/components/ui/command";
</script>

<Command.Root>
  <Command.Input placeholder="Type a command or search..." />
  <Command.List>
    <Command.Empty>No results found.</Command.Empty>
    <Command.Group heading="Suggestions">
      <Command.Item>Calendar</Command.Item>
      <Command.Item>Search Emoji</Command.Item>
      <Command.Item>Calculator</Command.Item>
    </Command.Group>
    <Command.Separator />
    <Command.Group heading="Settings">
      <Command.Item>Profile</Command.Item>
      <Command.Item>Billing</Command.Item>
      <Command.Item>Settings</Command.Item>
    </Command.Group>
  </Command.List>
</Command.Root>
```

## Examples

### Dialog

<ComponentPreview name="command-dialog">

<div />

</ComponentPreview>

To show the command menu in a dialog, use the `<Command.Dialog />` component instead of `<Command.Root />`. It accepts props for both the `<Dialog.Root />` and `<Command.Root />` components.

```svelte
<script lang="ts">
  import * as Command from "$lib/components/ui/command";
  import { onMount } from "svelte";

  let open = false;

  onMount(() => {
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        open = !open;
      }
    }

    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  });
</script>

<Command.Dialog bind:open>
  <Command.Input placeholder="Type a command or search..." />
  <Command.List>
    <Command.Empty>No results found.</Command.Empty>
    <Command.Group heading="Suggestions">
      <Command.Item>Calendar</Command.Item>
      <Command.Item>Search Emoji</Command.Item>
      <Command.Item>Calculator</Command.Item>
    </Command.Group>
  </Command.List>
</Command.Dialog>
```


---

# context-menu

---
title: Context Menu
description: Displays a menu to the user — such as a set of actions or functions — triggered by right click.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/context-menu
bits: https://www.bits-ui.com/docs/components/context-menu
---

<script>
    import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs'
</script>

<ComponentPreview name="context-menu-demo">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="context-menu" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import * as ContextMenu from "$lib/components/ui/context-menu";
</script>

<ContextMenu.Root>
  <ContextMenu.Trigger>Right click</ContextMenu.Trigger>
  <ContextMenu.Content>
    <ContextMenu.Item>Profile</ContextMenu.Item>
    <ContextMenu.Item>Billing</ContextMenu.Item>
    <ContextMenu.Item>Team</ContextMenu.Item>
    <ContextMenu.Item>Subscription</ContextMenu.Item>
  </ContextMenu.Content>
</ContextMenu.Root>
```


---

# data-table

---
title: Data Table
description: Powerful table and datagrids built using Svelte Headless Table.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/example/data-table-demo.svelte
---

<script>
    import { ComponentPreview, ManualInstall, Callout, Steps, PMAddComp, PMInstall } from '$lib/components/docs'
</script>

<ComponentPreview name="data-table-demo">

<div />

</ComponentPreview>

## Introduction

Data tables are difficult to componentize because of the wide variety of features they support, and the uniqueness of every data set.

So instead of trying to create a one-size-fits-all solution, we've created a guide to help you build your own data tables.

We'll start with the basic `<Table />` component, and work our way up to a fully-featured data table.

<Callout>

<strong>Tip:</strong> If you find yourself using the same table in multiple places, you can always extract it into a reusable component.

</Callout>

## Table of Contents

This guide will show you how to use [Svelte Headless Table](https://svelte-headless-table.bryanmylee.com/) and the `<Table />` component to build your own custom data table. We'll cover the following topics:

- Basic Table
- Row Actions
- Pagination
- Sorting
- Filtering
- Visibility
- Row Selection
- Reusable Components

## Installation

1. Add the `<Table />` component to your project:

<PMAddComp name="table" />

2. Add `svelte-headless-table` as a dependency:

<PMInstall command="svelte-headless-table" />

## Prerequisites

We're going to build a table to show recent payments. Here's what our data looks like:

```ts showLineNumbers
type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  // ...
];
```

## Project Structure

Start by creating a route where your data table will live (we'll call ours payments), along with the following files:

```txt
routes
└── payments
    ├── data-table.svelte
    ├── data-table-actions.svelte
    ├── data-table-checkbox.svelte
    └── +page.svelte
```

- `data-table.svelte` will contain the `<Table />` component all of our data table logic.
- `data-table-actions.svelte` will contain the actions menu for each row.
- `data-table-checkbox.svelte` will contain the checkbox for each row.
- `+page.svelte` is where we'll render and access `<DataTable />` component.

## Basic Table

Let's start by building a basic table.

<Steps>

### Get/Add Data

Before we can initialize a table, we need to get our data. You can retrieve your data from anywhere, but for this example we'll use a `payments` array.

```svelte showLineNumbers title="routes/payments/data-table.svelte"
<script lang="ts">
  type Payment = {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
  };

  const data: Payment[] = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "ken99@yahoo.com",
    },
    // ...
  ];
</script>
```

### Initialize Table

Next, we'll initialize a new table using `svelte-headless-table`.

```svelte showLineNumbers title="routes/payments/data-table.svelte" {2-3,22}
<script lang="ts">
  import { createTable } from "svelte-headless-table";
  import { readable } from "svelte/store";

  type Payment = {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
  };

  const data: Payment[] = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "ken99@yahoo.com",
    },
    // ...
  ];

  const table = createTable(readable(data));
</script>
```

### Create Columns

Now that we have a table, we can define our columns.

```svelte showLineNumbers title="routes/payments/data-table.svelte" {24-45}
<script lang="ts">
  import { createTable } from "svelte-headless-table";
  import { readable } from "svelte/store";

  type Payment = {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
  };

  const data: Payment[] = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "ken99@yahoo.com",
    },
    // ...
  ];

  const table = createTable(readable(data));

  const columns = table.createColumns([
    table.column({
      accessor: "id",
      header: "ID",
    }),
    table.column({
      accessor: "status",
      header: "Status",
    }),
    table.column({
      accessor: "email",
      header: "Email",
    }),
    table.column({
      accessor: "amount",
      header: "Amount",
    }),
    table.column({
      accessor: ({ id }) => id,
      header: "",
    }),
  ]);
</script>
```

The last column is where we'll render a menu of actions for each row.

### Create View Model & Render Table

Finally, we'll create a view model which we'll use to build our table.

```svelte showLineNumbers title="routes/payments/data-table.svelte" {2,4,48-49,52-90}
<script lang="ts">
  import { createTable, Render, Subscribe } from "svelte-headless-table";
  import { readable } from "svelte/store";
  import * as Table from "$lib/components/ui/table";

  type Payment = {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
  };

  const data: Payment[] = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "ken99@yahoo.com",
    },
    // ...
  ];

  const table = createTable(readable(data));

  const columns = table.createColumns([
    table.column({
      accessor: "id",
      header: "ID",
    }),
    table.column({
      accessor: "status",
      header: "Status",
    }),
    table.column({
      accessor: "email",
      header: "Email",
    }),
    table.column({
      accessor: "amount",
      header: "Amount",
    }),
    table.column({
      accessor: ({ id }) => id,
      header: "",
    }),
  ]);

  const { headerRows, pageRows, tableAttrs, tableBodyAttrs } =
    table.createViewModel(columns);
</script>

<div class="rounded-md border">
  <Table.Root {...$tableAttrs}>
    <Table.Header>
      {#each $headerRows as headerRow}
        <Subscribe rowAttrs={headerRow.attrs()}>
          <Table.Row>
            {#each headerRow.cells as cell (cell.id)}
              <Subscribe attrs={cell.attrs()} let:attrs props={cell.props()}>
                <Table.Head {...attrs}>
                  <Render of={cell.render()} />
                </Table.Head>
              </Subscribe>
            {/each}
          </Table.Row>
        </Subscribe>
      {/each}
    </Table.Header>
    <Table.Body {...$tableBodyAttrs}>
      {#each $pageRows as row (row.id)}
        <Subscribe rowAttrs={row.attrs()} let:rowAttrs>
          <Table.Row {...rowAttrs}>
            {#each row.cells as cell (cell.id)}
              <Subscribe attrs={cell.attrs()} let:attrs>
                <Table.Cell {...attrs}>
                  <Render of={cell.render()} />
                </Table.Cell>
              </Subscribe>
            {/each}
          </Table.Row>
        </Subscribe>
      {/each}
    </Table.Body>
  </Table.Root>
</div>
```

### Render the table

Finally, we'll render our table in our `+page.svelte` file.

```svelte showLineNumbers title="routes/payments/+page.svelte"
<script lang="ts">
  import DataTable from "./data-table.svelte";
</script>

<div class="container mx-auto py-10">
  <DataTable />
</div>
```

</Steps>

## Cell Formatting

Now that we have a basic table, let's format the `amount` cell to display the dollar amount. We'll also align the cell to the right.

<Steps>

### Update columns definition

First, we'll update our columns definition for the `amount` column to return a formatted string.

```ts showLineNumbers title="routes/payments/data-table.svelte" {17-23}
const columns = table.createColumns([
  table.column({
    accessor: "id",
    header: "ID",
  }),
  table.column({
    accessor: "status",
    header: "Status",
  }),
  table.column({
    accessor: "email",
    header: "Email",
  }),
  table.column({
    accessor: "amount",
    header: "Amount",
    cell: ({ value }) => {
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(value);
      return formatted;
    },
  }),
  table.column({
    accessor: ({ id }) => id,
    header: "",
  }),
]);
```

### Update styles

Now that we're returning a formatted string, let's now align the `amount` header and cell to the right. We'll also capitalize our `status` cell values.

```svelte showLineNumbers title="routes/payments/data-table.svelte" {10-16,31-41}
<div class="rounded-md border">
  <Table.Root {...$tableAttrs}>
    <Table.Header>
      {#each $headerRows as headerRow}
        <Subscribe rowAttrs={headerRow.attrs()}>
          <Table.Row>
            {#each headerRow.cells as cell (cell.id)}
              <Subscribe attrs={cell.attrs()} let:attrs props={cell.props()}>
                <Table.Head {...attrs}>
                  {#if cell.id === "amount"}
                    <div class="text-right">
                      <Render of={cell.render()} />
                    </div>
                  {:else}
                    <Render of={cell.render()} />
                  {/if}
                </Table.Head>
              </Subscribe>
            {/each}
          </Table.Row>
        </Subscribe>
      {/each}
    </Table.Header>
    <Table.Body {...$tableBodyAttrs}>
      {#each $pageRows as row (row.id)}
        <Subscribe rowAttrs={row.attrs()} let:rowAttrs>
          <Table.Row {...rowAttrs}>
            {#each row.cells as cell (cell.id)}
              <Subscribe attrs={cell.attrs()} let:attrs>
                <Table.Cell {...attrs}>
                  {#if cell.id === "amount"}
                    <div class="text-right font-medium">
                      <Render of={cell.render()} />
                    </div>
                  {:else if cell.id === "status"}
                    <div class="capitalize">
                      <Render of={cell.render()} />
                    </div>
                  {:else}
                    <Render of={cell.render()} />
                  {/if}
                </Table.Cell>
              </Subscribe>
            {/each}
          </Table.Row>
        </Subscribe>
      {/each}
    </Table.Body>
  </Table.Root>
</div>
```

You can use this approach to customize the styles of any cell in your table. In the following sections, we'll demonstrate how you can use a component to render a cell as well.

</Steps>

## Row Actions

Let's now add row actions to our table. We'll use a `<DropdownMenu />` and `<Button />` component for this.

<Steps>

### Create actions component

We'll start by creating a new component called `data-table-actions.svelte` which will contain our actions menu. It's going to receive an `id` prop, which we'll use to identify and perform specific actions on the row.

```svelte showLineNumbers title="routes/payments/data-table-actions.svelte"
<script lang="ts">
  import Ellipsis from "lucide-svelte/icons/ellipsis";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import { Button } from "$lib/components/ui/button";

  export let id: string;
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger asChild let:builder>
    <Button
      variant="ghost"
      builders={[builder]}
      size="icon"
      class="relative h-8 w-8 p-0"
    >
      <span class="sr-only">Open menu</span>
      <Ellipsis class="h-4 w-4" />
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Group>
      <DropdownMenu.Label>Actions</DropdownMenu.Label>
      <DropdownMenu.Item on:click={() => navigator.clipboard.writeText(id)}>
        Copy payment ID
      </DropdownMenu.Item>
    </DropdownMenu.Group>
    <DropdownMenu.Separator />
    <DropdownMenu.Item>View customer</DropdownMenu.Item>
    <DropdownMenu.Item>View payment details</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

### Update columns definition

Now that we've defined our actions component, let's update our `actions` column definition to use it.

```svelte showLineNumbers title="routes/payments/data-table.svelte" {6,10,58-60}
<script lang="ts">
  import {
    createTable,
    Render,
    Subscribe,
    createRender,
  } from "svelte-headless-table";
  import { readable } from "svelte/store";
  import * as Table from "$lib/components/ui/table";
  import DataTableActions from "./data-table-actions.svelte";

  type Payment = {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
  };

  const data: Payment[] = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "ken99@yahoo.com",
    },
    //...
  ];

  const table = createTable(readable(data));

  const columns = table.createColumns([
    table.column({
      accessor: "id",
      header: "ID",
    }),
    table.column({
      accessor: "status",
      header: "Status",
    }),
    table.column({
      accessor: "email",
      header: "Email",
    }),
    table.column({
      accessor: "amount",
      header: "Amount",
      cell: ({ value }) => {
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(value);
        return formatted;
      },
    }),
    table.column({
      accessor: ({ id }) => id,
      header: "",
      cell: ({ value }) => {
        return createRender(DataTableActions, { id: value });
      },
    }),
  ]);

  const { headerRows, pageRows, tableAttrs, tableBodyAttrs } =
    table.createViewModel(columns);
</script>
```

We're just passing the `id` to our actions component, but you could pass whatever information you need to perform actions on the row. In this example, we could use the `id` to make a DELETE request to our API to delete the payment.

</Steps>

## Pagination

Next, we'll add pagination to our table

<Steps>

### Enable the `addPagination` plugin

```svelte showLineNumbers title="routes/payments/data-table.svelte" {8,31-33,12,68,71}
<script lang="ts">
  import {
    createTable,
    Render,
    Subscribe,
    createRender,
  } from "svelte-headless-table";
  import { addPagination } from "svelte-headless-table/plugins";
  import { readable } from "svelte/store";
  import * as Table from "$lib/components/ui/table";
  import DataTableActions from "./data-table-actions.svelte";
  import { Button } from "$lib/components/ui/button";

  type Payment = {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
  };

  const data: Payment[] = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "ken99@yahoo.com",
    },
    //...
  ];

  const table = createTable(readable(data), {
    page: addPagination(),
  });

  const columns = table.createColumns([
    table.column({
      accessor: "id",
      header: "ID",
    }),
    table.column({
      accessor: "status",
      header: "Status",
    }),
    table.column({
      accessor: "email",
      header: "Email",
    }),
    table.column({
      accessor: "amount",
      header: "Amount",
      cell: ({ value }) => {
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(value);
        return formatted;
      },
    }),
    table.column({
      accessor: ({ id }) => id,
      header: "",
      cell: ({ value }) => {
        return createRender(DataTableActions, { id: value });
      },
    }),
  ]);

  const { headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates } =
    table.createViewModel(columns);

  const { hasNextPage, hasPreviousPage, pageIndex } = pluginStates.page;
</script>
```

### Add pagination controls

We can add pagination controls to our table using the `<Button />` component and the `hasNextPage`, `hasPreviousPage`, and `pageIndex` variables.

```svelte showLineNumbers title="routes/payments/data-table.svelte" {1,7-20,21}
<div>
  <div class="rounded-md border">
    <Table.Root {...$tableAttrs}>
      <!-- .... -->
    </Table.Root>
  </div>
  <div class="flex items-center justify-end space-x-4 py-4">
    <Button
      variant="outline"
      size="sm"
      on:click={() => ($pageIndex = $pageIndex - 1)}
      disabled={!$hasPreviousPage}>Previous</Button
    >
    <Button
      variant="outline"
      size="sm"
      disabled={!$hasNextPage}
      on:click={() => ($pageIndex = $pageIndex + 1)}>Next</Button
    >
  </div>
</div>
```

See the [pagination docs](https://svelte-headless-table.bryanmylee.com/docs/plugins/add-pagination) for more information on how to customize the pagination behavior.

</Steps>

## Sorting

Let's make the email column sortable.

<Steps>

### Enable the `addSortBy` plugin

Let's enable the `addSortBy` plugin and import the `<ArrowUpDown />` icon which we'll use to indicate the sort option for the column.

```svelte showLineNumbers title="routes/payments/data-table.svelte" {8,10,34,41-45,50-54,70-74,82-86}
<script lang="ts">
  import {
    createTable,
    Render,
    Subscribe,
    createRender,
  } from "svelte-headless-table";
  import { addPagination, addSortBy } from "svelte-headless-table/plugins";
  import { readable } from "svelte/store";
  import ArrowUpDown from "lucide-svelte/icons/arrow-up-down";
  import * as Table from "$lib/components/ui/table";
  import DataTableActions from "./data-table-actions.svelte";
  import { Button } from "$lib/components/ui/button";

  type Payment = {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
  };

  const data: Payment[] = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "ken99@yahoo.com",
    },
    //...
  ];

  const table = createTable(readable(data), {
    page: addPagination(),
    sort: addSortBy(),
  });

  const columns = table.createColumns([
    table.column({
      accessor: "id",
      header: "ID",
      plugins: {
        sort: {
          disable: true,
        },
      },
    }),
    table.column({
      accessor: "status",
      header: "Status",
      plugins: {
        sort: {
          disable: true,
        },
      },
    }),
    table.column({
      accessor: "email",
      header: "Email",
    }),
    table.column({
      accessor: "amount",
      header: "Amount",
      cell: ({ value }) => {
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(value);
        return formatted;
      },
      plugins: {
        sort: {
          disable: true,
        },
      },
    }),
    table.column({
      accessor: ({ id }) => id,
      header: "",
      cell: ({ value }) => {
        return createRender(DataTableActions, { id: value });
      },
      plugins: {
        sort: {
          disable: true,
        },
      },
    }),
  ]);

  const { headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates } =
    table.createViewModel(columns);

  const { hasNextPage, hasPreviousPage, pageIndex } = pluginStates.page;
</script>
```

### Make header cell sortable

We can now update the `email` header cell to add sorting controls.

```svelte showLineNumbers title="routes/payments/data-table.svelte" {11,18-22}
<Table.Root {...$tableAttrs}>
  <Table.Header>
    {#each $headerRows as headerRow}
      <Subscribe rowAttrs={headerRow.attrs()}>
        <Table.Row>
          {#each headerRow.cells as cell (cell.id)}
            <Subscribe
              attrs={cell.attrs()}
              let:attrs
              props={cell.props()}
              let:props
            >
              <Table.Head {...attrs}>
                {#if cell.id === "amount"}
                  <div class="text-right">
                    <Render of={cell.render()} />
                  </div>
                {:else if cell.id === "email"}
                  <Button variant="ghost" on:click={props.sort.toggle}>
                    <Render of={cell.render()} />
                    <ArrowUpDown class={"ml-2 h-4 w-4"} />
                  </Button>
                {:else}
                  <Render of={cell.render()} />
                {/if}
              </Table.Head>
            </Subscribe>
          {/each}
        </Table.Row>
      </Subscribe>
    {/each}
  </Table.Header>
  <Table.Body {...$tableBodyAttrs}>
    <!-- ... -->
  </Table.Body>
</Table.Root>
```

See the [sort docs](https://svelte-headless-table.bryanmylee.com/docs/plugins/add-sort-by) for more information on how to customize the sort behavior.

</Steps>

## Filtering

Let's add a search input to filter emails in our table.

<Steps>

### Enable the `addTableFilter` plugin

We'll start by enabling the `addTableFilter` plugin and importing the `<Input />` component we'll use for the search input.

```svelte showLineNumbers title="routes/payments/data-table.svelte" {11,18,40-43,54-56,66-68,89-91,104-106,115}
<script lang="ts">
  import {
    createTable,
    Render,
    Subscribe,
    createRender,
  } from "svelte-headless-table";
  import {
    addPagination,
    addSortBy,
    addTableFilter,
  } from "svelte-headless-table/plugins";
  import { readable } from "svelte/store";
  import ArrowUpDown from "lucide-svelte/icons/arrow-up-down";
  import * as Table from "$lib/components/ui/table";
  import DataTableActions from "./data-table-actions.svelte";
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";

  type Payment = {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
  };

  const data: Payment[] = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "ken99@yahoo.com",
    },
    // ...
  ];

  const table = createTable(readable(data), {
    page: addPagination(),
    sort: addSortBy(),
    filter: addTableFilter({
      fn: ({ filterValue, value }) =>
        value.toLowerCase().includes(filterValue.toLowerCase()),
    }),
  });

  const columns = table.createColumns([
    table.column({
      accessor: "id",
      header: "ID",
      plugins: {
        sort: {
          disable: true,
        },
        filter: {
          exclude: true,
        },
      },
    }),
    table.column({
      accessor: "status",
      header: "Status",
      plugins: {
        sort: {
          disable: true,
        },
        filter: {
          exclude: true,
        },
      },
    }),
    table.column({
      accessor: "email",
      header: "Email",
    }),
    table.column({
      accessor: "amount",
      header: "Amount",
      cell: ({ value }) => {
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(value);
        return formatted;
      },
      plugins: {
        sort: {
          disable: true,
        },
        filter: {
          exclude: true,
        },
      },
    }),
    table.column({
      accessor: ({ id }) => id,
      header: "",
      cell: ({ value }) => {
        return createRender(DataTableActions, { id: value });
      },
      plugins: {
        sort: {
          disable: true,
        },
        filter: {
          exclude: true,
        },
      },
    }),
  ]);

  const { headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates } =
    table.createViewModel(columns);

  const { pageIndex, hasNextPage, hasPreviousPage } = pluginStates.page;
  const { filterValue } = pluginStates.filter;
</script>
```

We're excluding all columns except for `email` from the filter plugin, and we're using a case-insensitive filter function to match the email value.

### Add search input

Now that our table is configured to filter by email, let's add a search input on top of our table.

```svelte showLineNumbers title="routes/payments/data-table.svelte" {2-9}
<div>
  <div class="flex items-center py-4">
    <Input
      class="max-w-sm"
      placeholder="Filter emails..."
      type="text"
      bind:value={$filterValue}
    />
  </div>
  <div class="rounded-md border">
    <Table.Root>
      <!-- ... -->
    </Table.Root>
  </div>
  <div class="flex items-center justify-end space-x-4 py-4">
    <!-- ... -->
  </div>
</div>
```

Since `filterValue` is a store, we can bind it to the input value and it will automatically update as the user types.

See the [filter docs](https://svelte-headless-table.bryanmylee.com/docs/plugins/add-table-filter) for more information on how to customize the filtering behavior.

</Steps>

## Visibility

Let's add the ability to control which columns are visible in our table.

<Steps>

### Enable `addHiddenColumns` plugin

We'll start by enabling the `addHiddenColumns` plugin. We'll also need a `<ChevronDown />` icon and the `<DropdownMenu />` component in the next step.

```svelte showLineNumbers title="routes/payments/data-table.svelte" {12,16,21,45,119,124,126-127,129-131,133}
<script lang="ts">
  import {
    createTable,
    Render,
    Subscribe,
    createRender,
  } from "svelte-headless-table";
  import {
    addPagination,
    addSortBy,
    addTableFilter,
    addHiddenColumns,
  } from "svelte-headless-table/plugins";
  import { readable } from "svelte/store";
  import ArrowUpDown from "lucide-svelte/icons/arrow-up-down";
  import ChevronDown from "lucide-svelte/icons/chevron-down";
  import * as Table from "$lib/components/ui/table";
  import DataTableActions from "./data-table-actions.svelte";
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";

  type Payment = {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
  };
  const data: Payment[] = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "ken99@yahoo.com",
    },
    // ...
  ];

  const table = createTable(readable(data), {
    page: addPagination(),
    sort: addSortBy({ disableMultiSort: true }),
    filter: addTableFilter({
      fn: ({ filterValue, value }) => value.includes(filterValue),
    }),
    hide: addHiddenColumns(),
  });

  const columns = table.createColumns([
    table.column({
      accessor: "id",
      header: "ID",
      plugins: {
        sort: {
          disable: true,
        },
        filter: {
          exclude: true,
        },
      },
    }),
    table.column({
      accessor: "status",
      header: "Status",
      plugins: {
        sort: {
          disable: true,
        },
        filter: {
          exclude: true,
        },
      },
    }),
    table.column({
      accessor: "email",
      header: "Email",
    }),
    table.column({
      accessor: "amount",
      header: "Amount",
      cell: ({ value }) => {
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(value);
        return formatted;
      },
      plugins: {
        sort: {
          disable: true,
        },
        filter: {
          exclude: true,
        },
      },
    }),
    table.column({
      accessor: ({ id }) => id,
      header: "",
      cell: ({ value }) => {
        return createRender(DataTableActions, { id: value });
      },
      plugins: {
        sort: {
          disable: true,
        },
        filter: {
          exclude: true,
        },
      },
    }),
  ]);

  const {
    headerRows,
    pageRows,
    tableAttrs,
    tableBodyAttrs,
    pluginStates,
    flatColumns,
  } = table.createViewModel(columns);

  const { pageIndex, hasNextPage, hasPreviousPage } = pluginStates.page;
  const { filterValue } = pluginStates.filter;
  const { hiddenColumnIds } = pluginStates.hide;

  const ids = flatColumns.map((col) => col.id);
  let hideForId = Object.fromEntries(ids.map((id) => [id, true]));

  $: $hiddenColumnIds = Object.entries(hideForId)
    .filter(([, hide]) => !hide)
    .map(([id]) => id);

  const hidableCols = ["status", "email", "amount"];
</script>
```

We're setting the `hiddenColumnIds` store from the plugin whenever `hideForId` changes to reflect our newly chosen hidden/shown columns.

### Add column visibility controls

Now we'll use the icon and `<DropdownMenu />` we imported in the previous step to render a menu of columns that can be hidden.

```svelte showLineNumbers title="routes/payments/data-table.svelte" {9-24}
<div>
  <div class="flex items-center py-4">
    <Input
      class="max-w-sm"
      placeholder="Filter emails..."
      type="text"
      bind:value={$filterValue}
    />
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild let:builder>
        <Button variant="outline" class="ml-auto" builders={[builder]}>
          Columns <ChevronDown class="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        {#each flatColumns as col}
          {#if hidableCols.includes(col.id)}
            <DropdownMenu.CheckboxItem bind:checked={hideForId[col.id]}>
              {col.header}
            </DropdownMenu.CheckboxItem>
          {/if}
        {/each}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </div>
  <div class="rounded-md border">
    <Table.Root>
      <!-- ... -->
    </Table.Root>
  </div>
  <div class="flex items-center justify-end space-x-4 py-4">
    <!-- .... -->
  </div>
</div>
```

See the [hidden columns docs](https://svelte-headless-table.bryanmylee.com/docs/plugins/add-hidden-columns) for more information.

</Steps>

## Row Selection

Next, we're going to add row selection to our table.

<Steps>

### Create checkbox component

We'll start by creating a new component called `data-table-checkbox.svelte` which will be used to render a checkbox for each row.

```svelte showLineNumbers title="routes/payments/data-table-checkbox.svelte"
<script lang="ts">
  import { Checkbox } from "$lib/components/ui/checkbox";
  import type { Writable } from "svelte/store";

  export let checked: Writable<boolean>;
</script>

<Checkbox bind:checked={$checked} />
```

### Enable `addSelectedRows` plugin

Next, we'll enable the `addSelectedRows` plugin and import the `<Checkbox />` component we just created.

```svelte showLineNumbers title="routes/payments/data-table.svelte" {13,23,49,55-68,137,143}
<script lang="ts">
  import {
    createTable,
    Render,
    Subscribe,
    createRender,
  } from "svelte-headless-table";
  import {
    addPagination,
    addSortBy,
    addTableFilter,
    addHiddenColumns,
    addSelectedRows,
  } from "svelte-headless-table/plugins";
  import { readable } from "svelte/store";
  import ArrowUpDown from "lucide-svelte/icons/arrow-up-down";
  import ChevronDown from "lucide-svelte/icons/chevron-down";
  import * as Table from "$lib/components/ui/table";
  import DataTableActions from "./data-table-actions.svelte";
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import DataTableCheckbox from "./data-table-checkbox.svelte";

  type Payment = {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
  };

  const data: Payment[] = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "ken99@yahoo.com",
    },
    // ...
  ];

  const table = createTable(readable(data), {
    page: addPagination(),
    sort: addSortBy({ disableMultiSort: true }),
    filter: addTableFilter({
      includeHiddenColumns: true,
      fn: ({ filterValue, value }) => value.includes(filterValue),
    }),
    hide: addHiddenColumns(),
    select: addSelectedRows(),
  });

  const columns = table.createColumns([
    table.column({
      accessor: "id",
      header: (_, { pluginStates }) => {
        const { allPageRowsSelected } = pluginStates.select;
        return createRender(DataTableCheckbox, {
          checked: allPageRowsSelected,
        });
      },
      cell: ({ row }, { pluginStates }) => {
        const { getRowState } = pluginStates.select;
        const { isSelected } = getRowState(row);

        return createRender(DataTableCheckbox, {
          checked: isSelected,
        });
      },
      plugins: {
        sort: {
          disable: true,
        },
        filter: {
          exclude: true,
        },
      },
    }),
    table.column({
      accessor: "status",
      header: "Status",
      plugins: {
        sort: {
          disable: true,
        },
        filter: {
          exclude: true,
        },
      },
    }),
    table.column({
      accessor: "email",
      header: "Email",
    }),
    table.column({
      accessor: "amount",
      header: "Amount",
      cell: ({ value }) => {
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(value);
        return formatted;
      },
      plugins: {
        sort: {
          disable: true,
        },
        filter: {
          exclude: true,
        },
      },
    }),
    table.column({
      accessor: ({ id }) => id,
      header: "",
      cell: ({ value }) => {
        return createRender(DataTableActions, { id: value });
      },
      plugins: {
        sort: {
          disable: true,
        },
        filter: {
          exclude: true,
        },
      },
    }),
  ]);

  const {
    headerRows,
    pageRows,
    tableAttrs,
    tableBodyAttrs,
    pluginStates,
    flatColumns,
    rows,
  } = table.createViewModel(columns);

  const { pageIndex, hasNextPage, hasPreviousPage } = pluginStates.page;
  const { filterValue } = pluginStates.filter;
  const { hiddenColumnIds } = pluginStates.hide;
  const { selectedDataIds } = pluginStates.select;

  const ids = flatColumns.map((col) => col.id);
  let hideForId = Object.fromEntries(ids.map((id) => [id, true]));

  $: $hiddenColumnIds = Object.entries(hideForId)
    .filter(([, hide]) => !hide)
    .map(([id]) => id);

  const hidableCols = ["status", "email", "amount"];
</script>
```

### Update styles & show selected rows

To accommodate the checkbox, we'll need to update our table styles. We'll also add a message to show how many rows are selected.

```svelte showLineNumbers title="routes/payments/data-table.svelte" {39,62-65,90-93}
<div>
  <div class="flex items-center py-4">
    <Input
      class="max-w-sm"
      placeholder="Filter emails..."
      type="text"
      bind:value={$filterValue}
    />
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild let:builder>
        <Button variant="outline" class="ml-auto" builders={[builder]}>
          Columns <ChevronDown class="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        {#each flatColumns as col}
          {#if hidableCols.includes(col.id)}
            <DropdownMenu.CheckboxItem bind:checked={hideForId[col.id]}>
              {col.header}
            </DropdownMenu.CheckboxItem>
          {/if}
        {/each}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </div>
  <div class="rounded-md border">
    <Table.Root {...$tableAttrs}>
      <Table.Header>
        {#each $headerRows as headerRow}
          <Subscribe rowAttrs={headerRow.attrs()}>
            <Table.Row>
              {#each headerRow.cells as cell (cell.id)}
                <Subscribe
                  attrs={cell.attrs()}
                  let:attrs
                  props={cell.props()}
                  let:props
                >
                  <Table.Head {...attrs} class="[&:has([role=checkbox])]:pl-3">
                    {#if cell.id === "amount"}
                      <div class="text-right">
                        <Render of={cell.render()} />
                      </div>
                    {:else if cell.id === "email"}
                      <Button variant="ghost" on:click={props.sort.toggle}>
                        <Render of={cell.render()} />
                        <ArrowUpDown class={"ml-2 h-4 w-4"} />
                      </Button>
                    {:else}
                      <Render of={cell.render()} />
                    {/if}
                  </Table.Head>
                </Subscribe>
              {/each}
            </Table.Row>
          </Subscribe>
        {/each}
      </Table.Header>
      <Table.Body {...$tableBodyAttrs}>
        {#each $pageRows as row (row.id)}
          <Subscribe rowAttrs={row.attrs()} let:rowAttrs>
            <Table.Row
              {...rowAttrs}
              data-state={$selectedDataIds[row.id] && "selected"}
            >
              {#each row.cells as cell (cell.id)}
                <Subscribe attrs={cell.attrs()} let:attrs>
                  <Table.Cell {...attrs} class="[&:has([role=checkbox])]:pl-3">
                    {#if cell.id === "amount"}
                      <div class="text-right font-medium">
                        <Render of={cell.render()} />
                      </div>
                    {:else if cell.id === "status"}
                      <div class="capitalize">
                        <Render of={cell.render()} />
                      </div>
                    {:else}
                      <Render of={cell.render()} />
                    {/if}
                  </Table.Cell>
                </Subscribe>
              {/each}
            </Table.Row>
          </Subscribe>
        {/each}
      </Table.Body>
    </Table.Root>
  </div>
  <div class="flex items-center justify-end space-x-4 py-4">
    <div class="text-muted-foreground flex-1 text-sm">
      {Object.keys($selectedDataIds).length} of{" "}
      {$rows.length} row(s) selected.
    </div>
    <Button
      variant="outline"
      size="sm"
      on:click={() => ($pageIndex = $pageIndex - 1)}
      disabled={!$hasPreviousPage}>Previous</Button
    >
    <Button
      variant="outline"
      size="sm"
      disabled={!$hasNextPage}
      on:click={() => ($pageIndex = $pageIndex + 1)}>Next</Button
    >
  </div>
</div>
```

See the [selected row docs](https://svelte-headless-table.bryanmylee.com/docs/plugins/add-selected-rows) for more information on how to customize the selection behavior.

</Steps>


---

# date-picker

---
title: Date Picker
description: A date picker component with range and presets.
component: true
source: https://github.com/huntabyte/shadcn-svelte/blob/main/sites/docs/src/lib/registry/default/example/date-picker-demo.svelte
---

<script>
    import { ComponentPreview, ManualInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="date-picker-demo">

<div />

</ComponentPreview>

## Installation

The Date Picker is built using a composition of the `<Popover />` and either the `<Calendar />` or `<RangeCalendar />` components.

See installations instructions for the [Popover](/docs/components/popover#installation), [Calendar](/docs/components/calendar#installation), and [Range Calendar](/docs/components/range-calendar#installation) components.

## Usage

```svelte
<script lang="ts">
  import CalendarIcon from "lucide-svelte/icons/calendar";
  import {
    type DateValue,
    DateFormatter,
    getLocalTimeZone,
  } from "@internationalized/date";
  import { cn } from "$lib/utils.js";
  import { Button } from "$lib/components/ui/button";
  import { Calendar } from "$lib/components/ui/calendar";
  import * as Popover from "$lib/components/ui/popover";

  const df = new DateFormatter("en-US", {
    dateStyle: "long",
  });

  let value: DateValue | undefined = undefined;
</script>

<Popover.Root openFocus>
  <Popover.Trigger asChild let:builder>
    <Button
      variant="outline"
      class={cn(
        "w-[280px] justify-start text-left font-normal",
        !value && "text-muted-foreground"
      )}
      builders={[builder]}
    >
      <CalendarIcon class="mr-2 h-4 w-4" />
      {value ? df.format(value.toDate(getLocalTimeZone())) : "Select a date"}
    </Button>
  </Popover.Trigger>
  <Popover.Content class="w-auto p-0">
    <Calendar bind:value initialFocus />
  </Popover.Content>
</Popover.Root>
```

## Examples

### Date Picker

<ComponentPreview name="date-picker-demo">

<div />

</ComponentPreview>

### Date Range Picker

<ComponentPreview name="date-picker-with-range">

<div />

</ComponentPreview>

### With Presets

<ComponentPreview name="date-picker-with-presets">

<div />

</ComponentPreview>

### Form

<ComponentPreview name="date-picker-form">

<div />

</ComponentPreview>


---

# dialog

---
title: Dialog
description: A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
component: true
featured: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/dialog
bits: https://www.bits-ui.com/docs/components/dialog
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="dialog-demo">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="dialog" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import * as Dialog from "$lib/components/ui/dialog";
</script>

<Dialog.Root>
  <Dialog.Trigger>Open</Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title>Are you sure absolutely sure?</Dialog.Title>
      <Dialog.Description>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </Dialog.Description>
    </Dialog.Header>
  </Dialog.Content>
</Dialog.Root>
```


---

# drawer

---
title: Drawer
description: A drawer component for Svelte.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/drawer
bits: https://www.vaul-svelte.com
---

<script>
    import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs'
</script>

<ComponentPreview name="drawer-demo">

<div />

</ComponentPreview>

## About

Drawer is built on top of [Vaul Svelte](https://vaul-svelte.com), which is a Svelte port of [Vaul](https://vaul.emilkowal.ski) by [Emil Kowalski](https://twitter.com/emilkowalski_).

## Installation

<PMAddComp name="drawer" />

<ManualInstall>

1. Install `vaul-svelte`:

<PMInstall command="vaul-svelte" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import * as Drawer from "$lib/components/ui/drawer";
</script>

<Drawer.Root>
  <Drawer.Trigger>Open</Drawer.Trigger>
  <Drawer.Content>
    <Drawer.Header>
      <Drawer.Title>Are you sure absolutely sure?</Drawer.Title>
      <Drawer.Description>This action cannot be undone.</Drawer.Description>
    </Drawer.Header>
    <Drawer.Footer>
      <Button>Submit</Button>
      <Drawer.Close>Cancel</Drawer.Close>
    </Drawer.Footer>
  </Drawer.Content>
</Drawer.Root>
```

## Examples

### Responsive Dialog

You can combine the `Dialog` and `Drawer` components to create a responsive dialog. This renders a `Dialog` on desktop and a `Drawer` on mobile.

<ComponentPreview name="drawer-dialog">

<div />

</ComponentPreview>


---

# dropdown-menu

---
title: Dropdown Menu
description: Displays a menu to the user — such as a set of actions or functions — triggered by a button.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/dropdown-menu
bits: https://www.bits-ui.com/docs/components/dropdown-menu
---

<script>
    import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs'
</script>

<ComponentPreview name="dropdown-menu-demo">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="dropdown-menu" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Group>
      <DropdownMenu.Label>My Account</DropdownMenu.Label>
      <DropdownMenu.Separator />
      <DropdownMenu.Item>Profile</DropdownMenu.Item>
      <DropdownMenu.Item>Billing</DropdownMenu.Item>
      <DropdownMenu.Item>Team</DropdownMenu.Item>
      <DropdownMenu.Item>Subscription</DropdownMenu.Item>
    </DropdownMenu.Group>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

## Examples

### Checkboxes

<ComponentPreview name="dropdown-menu-checkboxes">

<div />

</ComponentPreview>

### Radio Group

<ComponentPreview name="dropdown-menu-radio-group">

<div />

</ComponentPreview>


---

# form

---
title: Formsnap & Superforms
description: Building forms with Formsnap, Superforms, & Zod.
---

<script>
 	import { Steps, ComponentPreview, FormPreview, PMAddComp, PMInstall } from '$lib/components/docs';

	export let form;
</script>

Forms are tricky. They are one of the most common things you'll build in a web application, but also one of the most complex.

Well-designed HTML forms are:

- Well-structured and semantically correct.
- Easy to use and navigate (keyboard).
- Accessible with ARIA attributes and proper labels.
- Has support for client and server side validation.
- Well-styled and consistent with the rest of the application.

In this guide, we will take a look at building forms with [formsnap](https://formsnap.dev), [sveltekit-superforms](https://superforms.rocks) and [zod](https://zod.dev).

## Features

The `Form` components offered by `shadcn-svelte` are wrappers around `formsnap` & `sveltekit-superforms` which provide a few things:

- Composable components for building forms.
- Form field components for scoping form state.
- Form validation using [Zod](https://zod.dev) or any other validation library supported by [Superforms](https://superforms.rocks).
- Applies the correct `aria` attributes to form fields based on states.
- Enables you to easily use various components like [Select](/docs/components/select), [RadioGroup](/docs/components/radio-group), [Switch](/docs/components/switch), [Checkbox](/docs/components/checkbox) and other form components with forms.

If you aren't familiar with [Superforms](https://superforms.rocks) & [Formsnap](https://formsnap.dev), you should check out their documentation first, as this guide assumes you have a basic understanding of how they work together.

## Anatomy

```svelte
<form>
  <Form.Field>
    <Form.Control>
      <Form.Label />
      <!-- Any Form input component -->
    </Form.Control>
    <Form.Description />
    <Form.FieldErrors />
  </Form.Field>
</form>
```

## Example

```svelte
<form method="POST" use:enhance>
  <Form.Field {form} name="email">
    <Form.Control let:attrs>
      <Form.Label>Email</Form.Label>
      <Input {...attrs} bind:value={$formData.email} />
    </Form.Control>
    <Form.Description />
    <Form.FieldErrors />
  </Form.Field>
</form>
```

## Installation

<PMAddComp name="form" />

## Usage

<Steps>

### Create a form schema

Define the shape of your form using a Zod schema. You can read more about using Zod in the [Zod documentation](https://zod.dev). We're going to define it in a file called `schema.ts` in the same directory as our page component, but you can put it anywhere you like.

```ts title="src/routes/settings/schema.ts" showLineNumbers
import { z } from "zod";

export const formSchema = z.object({
  username: z.string().min(2).max(50),
});

export type FormSchema = typeof formSchema;
```

### Return the form from the route's load function

```ts title="src/routes/settings/+page.server.ts" showLineNumbers
import type { PageServerLoad } from "./$types.js";
import { superValidate } from "sveltekit-superforms";
import { formSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(formSchema)),
  };
};
```

### Create a form component

For this example, we'll be passing the `form` returned from the load function as a prop to this component. To ensure it's typed properly, we'll use the `SuperValidated` type from `sveltekit-superforms`, and pass in the type of our form schema.

```svelte title="src/routes/settings/settings-form.svelte" showLineNumbers
<script lang="ts">
  import * as Form from "$lib/components/ui/form";
  import { Input } from "$lib/components/ui/input";
  import { formSchema, type FormSchema } from "./schema";
  import {
    type SuperValidated,
    type Infer,
    superForm,
  } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";

  export let data: SuperValidated<Infer<FormSchema>>;

  const form = superForm(data, {
    validators: zodClient(formSchema),
  });

  const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance>
  <Form.Field {form} name="username">
    <Form.Control let:attrs>
      <Form.Label>Username</Form.Label>
      <Input {...attrs} bind:value={$formData.username} />
    </Form.Control>
    <Form.Description>This is your public display name.</Form.Description>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Button>Submit</Form.Button>
</form>
```

The `name`, `id`, and all accessibility attributes are applied to the input by spreading the `attrs` object from the `Form.Control` component. The `Form.Label` will automatically be associated with the input using the `for` attribute, so you don't have to worry about that.

### Create a page component that uses the form

We'll pass the `form` from the data returned from the load function to the form component we created above.

```svelte title="src/routes/settings/+page.svelte" showLineNumbers
<script lang="ts">
  import type { PageData } from "./$types.js";
  import SettingsForm from "./settings-form.svelte";
  export let data: PageData;
</script>

<SettingsForm data={data.form} />
```

### Create an Action that handles the form submission

```ts title="src/routes/settings/+page.server.ts" showLineNumbers {1-2,13-25}
import type { PageServerLoad, Actions } from "./$types.js";
import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { formSchema } from "./schema";

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(formSchema)),
  };
};

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(formSchema));
    if (!form.valid) {
      return fail(400, {
        form,
      });
    }
    return {
      form,
    };
  },
};
```

### Done

That's it. You now have a fully accessible form that is type-safe and has client & server side validation.

<FormPreview {form} />

</Steps>

## Next Steps

Be sure to check out the [Formsnap](https://formsnap.dev) and [Superforms](https://superforms.rocks) documentation for more information on how to use them.

## Examples

See the following links for more examples on how to use the other `Form` components:

- [Checkbox](/docs/components/checkbox#form)
- [Date Picker](/docs/components/date-picker#form)
- [Input](/docs/components/input#form)
- [Radio Group](/docs/components/radio-group#form)
- [Select](/docs/components/select#form)
- [Switch](/docs/components/switch#form)
- [Textarea](/docs/components/textarea#form)


---

# hover-card

---
title: Hover Card
description: For sighted users to preview content available behind a link.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/hover-card
bits: https://www.bits-ui.com/docs/components/link-preview
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="hover-card-demo">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="hover-card" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import * as HoverCard from "$lib/components/ui/hover-card";
</script>

<HoverCard.Root>
  <HoverCard.Trigger>Hover</HoverCard.Trigger>
  <HoverCard.Content>
    SvelteKit - Web development, streamlined
  </HoverCard.Content>
</HoverCard.Root>
```


---

# input

---
title: Input
description: Displays a form input field or a component that looks like an input field.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/input
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp} from '$lib/components/docs';

  export let form;
</script>

<ComponentPreview name="input-demo">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="input" />

<ManualInstall>

1. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import { Input } from "$lib/components/ui/input";
</script>

<Input />
```

## Examples

### Default

<ComponentPreview name="input-demo">

<div />

</ComponentPreview>

### Disabled

<ComponentPreview name="input-disabled">

<div />

</ComponentPreview>

### With Label

<ComponentPreview name="input-with-label">

<div />

</ComponentPreview>

### With Text

<ComponentPreview name="input-with-text">

<div />

</ComponentPreview>

### With Button

<ComponentPreview name="input-with-button">

<div />

</ComponentPreview>

### File

<ComponentPreview name="input-file">

<div />

</ComponentPreview>

### Form

<ComponentPreview name="form-demo" {form}>

<div />

</ComponentPreview>


---

# label

---
title: Label
description: Renders an accessible label associated with controls.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/label
bits: https://www.bits-ui.com/docs/components/label
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="label-demo">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="label" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import { Label } from "$lib/components/ui/label";
</script>

<Label for="email">Your email address</Label>
```


---

# menubar

---
title: Menubar
description: A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/menubar
bits: https://www.bits-ui.com/docs/components/menubar
---

<script>
    import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs'
</script>

<ComponentPreview name="menubar-demo">

</ComponentPreview>

## Installation

<PMAddComp name="menubar" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import * as Menubar from "$lib/components/ui/menubar";
</script>

<Menubar.Root>
  <Menubar.Menu>
    <Menubar.Trigger>File</Menubar.Trigger>
    <Menubar.Content>
      <Menubar.Item>
        New Tab
        <Menubar.Shortcut>⌘T</Menubar.Shortcut>
      </Menubar.Item>
      <Menubar.Item>New Window</Menubar.Item>
      <Menubar.Separator />
      <Menubar.Item>Share</Menubar.Item>
      <Menubar.Separator />
      <Menubar.Item>Print</Menubar.Item>
    </Menubar.Content>
  </Menubar.Menu>
</Menubar.Root>
```


---

# pagination

---
title: Pagination
description: Pagination with page navigation, next and previous links.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/pagination
bits: https://www.bits-ui.com/docs/components/pagination
---

<script>
    import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="pagination-demo" >

<div />

</ComponentPreview>

## Installation

<PMAddComp name="pagination" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import * as Pagination from "$lib/components/ui/pagination";
</script>

<Pagination.Root count={100} perPage={10} let:pages let:currentPage>
  <Pagination.Content>
    <Pagination.Item>
      <Pagination.PrevButton />
    </Pagination.Item>
    {#each pages as page (page.key)}
      {#if page.type === "ellipsis"}
        <Pagination.Item>
          <Pagination.Ellipsis />
        </Pagination.Item>
      {:else}
        <Pagination.Item isVisible={currentPage == page.value}>
          <Pagination.Link {page} isActive={currentPage == page.value}>
            {page.value}
          </Pagination.Link>
        </Pagination.Item>
      {/if}
    {/each}
    <Pagination.Item>
      <Pagination.NextButton />
    </Pagination.Item>
  </Pagination.Content>
</Pagination.Root>
```


---

# popover

---
title: Popover
description: Displays rich content in a portal, triggered by a button.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/popover
bits: https://www.bits-ui.com/docs/components/popover
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="popover-demo">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="popover" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import * as Popover from "$lib/components/ui/popover";
</script>

<Popover.Root>
  <Popover.Trigger>Open</Popover.Trigger>
  <Popover.Content>Place content for the popover here.</Popover.Content>
</Popover.Root>
```


---

# progress

---
title: Progress
description: Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/progress
bits: https://www.bits-ui.com/docs/components/progress
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="progress-demo">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="progress" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import { Progress } from "$lib/components/ui/progress";
</script>

<Progress value={33} />
```


---

# radio-group

---
title: Radio Group
description: A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/radio-group
bits: https://www.bits-ui.com/docs/components/radio-group
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="radio-group-demo">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="radio-group" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import { Label } from "$lib/components/ui/label";
  import * as RadioGroup from "$lib/components/ui/radio-group";
</script>

<RadioGroup.Root value="option-one">
  <div class="flex items-center space-x-2">
    <RadioGroup.Item value="option-one" id="option-one" />
    <Label for="option-one">Option One</Label>
  </div>
  <div class="flex items-center space-x-2">
    <RadioGroup.Item value="option-two" id="option-two" />
    <Label for="option-two">Option Two</Label>
  </div>
</RadioGroup.Root>
```

## Examples

### Form

<ComponentPreview name="radio-group-form">

<div />

</ComponentPreview>


---

# range-calendar

---
title: Range Calendar
description: A calendar component that allows users to select a range of dates.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/range-calendar
bits: https://www.bits-ui.com/docs/components/range-calendar
---

<script>
    import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="range-calendar-demo">

<div />

</ComponentPreview>

## About

The `<RangeCalendar />` component is built on top of the [Bits Range Calendar](https://www.bits-ui.com/docs/components/range-calendar) component, which uses the [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/index.html) package to handle dates.

## Installation

<PMAddComp name="range-calendar" />

<ManualInstall>

1. Install `bits-ui` and `@internationalized/date`:

<PMInstall command="bits-ui @internationalized/date" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>


---

# resizable

---
title: Resizable
description: Accessible resizable panel groups and layouts with keyboard support.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/resizable
bits: https://paneforge.com
---

<script>
	import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs'
</script>

<ComponentPreview name="resizable-demo">

<div />

</ComponentPreview>

## About

The `Resizable` component is built on top of [PaneForge](https://github.com/svecosystem/paneforge) by [Huntabyte](https://github.com/huntabyte). Visit the [PaneForge documentation](https://paneforge.com) for all the available props and abilities of the `Resizable` component.

## Installation

<PMAddComp name="resizable" />

<ManualInstall>

1. Install `paneforge`:

<PMInstall command="paneforge" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import * as Resizable from "$lib/components/ui/resizable";
</script>

<Resizable.PaneGroup direction="horizontal">
  <Resizable.Pane>One</Resizable.Pane>
  <Resizable.Handle />
  <Resizable.Pane>Two</Resizable.Pane>
</Resizable.PaneGroup>
```

## Examples

### Vertical

Use the `direction` prop to set the direction of the resizable panels.

<ComponentPreview name="resizable-vertical">

<div />

</ComponentPreview>

```svelte showLineNumbers {5}
<script lang="ts">
  import * as Resizable from "$lib/components/ui/resizable";
</script>

<Resizable.PaneGroup direction="vertical">
  <Resizable.Pane>One</Resizable.Pane>
  <Resizable.Handle />
  <Resizable.Pane>Two</Resizable.Pane>
</Resizable.PaneGroup>
```

### Handle

You can set or hide the handle by using the `withHandle` prop on the `ResizableHandle` component.

<ComponentPreview name="resizable-handle">

<div />

</ComponentPreview>

```svelte showLineNumbers {7}
<script lang="ts">
  import * as Resizable from "$lib/components/ui/resizable";
</script>

<Resizable.PaneGroup direction="vertical">
  <Resizable.Pane>One</Resizable.Pane>
  <Resizable.Handle withHandle />
  <Resizable.Pane>Two</Resizable.Pane>
</Resizable.PaneGroup>
```


---

# scroll-area

---
title: Scroll Area
description: Augments native scroll functionality for custom, cross-browser styling.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/scroll-area
bits: https://bits-ui.com/docs/components/scroll-area
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="scroll-area-demo">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="scroll-area" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
</script>

<ScrollArea class="h-[200px] w-[350px] rounded-md border p-4">
  Jokester began sneaking into the castle in the middle of the night and
  leaving jokes all over the place: under the king's pillow, in his soup, even
  in the royal toilet. The king was furious, but he couldn't seem to stop
  Jokester. And then, one day, the people of the kingdom discovered that the
  jokes left by Jokester were so funny that they couldn't help but laugh. And
  once they started laughing, they couldn't stop.
</ScrollArea>
```

## Examples

### Horizontal Scrolling

Set the `orientation` prop to `"horizontal"` to enable horizontal scrolling.

<ComponentPreview name="scroll-area-horizontal">

<div />

</ComponentPreview>

### Horizontal and Vertical Scrolling

Set the `orientation` prop to `"both"` to enable both horizontal and vertical scrolling.

<ComponentPreview name="scroll-area-both">

<div />

</ComponentPreview>


---

# select

---
title: Select
description: Displays a list of options for the user to pick from—triggered by a button.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/select
bits: https://www.bits-ui.com/docs/components/select
---

<script>
    import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs'
</script>

<ComponentPreview name="select-demo">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="select" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import * as Select from "$lib/components/ui/select";
</script>

<Select.Root>
  <Select.Trigger class="w-[180px]">
    <Select.Value placeholder="Theme" />
  </Select.Trigger>
  <Select.Content>
    <Select.Item value="light">Light</Select.Item>
    <Select.Item value="dark">Dark</Select.Item>
    <Select.Item value="system">System</Select.Item>
  </Select.Content>
</Select.Root>
```

## Examples

### Form

For more advanced usage and to learn how to implement `multiple` Select components in a form, check out the [Bits UI Select Recipe](https://formsnap.dev/docs/recipes/bits-ui-select) on Formsnap.

<ComponentPreview name="select-form">

<div />

</ComponentPreview>


---

# separator

---
title: Separator
description: Visually or semantically separates content.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/separator
bits: https://www.bits-ui.com/docs/components/separator
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="separator-demo">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="separator" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import { Separator } from "$lib/components/ui/separator";
</script>

<Separator />
```


---

# sheet

---
title: Sheet
description: Extends the Dialog component to display content that complements the main content of the screen.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/sheet
bits: https://www.bits-ui.com/docs/components/dialog
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="sheet-demo">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="sheet" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import * as Sheet from "$lib/components/ui/sheet";
</script>

<Sheet.Root>
  <Sheet.Trigger>Open</Sheet.Trigger>
  <Sheet.Content>
    <Sheet.Header>
      <Sheet.Title>Are you sure absolutely sure?</Sheet.Title>
      <Sheet.Description>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </Sheet.Description>
    </Sheet.Header>
  </Sheet.Content>
</Sheet.Root>
```

## Examples

### Side

Pass the `side` property to `<SheetContent />` to indicate the edge of the screen where the component will appear. The values can be `top`, `right`, `bottom` or `left`.

<ComponentPreview name="sheet-side">

<div />

</ComponentPreview>


---

# skeleton

---
title: Skeleton
description: Use to show a placeholder while content is loading.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/skeleton
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="skeleton-demo">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="skeleton" />

<ManualInstall>

1. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import { Skeleton } from "$lib/components/ui/skeleton";
</script>
```

```svelte
<Skeleton class="h-[20px] w-[100px] rounded-full" />
```


---

# slider

---
title: Slider
description: An input where the user selects a value from within a given range.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/slider
bits: https://www.bits-ui.com/docs/components/slider
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="slider-demo">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="slider" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import { Slider } from "$lib/components/ui/slider";
</script>

<Slider value={[33]} max={100} step={1} />
```


---

# sonner

---
title: Sonner
description: An opinionated toast component for Svelte.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/sonner
---

<script>
  import { ComponentPreview, ManualInstall, Steps, Step, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="sonner-demo">

<div />

</ComponentPreview>

## About

The Sonner component is provided by [svelte-sonner](https://svelte-sonner.vercel.app/), which is a Svelte port of [Sonner](https://sonner.emilkowal.ski/), originally created by [Emil Kowalski](https://twitter.com/emilkowalski_) for React.

## Installation

<Steps>

<Step>
	Setup theme support
</Step>

By default, Sonner will use the user's system preferences to determine whether to show the light or dark theme. To get around this, you can either pass in a custom `theme` prop to the component, or simply use [mode-watcher](https://github.com/svecosystem/mode-watcher) which you can hardcode to `dark` or `light` mode should you wish.

You can learn more about setting up Dark Mode support [here](/docs/dark-mode).

If you wish to opt out of Dark Mode support, you can uninstall `mode-watcher` and remove the `theme` prop from the component after installing via CLI, or manually install the component and don't include `mode-watcher`

<Step>
	Run the following command:
</Step>

<PMAddComp name="sonner" />

<Step>
	Add the Toaster component
</Step>

Note: Make sure you are adding the import from the path `"$lib/components/ui/sonner"` not `"svelte-sonner"`.

```svelte title="+layout.svelte" {2,5}
<script lang="ts">
  import { Toaster } from "$lib/components/ui/sonner";
</script>

<Toaster />

<slot />
```

</Steps>

<ManualInstall>

1. Install `svelte-sonner`:

<PMInstall command="svelte-sonner" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import { toast } from "svelte-sonner";
  import { Button } from "$lib/components/ui/button";
</script>

<Button on:click={() => toast("Hello world")}>Show toast</Button>
```


---

# switch

---
title: Switch
description: A control that allows the user to toggle between checked and not checked.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/switch
bits: https://www.bits-ui.com/docs/components/switch
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="switch-demo">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="switch" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import { Switch } from "$lib/components/ui/switch";
</script>

<Switch />
```

## Examples

### Form

<ComponentPreview name="switch-form">

<div />

</ComponentPreview>


---

# table

---
title: Table
description: A responsive table component.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/table
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp } from '$lib/components/docs';
</script>

<ComponentPreview name="table-demo">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="table" />

<ManualInstall>

1. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import * as Table from "$lib/components/ui/table";
</script>
```

```svelte
<Table.Root>
  <Table.Caption>A list of your recent invoices.</Table.Caption>
  <Table.Header>
    <Table.Row>
      <Table.Head class="w-[100px]">Invoice</Table.Head>
      <Table.Head>Status</Table.Head>
      <Table.Head>Method</Table.Head>
      <Table.Head class="text-right">Amount</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell class="font-medium">INV001</Table.Cell>
      <Table.Cell>Paid</Table.Cell>
      <Table.Cell>Credit Card</Table.Cell>
      <Table.Cell class="text-right">$250.00</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Root>
```


---

# tabs

---
title: Tabs
description: A set of layered sections of content—known as tab panels—that are displayed one at a time.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/tabs
bits: https://www.bits-ui.com/docs/components/tabs
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="tabs-demo">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="tabs" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs";
</script>

<Tabs.Root value="account" class="w-[400px]">
  <Tabs.List>
    <Tabs.Trigger value="account">Account</Tabs.Trigger>
    <Tabs.Trigger value="password">Password</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="account">
    Make changes to your account here.
  </Tabs.Content>
  <Tabs.Content value="password">Change your password here.</Tabs.Content>
</Tabs.Root>
```


---

# textarea

---
title: Textarea
description: Displays a form textarea or a component that looks like a textarea.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/textarea
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp } from '$lib/components/docs';
</script>

<ComponentPreview name="textarea-demo">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="textarea" />

<ManualInstall>

1. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import { Textarea } from "$lib/components/ui/textarea";
</script>
```

```svelte
<Textarea />
```

## Examples

### Default

<ComponentPreview name="textarea-demo">

<div />

</ComponentPreview>

### Disabled

<ComponentPreview name="textarea-disabled">

<div />

</ComponentPreview>

### With Label

<ComponentPreview name="textarea-with-label">

<div />

</ComponentPreview>

### With Text

<ComponentPreview name="textarea-with-text">

<div />

</ComponentPreview>

### With Button

<ComponentPreview name="textarea-with-button">

<div />

</ComponentPreview>

### Form

<ComponentPreview name="textarea-form">

<div />

</ComponentPreview>


---

# toggle-group

---
title: Toggle Group
description: A set of two-state buttons that can be toggled on or off.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/toggle-group
bits: https://www.bits-ui.com/docs/components/toggle-group
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="toggle-group-demo">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="toggle-group" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import * as ToggleGroup from "$lib/components/ui/toggle-group";
</script>

<ToggleGroup.Root type="single">
  <ToggleGroup.Item value="a">A</ToggleGroup.Item>
  <ToggleGroup.Item value="b">B</ToggleGroup.Item>
  <ToggleGroup.Item value="c">C</ToggleGroup.Item>
</ToggleGroup.Root>
```

## Examples

### Default

<ComponentPreview name="toggle-group-demo">

<div />

</ComponentPreview>

### Outline

<ComponentPreview name="toggle-group-outline">

<div />

</ComponentPreview>

### Single

<ComponentPreview name="toggle-group-single">

<div />

</ComponentPreview>

### Small

<ComponentPreview name="toggle-group-sm">

<div />

</ComponentPreview>

### Large

<ComponentPreview name="toggle-group-lg">

<div />

</ComponentPreview>

### Disabled

<ComponentPreview name="toggle-group-disabled">

<div />

</ComponentPreview>


---

# toggle

---
title: Toggle
description: A two-state button that can be either on or off.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/toggle
bits: https://www.bits-ui.com/docs/components/toggle
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="toggle-demo">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="toggle" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import { Toggle } from "$lib/components/ui/toggle";
</script>

<Toggle>Toggle</Toggle>
```

## Examples

### Default

<ComponentPreview name="toggle-demo">

<div />

</ComponentPreview>

### Outline

<ComponentPreview name="toggle-outline">

<div />

</ComponentPreview>

### With Text

<ComponentPreview name="toggle-with-text">

<div />

</ComponentPreview>

### Small

<ComponentPreview name="toggle-sm">

<div />

</ComponentPreview>

### Large

<ComponentPreview name="toggle-lg">

<div />

</ComponentPreview>

### Disabled

<ComponentPreview name="toggle-disabled">

<div />

</ComponentPreview>


---

# tooltip

---
title: Tooltip
description: A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
component: true
source: https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/lib/registry/default/ui/tooltip
bits: https://www.bits-ui.com/docs/components/tooltip
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="tooltip-demo">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="tooltip" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
  import * as Tooltip from "$lib/components/ui/tooltip";
</script>

<Tooltip.Root>
  <Tooltip.Trigger>Hover</Tooltip.Trigger>
  <Tooltip.Content>
    <p>Add to library</p>
  </Tooltip.Content>
</Tooltip.Root>
```


---

