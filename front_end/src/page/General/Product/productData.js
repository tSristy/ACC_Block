import buetLogo from '../../../img/buet_logo_0.png';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ImgToIcon from '../../../component/ImgIcon/ImgToIcon';
import ScaleIcon from '@mui/icons-material/Scale';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import HearingIcon from '@mui/icons-material/Hearing';
import ParkIcon from '@mui/icons-material/Park';
import HandymanIcon from '@mui/icons-material/Handyman';
import HardwareIcon from '@mui/icons-material/Hardware';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import BuildIcon from '@mui/icons-material/Build';
import { Avatar } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';


export const blocksQuality = [
    {
        icon: <Avatar sx={{ width: 100, height: 100, bgcolor: '#187b3d' }}>
            <ImgToIcon img={buetLogo} fontSize="40px" />
        </Avatar>, title: "Tested & Certified by BUET"
    },
    {
        icon: <Avatar sx={{ width: 100, height: 100, bgcolor: '#187b3d' }}>
            <Diversity3Icon sx={{ fontSize: '40px' }} />
        </Avatar>, title: "Great Wall Ceramic’s trusted legacy"
    },
    {
        icon: <Avatar sx={{ width: 100, height: 100, bgcolor: '#187b3d' }}>
            <LocalShippingIcon sx={{ fontSize: '40px' }} />
        </Avatar>, title: "Countrywide distribution & dealer network"
    },
    {
        icon: <Avatar sx={{ width: 100, height: 100, bgcolor: '#187b3d' }}>
            <AccessibilityNewIcon sx={{ fontSize: '40px' }} />
        </Avatar>, title: "Technical training and site support"
    },

]

export const panelQuality = [
    {
        icon: <Avatar sx={{ width: 100, height: 100, bgcolor: '#187b3d' }}>
            <ImgToIcon img={buetLogo} fontSize="40px" />
        </Avatar>, 
        title: "Manufactured with advanced technology & BUET-tested quality"
    },
    {
        icon: <Avatar sx={{ width: 100, height: 100, bgcolor: '#187b3d' }}>
            <Diversity3Icon sx={{ fontSize: '40px' }} />
        </Avatar>, title: "Backed by Great Wall Ceramic's trusted brand legacy"
    },
    {
        icon: <Avatar sx={{ width: 100, height: 100, bgcolor: '#187b3d' }}>
            <LocalShippingIcon sx={{ fontSize: '40px' }} />
        </Avatar>, title: "Strong distribution network & technical support across Bangladesh"
    },
    {
        icon: <Avatar sx={{ width: 100, height: 100, bgcolor: '#187b3d' }}>
            <AccessibilityNewIcon sx={{ fontSize: '40px' }} />
        </Avatar>, title: "Eco-friendly building solution for sustainable development"
    },

]

export const blockSkillList = [
    { icon: <ScaleIcon />, title: "Lightweight & Strong", description: "1/3rd the weight of clay bricks, high compressive strength" },
    { icon: <DeviceThermostatIcon />, title: "Thermal Insulation", description: "Save up to 25% on cooling energy" },
    { icon: <LocalFireDepartmentIcon />, title: "Fire Resistant", description: "Withstands fire for 4-6 hours" },
    { icon: <HearingIcon />, title: "Sound Insulation", description: "Reduces noise by over 40 dB" },
    { icon: <ParkIcon />, title: "Eco-Friendly", description: "Sustainable production with minimal waste" },
    { icon: <HandymanIcon />, title: "Faster Construction", description: "4X quicker build with less mortar" },
]

export const panelSkillList = [
    { icon: <HandymanIcon />, title: "4X Faster Installation", textDescription: "Saves time, labor, and cost" },
    { icon: <BuildIcon />, title: "Steel Reinforced", textDescription: "Corrosion-protected steel inside ensures durability" },
    { icon: <DeviceThermostatIcon />, title: "Thermal & Acoustic Insulation", textDescription: "Keeps interiors cooler and quieter" },
    { icon: <HardwareIcon />, title: "Reusable & Eco-Friendly", textDescription: "Sustainable design with minimal waste" },
    { icon: <AddRoadIcon />, title: "Slim Walls, More Space", textDescription: "Increases carpet area for better utilization" },
    { icon: <LocalFireDepartmentIcon />, title: "Fire Resistance & Safe", textDescription: "Provides 4-6 hours fire resistance for added security" },
    ]

export const blockSpecification = [
    { parameter: "Density (Dry Density)", value: "550-650", unit: "Kg/m³", claybrickValue: "1800-2000" },
    { parameter: "Compressive Strength", value: "4.2", unit: "N/mm² (MPa)", claybrickValue: ">3.5" },
    { parameter: "Drying Shrinkage", value: "≤ 0.04", unit: "%", claybrickValue: "-" },
    { parameter: "Thermal Conductivity", value: "0.16", unit: "W/m·K", claybrickValue: "0.51-0.81" },
    { parameter: "Fire Resistance", value: "4-6", unit: "Hours", claybrickValue: "1.5" },
    { parameter: "Sound Reduction Index", value: "42-45", unit: "dB", claybrickValue: "50-60" }
];

export const panelSpecification = [
  { parameter: "Thickness", value: "75, 100, 125, 150, 200", unit: "mm", claybrickValue: "-" },
  { parameter: "Width", value: "600", unit: "mm", claybrickValue: "-" },
  { parameter: "Length", value: "3000 (interval of 100)", unit: "mm", claybrickValue: "-" },
  { parameter: "Steel Reinforcement", value: "Yes (2 bars, corrosion-protected)", unit: "-", claybrickValue: "No" },
  { parameter: "Tongue & Groove", value: "Yes", unit: "-", claybrickValue: "-" },
  { parameter: "Density", value: "550-650", unit: "Kg/m³", claybrickValue: "1800-2000" },
  { parameter: "Fire Resistance", value: "4-6", unit: "Hours", claybrickValue: "1.5" },
  { parameter: "Sound Insulation", value: "40-45", unit: "dB", claybrickValue: "50-60" }
];


export const blockComparisonList = [
  {
    parameter: "Density",
    aacBlocks: "550-650",
    aacPanels: "550-650",
    redClayBricks: "1800-2000",
    concreteBlocks: "1200-2000"
  },
  {
    parameter: "Compressive Strength",
    aacBlocks: ">4.2",
    aacPanels: ">4.2",
    redClayBricks: ">3.5",
    concreteBlocks: ">3.5"
  },
  {
    parameter: "Thermal Conductivity",
    aacBlocks: "0.16",
    aacPanels: "0.16",
    redClayBricks: "0.51-0.81",
    concreteBlocks: "0.51"
  },
  {
    parameter: "Sound Insulation",
    aacBlocks: "40-45",
    aacPanels: "40-45",
    redClayBricks: "50-60",
    concreteBlocks: "40-45"
  },
  {
    parameter: "Fire Resistance",
    aacBlocks: "4-6",
    aacPanels: "4-6",
    redClayBricks: "1.5",
    concreteBlocks: "2"
  },
  {
    parameter: "Mortar Consumption",
    aacBlocks: "Less (flat, even surface)",
    aacPanels: "Less (fewer joints)",
    redClayBricks: "High (irregular size)",
    concreteBlocks: "Moderate"
  },
  {
    parameter: "Structural CostImpact",
    aacBlocks: "Saves >20%",
    aacPanels: "Saves >20%",
    redClayBricks: "Increases cost",
    concreteBlocks: "Increases cost"
  },
  {
    parameter: "Environmental Impact",
    aacBlocks: "Eco-friendly",
    aacPanels: "Eco-friendly",
    redClayBricks: "High pollution, uses fertile soil",
    concreteBlocks: "Moderate impact"
  },
  {
    parameter: "Dimensional Accuracy",
    aacBlocks: "Accurate",
    aacPanels: "Accurate",
    redClayBricks: "Not accurate",
    concreteBlocks: "Moderate"
  },
  {
    parameter: "Installation Speed",
    aacBlocks: "4X faster",
    aacPanels: "8X faster",
    redClayBricks: "Slow",
    concreteBlocks: "Moderate"
  }
];


export const panelComparisonList = [
  {
    parameter: "Density",
    aacPanels: "550-650",
    aacBlocks: "550-650",
    redClayBricks: "1800-2000",
    concreteBlocks: "1200-2000"
  },
  {
    parameter: "Steel Reinforced",
    aacPanels: "Yes",
    aacBlocks: "No",
    redClayBricks: "No",
    concreteBlocks: "No"
  },
  {
    parameter: "Thermal Conductivity",
    aacPanels: "0.16",
    aacBlocks: "0.16",
    redClayBricks: "0.51-0.81",
    concreteBlocks: "0.51"
  },
  {
    parameter: "Sound Insulation",
    aacPanels: "40-45",
    aacBlocks: "40-45",
    redClayBricks: "50-60",
    concreteBlocks: "40-45"
  },
  {
    parameter: "Fire Resistance",
    aacPanels: "4-6",
    aacBlocks: "4-6",
    redClayBricks: "1.5",
    concreteBlocks: "2"
  },
  {
    parameter: "Installation Speed",
    aacPanels: "8X faster",
    aacBlocks: "4X faster",
    redClayBricks: "Slow",
    concreteBlocks: "Moderate"
  },
  {
    parameter: "Carpet Area",
    aacPanels: "Increased (slimmer wall)",
    aacBlocks: "Standard",
    redClayBricks: "Reduced (thick walls)",
    concreteBlocks: "Reduced (thick walls)"
  },
  {
    parameter: "Eco Friendliness",
    aacPanels: "Eco-friendly",
    aacBlocks: "Eco-friendly",
    redClayBricks: "High pollution",
    concreteBlocks: "Moderate impact"
  }
];


export const blockAdvantageList = [
    { icon: <AddTaskIcon />, title: "Less mortar & plaster required" },
    { icon: <AddTaskIcon />, title: "Uniform size & smooth finish" },
    { icon: <AddTaskIcon />, title: "Earthquake-resistant lightweight structure" },
    { icon: <AddTaskIcon />, title: "Pest & termite proof" },
    { icon: <AddTaskIcon />, title: "Cost saving in structural design" },
    { icon: <AddTaskIcon />, title: "Long-lasting durability" },
]
