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
    { parameter: "Density (Dry Density)", value: "550-650 Kg/m³" },
    { parameter: "Compressive Strength", value: "4.2 N/mm² (MPa)" },
    { parameter: "Drying Shrinkage", value: "≤ 0.04 %" },
    { parameter: "Thermal Conductivity", value: "0.16 W/m·K" },
    { parameter: "Fire Resistance", value: "4-6 Hours" },
    { parameter: "Sound Reduction Index", value: "42-45 dB" }
];

export const panelSpecification = [
  {  parameter: "Thickness (mm)", value: "75, 100, 125, 150, 200" },
  { parameter: "Width (mm)", value: "600" },
  { parameter: "Length (mm)", value: "3000 (interval of 100 mm)" },
  { parameter: "Steel Reinforcement", value: "Yes (2 bars, corrosion-protected)" },
  { parameter: "Tongue & Groove", value: "Yes" },
  { parameter: "Density", value: "550-650 Kg/m³" },
  { parameter: "Fire Resistance", value: "4-6 Hours" },
  { parameter: "Sound Insulation", value: "40-45 dB" }
]

export const blockComparisonList = [
    {
        "Name": "Great Wall AAC Blocks",
        "Density (Kg/m³)": "550-650",
        "Compressive Strength": ">4.2 N/mm²",
        "Thermal Conductivity": "0.16 W/m·K",
        "Sound Insulation (dB)": "40-45",
        "Fire Resistance": "4-6 Hours",
        "Mortar Consumption": "Less (flat, even surface)",
        "Structural Cost Impact": "Saves >20%",
        "Environmental Impact": "Eco-friendly",
        "Dimensional Accuracy": "Accurate",
        "Installation Speed": "4X faster"
    },
    {
        "Name": "Great Wall AAC Panels",
        "Density (Kg/m³)": "550-650",
        "Compressive Strength": ">4.2 N/mm²",
        "Thermal Conductivity": "0.16 W/m·K",
        "Sound Insulation (dB)": "40-45",
        "Fire Resistance": "4-6 Hours",
        "Mortar Consumption": "Less (fewer joints)",
        "Structural Cost Impact": "Saves >20%",
        "Environmental Impact": "Eco-friendly",
        "Dimensional Accuracy": "Accurate",
        "Installation Speed": "8X faster"
    },
    {
        "Name": "Red Clay Bricks",
        "Density (Kg/m³)": "1800-2000",
        "Compressive Strength": ">3.5 N/mm²",
        "Thermal Conductivity": "0.51-0.81 W/m·K",
        "Sound Insulation (dB)": "50-60",
        "Fire Resistance": "1.5 Hours",
        "Mortar Consumption": "High (irregular size)",
        "Structural Cost Impact": "Increases cost",
        "Environmental Impact": "High pollution, uses fertile soil",
        "Dimensional Accuracy": "Not accurate",
        "Installation Speed": "Slow"
    },
    {
        "Name": "Concrete Blocks",
        "Density (Kg/m³)": "1200-2000",
        "Compressive Strength": ">3.5 N/mm²",
        "Thermal Conductivity": "0.51 W/m·K",
        "Sound Insulation (dB)": "40-45",
        "Fire Resistance": "2 Hours",
        "Mortar Consumption": "Moderate",
        "Structural Cost Impact": "Increases cost",
        "Environmental Impact": "Moderate impact",
        "Dimensional Accuracy": "Moderate",
        "Installation Speed": "Moderate"
    }
]

export const panelComparisonList = [
  {
    "Name": "Great Wall AAC Panels",
    "Density (Kg/m³)": "550-650",
    "Steel Reinforced": "Yes",
    "Thermal Conductivity": "0.16 W/m·K",
    "Sound Insulation (dB)": "40-45",
    "Fire Resistance": "4-6 Hours",
    "Installation Speed": "8X faster",
    "Carpet Area": "Increased (slimmer wall)",
    "Eco-Friendliness": "Eco-friendly"
  },
  {
    "Name": "AAC Blocks",
    "Density (Kg/m³)": "550-650",
    "Steel Reinforced": "No",
    "Thermal Conductivity": "0.16 W/m·K",
    "Sound Insulation (dB)": "40-45",
    "Fire Resistance": "4-6 Hours",
    "Installation Speed": "4X faster",
    "Carpet Area": "Standard",
    "Eco-Friendliness": "Eco-friendly"
  },
  {
    "Name": "Red Clay Bricks",
    "Density (Kg/m³)": "1800-2000",
    "Steel Reinforced": "No",
    "Thermal Conductivity": "0.51-0.81 W/m·K",
    "Sound Insulation (dB)": "50-60",
    "Fire Resistance": "1.5 Hours",
    "Installation Speed": "Slow",
    "Carpet Area": "Reduced (thick walls)",
    "Eco-Friendliness": "High pollution"
  },
  {
    "Name": "Concrete Blocks",
    "Density (Kg/m³)": "1200-2000",
    "Steel Reinforced": "No",
    "Thermal Conductivity": "0.51 W/m·K",
    "Sound Insulation (dB)": "40-45",
    "Fire Resistance": "2 Hours",
    "Installation Speed": "Moderate",
    "Carpet Area": "Reduced (thick walls)",
    "Eco-Friendliness": "Moderate impact"
  }
]



export const blockAdvantageList = [
    { icon: <AddTaskIcon />, title: "Less mortar & plaster required" },
    { icon: <AddTaskIcon />, title: "Uniform size & smooth finish" },
    { icon: <AddTaskIcon />, title: "Earthquake-resistant lightweight structure" },
    { icon: <AddTaskIcon />, title: "Pest & termite proof" },
    { icon: <AddTaskIcon />, title: "Cost saving in structural design" },
    { icon: <AddTaskIcon />, title: "Long-lasting durability" },
]