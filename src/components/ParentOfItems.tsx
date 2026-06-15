import { useState } from 'react'
import type { TIemes } from './Items';
import ExtentionList from './ExtentionList';
import Items from './Items';

const ParentOfItems = () => {
     const [item, setItem] = useState<TIemes[]>([
    {
      id: "1",
      logo: "./images/p1.svg",
      name: "DevLens",
      description:
        "Quickly inspect page layouts and visualize element boundaries.",
      isActive: true,
    },
    {
      id: "2",
      logo: "./images/p2.svg",
      name: "StyleSpy",
      description: "Instantly analyze and copy CSS from any webpage element.",
      isActive: true,
    },
    {
      id: "3",
      logo: "./images/p3.svg",
      name: "SpeedBoost",
      description:
        "Optimizes browser resource usage to accelerate page loading.",
      isActive: false,
    },
    {
      id: "4",
      logo: "./images/p4.svg",
      name: "JSONWizard",
      description:
        "Formats, validates, and prettifies JSON responses in-browser.",
      isActive: true,
    },
    {
      id: "5",
      logo: "./images/p5.svg",
      name: "TabMaster Pro",
      description: "Organizes browser tabs into groups and sessions.",
      isActive: true,
    },
    {
      id: "6",
      logo: "./images/p6.svg",

      name: "ViewportBuddy",
      description:
        "Simulates various screen resolutions directly within the browser.",
      isActive: false,
    },
    {
      id: "7",
      logo: "./images/p7.svg",
      name: "Markup Notes",
      description:
        "Enables annotation and notes directly onto webpages for collaborative debugging.",
      isActive: true,
    },
    {
      id: "8",
      logo: "./images/p8.svg",
      name: "GridGuides",
      description:
        "Overlay customizable grids and alignment guides on any webpage.",
      isActive: false,
    },
    {
      id: "9",
      logo: "./images/p9.svg",
      name: "Palette Picker",
      description: "Instantly extracts color palettes from any webpage.",
      isActive: true,
    },
    {
      id: "10",
      logo: "./images/p10.svg",
      name: "LinkChecker",
      description: "Scans and highlights broken links on any page.",
      isActive: true,
    },
    {
      id: "11",
      logo: "./images/p11.svg",
      name: "DOM Snapshot",
      description: "Capture and export DOM structures quickly.",
      isActive: false,
    },
    {
      id: "12",
      logo: "./images/p12.svg",
      name: "ConsolePlus",
      description:
        "Enhanced developer console with advanced filtering and logging.",
      isActive: true,
    },
  ]);
  const [filter, setFilter] = useState<"all" | "active" | "inActive">("all");

  return (
    <>
    <ExtentionList filter={filter} setFilter={setFilter} item={item} />
      <Items filter={filter} item={item} setItem={setItem} />
    </>
  )
}

export default ParentOfItems