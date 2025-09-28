
import { CourseData } from '../types';

export const courseData: CourseData = [
  {
    id: "level1",
    title: "Fundamentals",
    modules: [
      {
        id: "m1",
        title: "Introduction to Well Intervention & Completion",
        lessons: [
          {
            id: "l1_1_1",
            title: "Overview of Well Lifecycle & Production",
            content: [
                {type: 'text', content: '<h3>1. The Five Stages of a Well</h3><p>The lifecycle of an oil and gas well is a long and complex process that can be broken down into five distinct stages. Understanding these stages is fundamental to appreciating the roles of well completion and intervention. Each stage has its own objectives, challenges, and technologies.</p><ul><li><strong>1. Exploration:</strong> The initial phase involving geological and geophysical surveys to identify potential hydrocarbon-bearing formations (reservoirs). This stage culminates in the drilling of one or more "wildcat" or exploration wells to confirm the presence of oil or gas.</li><li><strong>2. Appraisal:</strong> Once hydrocarbons are discovered, appraisal wells are drilled to determine the size and characteristics of the reservoir. This data helps assess the commercial viability of the field.</li><li><strong>3. Development:</strong> If the field is deemed commercial, a development plan is executed. This involves drilling multiple production wells and installing the necessary surface facilities (e.g., platforms, pipelines, processing plants) to extract the hydrocarbons.</li><li><strong>4. Production:</strong> This is the longest phase of the well\'s life, where hydrocarbons are extracted, processed, and transported. Well completion occurs at the beginning of this phase, and well intervention is performed as needed throughout to maintain and optimize production.</li><li><strong>5. Abandonment:</strong> Once the reservoir is depleted or production is no longer economical, the well is permanently sealed to prevent any future leaks to the surface or between subsurface formations. This is a highly regulated process to ensure long-term environmental safety.</li></ul>'},
                {type: 'text', content: '<h3>2. Reservoir Fundamentals</h3><p>A reservoir is a subsurface pool of hydrocarbons contained in porous or fractured rock formations. For a commercial reservoir to exist, several key elements must be present: a source rock, migration pathway, reservoir rock (with porosity and permeability), and a trap with a seal rock to contain the hydrocarbons. The natural pressure within the reservoir is what initially drives the oil and gas to the surface when the well penetrates the formation.</p>'},
                {type: 'video', topic: 'The geological elements required for a commercial hydrocarbon reservoir.'}
            ],
            glossary: [
                {term: 'Reservoir', definition: 'A subsurface formation of porous rock containing hydrocarbons.'},
                {term: 'Porosity', definition: 'The volume of empty space within a rock.'},
                {term: 'Permeability', definition: 'A measure of the ability of a rock to allow fluids to flow through it.'},
                {term: 'Abandonment', definition: 'The process of permanently sealing a well at the end of its life.'}
            ],
            safety: { topic: "General Wellsite Awareness", points: ["Always be aware of your surroundings.", "Follow all posted safety signs and instructions.", "Report any unsafe conditions immediately."] },
            quiz: [
                {question: 'What is the primary objective of the "Appraisal" stage?', answer: 'To determine the size, characteristics, and commercial viability of a discovered reservoir.'},
                {question: 'In which stage of the well lifecycle do completion and intervention activities primarily occur?', answer: 'The Production stage.'}
            ],
          },
          {
            id: "l1_1_2",
            title: "Purpose of Well Completion",
            content: [
                {type: 'text', content: '<h3>1. Defining Well Completion</h3><p>Well completion is the process of preparing a drilled well for production or injection. It involves installing the necessary downhole equipment and surface infrastructure to safely and efficiently produce hydrocarbons. A good completion design is crucial for maximizing the well\'s productivity, longevity, and ultimate recovery of reserves. The choices made during completion have a lasting impact on all future intervention operations.</p><h3>2. Core Objectives of Well Completion</h3><ul><li><strong>Connect Reservoir to Surface:</strong> To provide a secure and controlled conduit for hydrocarbons to flow from the reservoir to the wellhead.</li><li><strong>Ensure Well Integrity:</strong> To install barriers (casing, cement, tubing, packers) that prevent uncontrolled fluid flow and protect groundwater.</li><li><strong>Enable Zonal Isolation:</strong> To isolate the producing zone from other formations (like water-bearing zones) and to allow for selective production from different layers within the reservoir.</li><li><strong>Optimize Production:</strong> To design a system that minimizes flow restrictions and allows for future optimization techniques like artificial lift.</li><li><strong>Provide for Future Intervention:</strong> To design the completion in a way that allows for future maintenance and diagnostic operations (e.g., via wireline or coiled tubing).</li></ul>'},
                {type: 'text', content: '<p>The diagram above illustrates a very basic completion string within the wellbore. The <strong>casing</strong> (the outermost steel pipe) is cemented in place to provide structural integrity. The <strong>production tubing</strong> is the inner pipe through which hydrocarbons flow. The <strong>packer</strong> provides a seal between the tubing and the casing, isolating the producing formation and forcing fluids up the tubing. The <strong>perforations</strong> are holes shot through the casing and cement to allow reservoir fluids to enter the wellbore.</p>'},
                {type: 'video', topic: 'Overview of the main components in a basic well completion.'}
            ],
            glossary: [
                {term: 'Well Completion', definition: 'The process of making a well ready for production.'},
                {term: 'Well Integrity', definition: 'The application of technical, operational, and organizational solutions to reduce the risk of uncontrolled release of formation fluids throughout the life of a well.'},
                {term: 'Zonal Isolation', definition: 'The practice of hydraulically sealing off specific zones within a wellbore to prevent fluid communication between them.'},
                {term: 'Packer', definition: 'A downhole device used to provide a seal in the annular space between two concentric pipes.'}
            ],
            safety: { topic: "Pressure Testing", points: ["Always confirm pressure test parameters before starting.", "Ensure all personnel are clear of high-pressure lines.", "Never exceed the maximum rated pressure of any component."] },
            quiz: [
                {question: 'What are two primary objectives of well completion?', answer: 'To connect the reservoir to the surface, ensure well integrity, enable zonal isolation, and optimize production.'},
                {question: 'What is the function of a packer in a well completion?', answer: 'To provide a seal between the production tubing and the casing, thereby enabling zonal isolation.'}
            ]
        },
        {
            id: "l1_1_3",
            title: "Purpose of Well Intervention",
            content: [
                {type: 'text', content: '<h3>1. Defining Well Intervention</h3><p>Well intervention refers to any operation carried out on an oil or gas well during its productive life that alters the state of the well or its geometry, provides well diagnostics, or manages the production of the well. In simple terms, it\'s the maintenance, repair, and enhancement work performed on a well after it has been completed. These operations are essential for maintaining production, addressing problems, and maximizing the economic recovery from a reservoir.</p><h3>2. Key Objectives of Well Intervention</h3><ul><li><strong>Well Surveillance & Diagnostics:</strong> Gathering data to understand the performance of the well and reservoir. This includes measuring pressure, temperature, and flow rates (Production Logging), and inspecting the condition of the wellbore and completion components (Integrity Logging).</li><li><strong>Maintenance & Repair:</strong> Fixing problems that arise during the well\'s life. This can include repairing or replacing failed downhole equipment (like safety valves or pumps), fixing casing leaks, or removing obstructions.</li><li><strong>Production Enhancement (Stimulation):</strong> Performing treatments to improve the well\'s productivity. This includes operations like acidizing to dissolve formation damage or hydraulic fracturing to create new flow paths.</li><li><strong>Flow Management:</strong> Altering the well\'s flow profile, such as shutting off zones that are producing unwanted water or gas, or opening new zones to production.</li></ul>'},
                {type: 'video', topic: 'The difference between well completion and well intervention with examples.'}
            ],
            glossary: [
                {term: 'Well Intervention', definition: 'Any operation performed on a well during its productive life to diagnose, maintain, or enhance production.'},
                {term: 'Well Surveillance', definition: 'The process of monitoring well and reservoir performance through data acquisition.'},
                {term: 'Stimulation', definition: 'A well intervention treatment performed to increase the production rate by improving the flow of hydrocarbons from the reservoir into the wellbore.'},
                {term: 'Workover', definition: 'A more significant well intervention that involves pulling the production tubing from the well.'}
            ],
            safety: { topic: "Management of Change (MOC)", points: ["Any deviation from the planned intervention program must go through a formal MOC process.", "Ensure all risks associated with the change are assessed.", "All relevant personnel must be informed of the approved change."] },
            quiz: [
                {question: 'What is the primary difference between well completion and well intervention?', answer: 'Well completion is the initial process of preparing a well for production, while well intervention refers to any operation performed on the well after it is already in production.'},
                {question: 'Give one example of a production enhancement intervention.', answer: 'Acidizing or hydraulic fracturing.'}
            ]
        }
        ]
      },
      {
        id: "m2",
        title: "Basic Well Control Principles",
        lessons: [
            {
                id: "l1_2_1",
                title: "Introduction to Well Control",
                content: [
                    {type: 'text', content: '<h3>1. The Concept of Pressure Balance</h3><p>Well control is the technique used to maintain hydrostatic pressure in the wellbore to prevent an influx of formation fluids. The fundamental principle is to keep the pressure exerted by the column of fluid inside the well (hydrostatic pressure) greater than the pressure of the fluids in the formation (formation pressure). This state is known as being "overbalanced".</p><p><strong>Hydrostatic Pressure (HP) = Fluid Density (MW) x 0.052 x True Vertical Depth (TVD)</strong></p><p>When Formation Pressure (FP) > Hydrostatic Pressure (HP), the well is "underbalanced," and formation fluids (gas, oil, or water) will begin to flow into the wellbore. This uncontrolled flow is called a "kick". If a kick is not controlled, it can escalate into a blowout.</p><h3>2. Primary and Secondary Well Control</h3><ul><li><strong>Primary Well Control:</strong> This is the hydrostatic pressure exerted by the column of drilling fluid, completion fluid, or kill fluid. It is the first and most important barrier to prevent kicks. As long as HP > FP, the well is under control.</li><li><strong>Secondary Well Control:</strong> This refers to the mechanical equipment at the surface designed to contain pressure if primary control is lost. The main component is the Blowout Preventer (BOP) stack. The BOP stack is a series of high-pressure valves that can seal the wellbore, even around pipe, to stop a kick from reaching the surface.</li></ul>'},
                    {type: 'video', topic: 'Explaining hydrostatic pressure and the concept of overbalance vs. underbalance.'}
                ],
                glossary: [
                    {term: 'Well Control', definition: 'The management of pressure within a wellbore to prevent the uncontrolled release of formation fluids.'},
                    {term: 'Hydrostatic Pressure', definition: 'The pressure exerted by a column of fluid at a given depth.'},
                    {term: 'Formation Pressure', definition: 'The pressure of the fluids within the pores of a reservoir rock.'},
                    {term: 'Kick', definition: 'An uncontrolled influx of formation fluids into the wellbore.'},
                    {term: 'Blowout', definition: 'An uncontrolled release of hydrocarbons to the surface or another formation.'},
                    {term: 'Blowout Preventer (BOP)', definition: 'A large, specialized valve or stack of valves used to seal, control, and monitor oil and gas wells.'}
                ],
                safety: { topic: "Well Control Readiness", points: ["Always know your role and responsibilities during a well control event.", "Ensure you know the location of emergency shutdown buttons.", "Participate actively in all well control drills."] },
                quiz: [
                    {question: 'What is the most fundamental principle of well control?', answer: 'To maintain the hydrostatic pressure in the wellbore at a level greater than the formation pressure.'},
                    {question: 'What is the difference between primary and secondary well control?', answer: 'Primary control is the hydrostatic pressure from the wellbore fluid. Secondary control is the mechanical equipment (BOPs) used to contain pressure if primary control fails.'}
                ]
            },
            {
                id: "l1_2_2",
                title: "Causes and Warning Signs of Kicks",
                content: [
                    {type: 'text', content: '<h3>1. Common Causes of Kicks</h3><p>A kick occurs when the hydrostatic pressure drops below the formation pressure. This can happen for several reasons:</p><ul><li><strong>Insufficient Fluid Density:</strong> The weight of the drilling or completion fluid is too low to counteract the formation pressure.</li><li><strong>Lost Circulation:</strong> Fluid is lost to a weak or fractured formation, causing the fluid level in the wellbore to drop and reducing hydrostatic pressure.</li><li><strong>Swabbing:</strong> Pulling the pipe out of the hole too quickly can create a suction effect, reducing the pressure below the bit and allowing formation fluids to enter.</li><li><strong>Improper Hole Fill-Up:</strong> When pulling pipe, failing to fill the well with the correct volume of fluid to account for the displaced volume of the pipe.</li><li><strong>Gas-Cut Fluid:</strong> Gas from the formation enters the wellbore fluid, lowering its overall density and reducing hydrostatic pressure.</li></ul><h3>2. Key Warning Signs of a Kick</h3><p>Early detection is critical. The sooner a kick is recognized, the smaller the influx and the easier it is to control. Key warning signs include:</p><ul><li><strong>Increase in Flow Rate:</strong> The rate of fluid returning from the well is greater than the rate being pumped in. This is the most positive kick indicator.</li><li><strong>Pit Gain:</strong> An increase in the volume of fluid in the surface pits or tanks.</li><li><strong>Well Flowing with Pumps Off:</strong> If the well continues to flow after circulation has stopped, it confirms an influx.</li><li><strong>Change in Pump Pressure or Pump Speed:</strong> A drop in pump pressure accompanied by an increase in pump speed can indicate a kick.</li></ul>'},
                    {type: 'video', topic: 'Visual demonstration of swabbing effects and pit gain during a kick.'}
                ],
                glossary: [
                    {term: 'Lost Circulation', definition: 'The partial or complete loss of drilling or completion fluid into a subsurface formation.'},
                    {term: 'Swabbing', definition: 'The suction effect caused by pulling pipe too quickly from the well, which can lead to a reduction in bottom-hole pressure.'},
                    {term: 'Pit Gain', definition: 'An increase in the total volume of fluid in the surface tanks, a primary indicator of a kick.'},
                    {term: 'Gas-Cut Mud/Fluid', definition: 'Fluid that has formation gas entrained within it, reducing its density.'}
                ],
                safety: { topic: "Trip Monitoring", points: ["Always use a trip tank to accurately monitor hole fill-up volumes when pulling pipe.", "Pay close attention to the flow show indicator for any signs of flow.", "Communicate any discrepancies in trip tank volume immediately."] },
                quiz: [
                    {question: 'What is the most positive and reliable indicator that a kick is occurring?', answer: 'An increase in the fluid flow rate from the well (flow show increase) or the well flowing with pumps off.'},
                    {question: 'Explain how "swabbing" can cause a kick.', answer: 'Pulling the pipe too fast creates a suction effect that lowers the bottom-hole pressure, potentially allowing it to drop below formation pressure and cause an influx.'}
                ]
            },
            {
                id: "l1_2_3",
                title: "Basic Well Control Equipment",
                content: [
                    {type: 'text', content: '<h3>1. The Blowout Preventer (BOP) Stack</h3><p>The BOP stack is the primary piece of secondary well control equipment. It is a series of high-pressure valves installed at the wellhead that can be closed to seal the wellbore in an emergency. A typical surface BOP stack includes:</p><ul><li><strong>Annular Preventer:</strong> A doughnut-shaped rubber element that can close and seal on any size or shape of pipe, or even on an open hole.</li><li><strong>Pipe Rams:</strong> Two opposing steel blocks with semi-circular cutouts that match the diameter of the pipe in the hole. When closed, they seal the annulus around the pipe.</li><li><strong>Blind Rams:</strong> Two opposing flat-faced steel blocks that can seal an open wellbore (no pipe in the hole).</li><li><strong>Shear Rams:</strong> Blades designed to cut through the drill pipe and then seal the wellbore completely. This is a last resort.</li></ul><h3>2. Supporting Well Control Equipment</h3><ul><li><strong>Accumulator (Koomey) Unit:</strong> A hydraulic power unit that stores high-pressure fluid to operate the BOPs quickly and reliably, even if rig power is lost.</li><li><strong>Choke Manifold:</strong> A system of valves and chokes used to control the flow and pressure from the wellbore when circulating out a kick.</li><li><strong>Kill Line and Choke Line:</strong> High-pressure lines connected to the BOP stack. The kill line is used to pump heavy fluid into the well, and the choke line allows fluid from the annulus to be directed to the choke manifold.</li><li><strong>Mud-Gas Separator (Poorboy Degasser):</strong> A vessel used to safely separate and vent gas from the wellbore fluid during a kick circulation.</li></ul>'},
                    {type: 'video', topic: 'Animation showing the operation of different BOP ram types (annular, pipe, blind, shear).'}
                ],
                glossary: [
                    {term: 'Annular Preventer', definition: 'A BOP element that can close on any size or shape of pipe.'},
                    {term: 'Pipe Ram', definition: 'A BOP element that seals around a specific size of pipe.'},
                    {term: 'Shear Ram', definition: 'A BOP element that can cut the drill pipe and seal the well.'},
                    {term: 'Accumulator Unit', definition: 'The hydraulic power source for the BOP stack.'},
                    {term: 'Choke Manifold', definition: 'A set of valves and chokes used to control well pressure during a kick.'}
                ],
                safety: { topic: "BOP Drills", points: ["Regular BOP drills are mandatory to ensure equipment readiness and crew competency.", "Verify BOP function times are within acceptable limits.", "Always confirm the correct BOP element is being activated."] },
                quiz: [
                    {question: 'What is the function of an Annular Preventer?', answer: 'To seal the wellbore around any size or shape of pipe, or even on an open hole.'},
                    {question: 'What is the last-resort function in a BOP stack for an emergency?', answer: 'The Shear Rams, which cut the pipe to seal the well completely.'}
                ]
            }
        ]
      },
      {
        id: "m3",
        title: "Well Intervention Equipment Fundamentals",
        lessons: [
            {
                id: "l1_3_1",
                title: "Wireline Operations (Slickline & Braided Line)",
                content: [
                    {type: 'text', content: '<h3>1. Introduction to Wireline</h3><p>Wireline intervention involves running tools and equipment into a well on a thin wire or cable. It is one of the most common and cost-effective methods for well intervention. There are two main categories of wireline:</p><ul><li><strong>Slickline:</strong> A single, solid strand of polished steel wire (typically 0.108" or 0.125" in diameter). It is used for mechanical operations where no electrical power is needed downhole.</li><li><strong>Braided Line (or E-line):</strong> A cable made of multiple strands of steel wire, often with an inner core of electrical conductors. This allows for running tools that require power and transmit data to the surface.</li></ul><h3>2. Slickline Operations</h3><p>Slickline is primarily used for mechanical work. A "tool string" is run into the well, which typically consists of a rope socket (connecting to the wire), stem (weight), jars (to provide impact), and a tool specific to the job.</p><ul><li><strong>Common Jobs:</strong> Setting or pulling plugs and chokes, opening/closing sliding sleeves, running gauges for pressure and temperature surveys, fishing for lost equipment, and wax cutting.</li><li><strong>Advantages:</strong> Cost-effective, fast, smaller equipment footprint.</li><li><strong>Limitations:</strong> No real-time data transmission, limited force capability.</li></ul><h3>3. Braided Line (E-line) Operations</h3><p>E-line is used for operations that require electrical power and communication with the surface.</p><ul><li><strong>Common Jobs:</strong> Perforating (shooting holes in the casing), production logging (PLT) to diagnose flow, cement bond logging (CBL), and running advanced diagnostic tools.</li><li><strong>Advantages:</strong> Real-time data acquisition, ability to run complex electronic tools.</li><li><strong>Limitations:</strong> More expensive than slickline, larger equipment footprint, more complex operations.</li></ul>'},
                    {type: 'video', topic: 'Comparison of a slickline unit and a braided line (e-line) unit and their surface equipment.'}
                ],
                glossary: [
                    {term: 'Slickline', definition: 'A single, solid strand of wire used for mechanical well intervention.'},
                    {term: 'Braided Line / E-line', definition: 'A multi-strand cable with electrical conductors used for running powered tools and transmitting data.'},
                    {term: 'Tool String', definition: 'An assembly of tools connected to the wireline for a specific downhole operation.'},
                    {term: 'Jars', definition: 'A mechanical tool in the tool string that delivers an impact force (up or down) to manipulate downhole equipment.'},
                    {term: 'Perforating', definition: 'The process of creating holes in the casing and cement to allow hydrocarbons to flow into the wellbore.'}
                ],
                safety: { topic: "Pressure Control Equipment (PCE)", points: ["Always perform a full function test and pressure test of the wireline lubricator and BOP before starting the job.", "Ensure the correct size of wireline BOP rams are installed.", "Monitor wellhead pressure continuously during the operation."] },
                quiz: [
                    {question: 'What is the fundamental difference between slickline and braided line (e-line)?', answer: 'Slickline is a solid mechanical wire, while braided line (e-line) is a cable containing electrical conductors for power and data transmission.'},
                    {question: 'You need to measure the flow contribution from different zones in your well. Which type of wireline would you use and why?', answer: 'Braided line (e-line), because production logging tools require electrical power and need to transmit data back to the surface in real-time.'}
                ]
            },
            {
                id: "l1_3_2",
                title: "Coiled Tubing Operations",
                content: [
                    {type: 'text', content: '<h3>1. What is Coiled Tubing?</h3><p>Coiled tubing (CT) is a continuous, flexible steel pipe that is spooled onto a large reel. A coiled tubing unit (CTU) is a mobile, self-contained system that can inject this tubing into and pull it out of a live well under pressure. The ability to circulate fluids through the tubing while it is in the well makes it an incredibly versatile intervention method.</p><h3>2. Key Components of a CTU</h3><ul><li><strong>Reel:</strong> Stores and transports the coiled tubing.</li><li><strong>Injector Head:</strong> Grips the tubing and provides the force to push it into (snub) or pull it out of the well.</li><li><strong>Control Cabin:</strong> Where the operator controls the entire CT operation and monitors all parameters (depth, speed, pressures, etc.).</li><li><strong>Power Pack (HPU):</strong> The hydraulic power source for the reel, injector, and other equipment.</li><li><strong>Pressure Control Equipment (PCE):</strong> A BOP stack specifically designed for coiled tubing, including a stripper that provides a dynamic seal around the moving pipe.</li></ul><h3>3. Common Coiled Tubing Applications</h3><ul><li><strong>Well Cleanouts:</strong> Pumping nitrogen or fluids to lift sand, scale, or other debris out of the wellbore.</li><li><strong>Stimulation:</strong> Precisely placing stimulation fluids like acid directly onto the target formation.</li><li><strong>Milling:</strong> Using a downhole motor and mill to grind up obstructions in the well.</li><li><strong>Logging:</strong> Conveying production logging tools into highly deviated or horizontal wells where gravity-fed wireline cannot reach.</li></ul>'},
                    {type: 'video', topic: '3D animation of a full coiled tubing unit in operation, showing each key component.'}
                ],
                glossary: [
                    {term: 'Coiled Tubing (CT)', definition: 'A long, continuous, flexible steel pipe used for well interventions.'},
                    {term: 'Injector Head', definition: 'The mechanical device that injects and retrieves the coiled tubing from the well.'},
                    {term: 'Stripper', definition: 'A key component of the CT pressure control stack that seals around the moving tubing.'},
                    {term: 'Downhole Motor', definition: 'A tool run on coiled tubing that converts hydraulic energy from pumped fluid into rotational energy to drive a bit or mill.'}
                ],
                safety: { topic: "Coiled Tubing Fatigue", points: ["Coiled tubing has a finite fatigue life. Always track the running history of the CT string.", "Inspect the tubing for damage or corrosion before and after each job.", "Never operate the tubing beyond its safe operational limits."] },
                quiz: [
                    {question: 'What is the primary advantage of coiled tubing that allows for well cleanouts?', answer: 'The ability to continuously circulate fluids down the tubing and up the annulus to lift and remove debris.'},
                    {question: 'What piece of equipment provides the seal around the moving coiled tubing pipe?', answer: 'The stripper.'}
                ]
            },
            {
                id: "l1_3_3",
                title: "Snubbing Operations (Hydraulic Workover)",
                content: [
                    {type: 'text', content: '<h3>1. What is Snubbing?</h3><p>Snubbing, also known as Hydraulic Workover (HWO), is a heavy-duty intervention technique used to run or pull jointed pipe (like production tubing) into or out of a live well under pressure. Unlike coiled tubing, which is continuous, snubbing handles individual joints of pipe. It is used when it is not desirable or feasible to "kill" the well (i.e., fill it with heavy fluid to control pressure).</p>'},
                    {type: 'text', content: '<h3>2. The Principle of "Snubbing"</h3><p>The operation gets its name from the condition where the upward force from the well pressure on the pipe is greater than the weight of the pipe itself. In this "pipe light" condition, the pipe would be ejected from the well if not for the snubbing unit pushing it in. This is "snubbing." Once the weight of the pipe in the well is sufficient to overcome the pressure forces, the operation becomes "pipe heavy," and the unit\'s slips are used to support the pipe\'s weight, similar to a conventional rig.</p>'},
                    {type: 'text', content: '<h3>3. Key Snubbing Equipment</h3><ul><li><strong>Hydraulic Jack:</strong> A large hydraulic ram that provides the force to push pipe into the well (snubbing) or pull it out.</li><li><strong>Slips:</strong> A set of stationary slips to hold the pipe and a set of traveling slips mounted on the jack. These wedge-shaped devices grip the pipe to either hold it or move it.</li><li><strong>Work Basket:</strong> An elevated platform where the crew works to make up or break out joints of pipe.</li><li><strong>BOP Stack:</strong> A robust BOP stack is used, often including pipe stripping rams, to manage well pressure.</li></ul>'},
                    {type: 'text', content: '<h3>4. When is Snubbing Used?</h3><ul><li>Running or pulling completions in live wells.</li><li>Heavy-duty fishing operations.</li><li>Milling and drilling operations under pressure.</li><li>Situations where killing the well would cause significant formation damage.</li></ul>'},
                    {type: 'video', topic: 'Animation showing the difference between "pipe light" (snubbing) and "pipe heavy" conditions.'}
                ],
                glossary: [
                    {term: 'Snubbing / HWO', definition: 'An intervention technique for running or pulling jointed pipe in a live well under pressure.'},
                    {term: 'Pipe Light', definition: 'The condition where well pressure force is greater than pipe weight, requiring the pipe to be pushed ("snubbed") into the well.'},
                    {term: 'Pipe Heavy', definition: 'The condition where pipe weight is greater than well pressure force.'},
                    {term: 'Slips', definition: 'Wedge-shaped devices that grip and hold the pipe in a snubbing unit or rig.'}
                ],
                // FIX: Escaped inner double quotes in the string to prevent a syntax error.
                safety: { topic: "Snub Force Calculation", points: ["Accurate calculation of snubbing and lifting forces is critical to prevent pipe buckling or overloading the unit.", "Continuously monitor well pressure as it directly affects the forces.", "Always maintain awareness of the \"balance point\" where the pipe transitions from light to heavy."] },
                quiz: [
                    {question: 'Under what condition is an operation considered "snubbing"?', answer: 'When the pipe is "light," meaning the upward force from well pressure is greater than the weight of the pipe string, requiring it to be pushed into the well.'},
                    {question: 'What is a key advantage of snubbing over a conventional workover rig?', answer: 'It allows for operations on a live well without needing to kill it, which can prevent formation damage.'}
                ]
            }
        ]
      },
      {
        id: "m4",
        title: "Basic Completion Types and Components",
        lessons: [
            {
                id: "l1_4_1",
                title: "Tubing & Packers",
                content: [
                    {type: 'text', content: '<h3>1. Production Tubing: The Conduit to the Surface</h3><p>Once a well has been drilled and cased, the production tubing serves as the primary conduit for reservoir fluids (oil, gas, water) to flow from the producing formation to the surface. It is a critical component of the completion string, designed to be the primary barrier against corrosion and pressure, protecting the outer casing strings.</p><ul><li><strong>Fluid Conveyance:</strong> Provides a controlled, smaller-diameter path for hydrocarbons, which helps maintain flow velocity and lift fluids efficiently.</li><li><strong>Protection of Casing:</strong> Shields the production casing from corrosive fluids, erosion, and high pressures.</li><li><strong>Well Control:</strong> Facilitates well control operations by providing a conduit for kill fluids or pressure monitoring.</li></ul><h3>2. Packers: Anchoring and Isolating the Completion</h3><p>Packers are mechanical or hydraulic devices that provide a seal in the annulus between the production tubing and the casing. They are essential for isolating specific zones within the wellbore and for protecting the casing from production pressures.</p><ul><li><strong>Zonal Isolation:</strong> Prevents fluid communication between different zones in the annulus, allowing for selective production and preventing unwanted water or gas from being produced.</li><li><strong>Annular Protection:</strong> Protects the casing from high production pressures and corrosive fluids by diverting all flow into the tubing.</li><li><strong>Tubing Anchor:</strong> Anchors the tubing string, preventing movement due to thermal expansion/contraction or pressure fluctuations.</li></ul><h3>3. Types of Packers</h3><ul><li><strong>Retrievable Packers:</strong> Designed to be set and unset multiple times. They are typically set mechanically (by rotation or vertical movement of the tubing) or hydraulically. They can be removed for repair or to re-complete the well.</li><li><strong>Permanent Packers:</strong> Designed to be set once and remain in the well for the life of the completion. They offer higher pressure and temperature ratings and are more reliable. Removal usually requires milling, which is a costly operation.</li></ul>'},
                    {type: 'video', topic: 'Animation showing the installation of a production tubing string and the setting of a mechanical packer.'}
                ],
                glossary: [
                    {term: 'Production Tubing', definition: 'The pipe string through which reservoir fluids flow to the surface.'},
                    {term: 'Annulus', definition: 'The space between two concentric pipes (e.g., tubing and casing).'},
                    {term: 'Retrievable Packer', definition: 'A packer designed to be set and unset multiple times.'},
                    {term: 'Permanent Packer', definition: 'A packer designed to be set once, typically requiring milling for removal.'},
                    {term: 'Milling', definition: 'The process of grinding up downhole equipment (like a permanent packer) using a rotating bit.'}
                ],
                safety: { topic: "Tubing and Packer Running Procedures", points: ["Visually inspect each joint of tubing and all packer components for damage before running.", "Adhere strictly to manufacturer\'s torque specifications for all connections.", "Perform pressure tests on the tubing string and packer after setting, as per the program."] },
                quiz: [
                    {question: 'What are two key functions of a packer in a well completion?', answer: 'Zonal isolation (preventing fluid communication between zones) and anchoring the tubing string.'},
                    {question: 'What is the main difference between a retrievable packer and a permanent packer?', answer: 'A retrievable packer can be unset and pulled out of the well, while a permanent packer is designed to stay in place and typically requires milling for removal.'}
                ]
            },
            {
                id: "l1_4_2",
                title: "Flow Control Devices",
                content: [
                    {type: 'text', content: '<h3>1. Subsurface Safety Valves (SSSV)</h3><p>The Subsurface Safety Valve (SSSV) is one of the most critical safety devices in a well completion. Its primary function is to automatically shut off well flow downhole in the event of an emergency or catastrophic failure of the surface equipment. This prevents the uncontrolled release of hydrocarbons.</p><ul><li><strong>Surface-Controlled SSSV (SCSSV):</strong> The most common type. It is held open by hydraulic pressure from the surface via a small control line. If this hydraulic pressure is lost (e.g., due to a control line rupture or emergency shutdown), a powerful spring mechanism automatically closes a flapper or ball valve, sealing the tubing bore. This is a "fail-safe close" design.</li></ul><h3>2. Sliding Sleeves</h3><p>Sliding sleeves are downhole tools that provide selective communication between the tubing and the annulus. An inner sleeve can be shifted up or down (usually with slickline) to open or close ports.</p><ul><li><strong>Applications:</strong> Selective production from different zones, establishing circulation paths for well killing or fluid displacement, or accepting gas lift valves.</li></ul><h3>3. Landing Nipples</h3><p>Landing nipples are sections of the tubing string with a specific internal profile. These profiles are designed to accept and lock in various flow control devices run on wireline.</p><ul><li><strong>Applications:</strong> Landing plugs to shut off flow, chokes to restrict flow, or safety valves.</li></ul>'},
                    {type: 'video', topic: 'Animation of a SCSSV in operation, showing the control line, hydraulic pressure holding the flapper open, and the spring closing it upon loss of pressure.'}
                ],
                glossary: [
                    {term: 'Subsurface Safety Valve (SSSV)', definition: 'A downhole valve designed to automatically shut off well flow in an emergency.'},
                    {term: 'Fail-Safe Close', definition: 'A design principle where a device defaults to a safe (closed) position upon loss of power or control signal.'},
                    {term: 'Sliding Sleeve', definition: 'A downhole tool that allows selective communication between the tubing and annulus.'},
                    {term: 'Landing Nipple', definition: 'A profiled sub in the tubing string designed to lock in wireline-run flow control devices.'}
                ],
                safety: { topic: "SSSV Testing", points: ["Regularly function test SCSSVs from the surface to ensure they open and close correctly.", "Perform a leak test on the SSSV to confirm it provides a positive seal when closed.", "Verify the SSSV is integrated with the facility\'s Emergency Shutdown (ESD) system."] },
                quiz: [
                    {question: 'How does a Surface-Controlled Subsurface Safety Valve (SCSSV) operate in a "fail-safe" manner?', answer: 'It is held open by hydraulic pressure from the surface; if this pressure is lost, a spring mechanism automatically closes the valve.'},
                    {question: 'What is a key application for a sliding sleeve?', answer: 'To selectively open or close communication with specific reservoir zones, or to enable circulation between the tubing and annulus.'}
                ]
            },
            {
                id: "l1_4_3",
                title: "Sand Control Methods (Basic)",
                content: [
                    {type: 'text', content: '<h3>1. The Problem of Sand Production</h3><p>In many reservoirs, the rock is "unconsolidated" or weakly held together. During production, the flow of fluids can dislodge sand grains from the formation, carrying them into the wellbore. This sand production can cause severe erosion of downhole and surface equipment, plug the well, and lead to costly failures.</p><h3>2. Gravel Pack Completions</h3><p>This is one of the most common and effective sand control methods. It involves placing a filter of carefully sized gravel (high-quality sand) in the annulus between a screen and the formation. The gravel acts as the primary filter, holding back the fine formation sand while allowing hydrocarbons to flow through.</p><ul><li><strong>Components:</strong> A screen (slotted liner or wire-wrapped screen) is run inside the well. Gravel is then pumped into the annulus between the screen and the casing/open hole.</li><li><strong>Principle:</strong> The gravel is sized to be large enough to not pass through the screen slots, but small enough to stop the formation sand.</li></ul><h3>3. Standalone Screens</h3><p>In some cases where the formation sand is coarse and well-sorted, screens can be used without a gravel pack. The slots in the screen are sized to directly bridge and hold back the formation sand.</p><ul><li><strong>Wire-Wrapped Screens (WWS):</strong> Consist of a perforated base pipe wrapped with a continuous, precisely shaped wire, creating very accurate slot openings for reliable filtration.</li><li><strong>Slotted Liners:</strong> A simpler method where slots are cut directly into a joint of casing. Less precise and more prone to plugging.</li></ul>'},
                    {type: 'video', topic: 'Step-by-step animation of a cased-hole gravel pack operation.'}
                ],
                glossary: [
                    {term: 'Sand Production', definition: 'The influx of formation sand or fines into the wellbore along with produced fluids.'},
                    {term: 'Unconsolidated Formation', definition: 'A geological formation where the rock grains are not cemented together.'},
                    {term: 'Gravel Pack', definition: 'A sand control method involving placing a permeable gravel filter around a screen in the annulus.'},
                    {term: 'Screen', definition: 'A filtering device (e.g., slotted liner, wire-wrapped screen) installed in the wellbore to retain sand.'}
                ],
                safety: { topic: "Sand Control Equipment Handling", points: ["Thoroughly inspect all screens for damage before running.", "Verify gravel meets specified size and quality requirements.", "Closely monitor pumping pressures during gravel packing to detect potential screen plugging."] },
                quiz: [
                    {question: 'Describe the basic principle of a gravel pack for sand control.', answer: 'A gravel pack places a layer of carefully sized gravel around a screen, which acts as a filter to hold back formation sand while allowing fluids to flow.'},
                    {question: 'What is the main difference between a slotted liner and a wire-wrapped screen?', answer: 'A wire-wrapped screen has precisely engineered, uniform slot openings created by a wrapped wire, offering superior filtration compared to the simpler, less precise slots of a slotted liner.'}
                ]
            }
        ]
      },
      {
        id: "m5",
        title: "Safety Procedures and Regulations",
        lessons: [
            {
                id: "l1_5_1",
                title: "Personal Protective Equipment (PPE) & Hazard Communication",
                content: [
                    {type: 'text', content: '<h3>1. Personal Protective Equipment (PPE)</h3><p>PPE is the last line of defense against workplace hazards. It is equipment worn to minimize exposure to hazards that cause serious injuries and illnesses. On a wellsite, standard PPE is non-negotiable.</p><ul><li><strong>Head Protection (Hard Hats):</strong> Protects against falling objects and impacts.</li><li><strong>Eye Protection (Safety Glasses/Goggles):</strong> Shields eyes from flying debris and chemical splashes.</li><li><strong>Hearing Protection (Ear Plugs/Muffs):</strong> Required in high-noise areas to prevent hearing damage.</li><li><strong>Hand Protection (Gloves):</strong> Various types for impact, cut, and chemical resistance.</li><li><strong>Foot Protection (Safety Boots):</strong> Steel-toed, slip-resistant boots.</li><li><strong>Body Protection (Flame-Resistant Clothing - FRC):</strong> Required in areas with potential for flash fires.</li></ul><h3>2. Hazard Communication (HazCom)</h3><p>The HazCom standard ensures that information about chemical hazards is communicated to employers and employees. The two main elements are container labeling and Safety Data Sheets (SDS).</p><ul><li><strong>Labels:</strong> All containers of hazardous chemicals must be clearly labeled with the product identifier, hazard statements, and pictograms.</li><li><strong>Safety Data Sheets (SDS):</strong> An SDS is a detailed document providing comprehensive information about a hazardous substance, including its risks, handling procedures, and emergency measures. All personnel must know where to find and how to read the SDS for the chemicals they work with.</li></ul>'},
                    {type: 'video', topic: 'Demonstration of how to read the key sections of a Safety Data Sheet (SDS).'}
                ],
                glossary: [
                    {term: 'Personal Protective Equipment (PPE)', definition: 'Equipment worn to minimize exposure to hazards.'},
                    {term: 'Flame-Resistant Clothing (FRC)', definition: 'Clothing designed to self-extinguish and protect against burns from short-duration thermal exposures.'},
                    {term: 'Hazard Communication (HazCom)', definition: 'A system to ensure information about chemical hazards is available.'},
                    {term: 'Safety Data Sheet (SDS)', definition: 'A detailed document providing comprehensive information about a hazardous substance.'}
                ],
                safety: { topic: "Daily PPE Inspection", points: ["Check hard hat for cracks or damage to the suspension.", "Ensure safety glasses are clean and free of scratches.", "Inspect gloves for tears or signs of chemical degradation.", "Check FRC for rips or contamination."] },
                quiz: [
                    {question: 'Why is PPE considered the "last line of defense"?', answer: 'Because it is used when hazards cannot be eliminated or controlled by other means like engineering or administrative controls. It protects the individual directly.'},
                    {question: 'What is a Safety Data Sheet (SDS), and why is it important?', answer: 'An SDS is a document with detailed information about a hazardous chemical. It is important because it informs personnel about the risks, safe handling procedures, and necessary protective measures.'}
                ]
            },
            {
                id: "l1_5_2",
                title: "Permit-to-Work Systems & Job Safety Analysis (JSA)",
                content: [
                    {type: 'text', content: '<h3>1. Permit-to-Work (PTW) System</h3><p>A PTW system is a formal, documented procedure that authorizes specific work to be carried out. It ensures that all necessary precautions have been taken and hazards have been identified and mitigated. It is a cornerstone of operational safety in high-hazard industries.</p><ul><li><strong>Purpose:</strong> To control hazardous work, ensure clear communication, and provide accountability.</li><li><strong>Types of Permits:</strong> Common permits include Hot Work (for ignition sources), Cold Work, Confined Space Entry, and Electrical Work.</li></ul><h3>2. Job Safety Analysis (JSA)</h3><p>A JSA (or Job Hazard Analysis - JHA) is a systematic process used to identify potential hazards associated with each step of a job and to develop solutions to eliminate or control those hazards. It is a proactive tool to prevent accidents.</p><h4>How to Conduct a JSA:</h4><ol><li><strong>Break Down the Job:</strong> List each individual step of the job in sequence.</li><li><strong>Identify Hazards:</strong> For each step, identify all potential hazards.</li><li><strong>Develop Control Measures:</strong> For each hazard, determine specific actions to eliminate or control the risk.</li><li><strong>Communicate:</strong> Discuss the JSA with all personnel involved in the job during a pre-job safety meeting (Toolbox Talk).</li></ol>'},
                    {type: 'video', topic: 'Walkthrough of a JSA being filled out for a common wellsite task.'}
                ],
                glossary: [
                    {term: 'Permit-to-Work (PTW)', definition: 'A formal system authorizing specific work under controlled conditions.'},
                    {term: 'Job Safety Analysis (JSA)', definition: 'A systematic process to identify hazards and develop control measures for a job.'},
                    {term: 'Hot Work', definition: 'Work involving sources of ignition, such as welding or grinding.'},
                    {term: 'Toolbox Talk', definition: 'A pre-job safety meeting to discuss the task, hazards, and safety precautions.'}
                ],
                safety: { topic: "Stop Work Authority", points: ["All personnel have the authority and responsibility to stop any job they believe is unsafe.", "There are no repercussions for initiating a Stop Work order in good faith.", "Work should only resume after all safety concerns have been addressed."] },
                quiz: [
                    {question: 'What is the primary purpose of a Permit-to-Work (PTW) system?', answer: 'To ensure that all necessary precautions have been taken, hazards identified and mitigated, and all personnel are aware of risks before starting hazardous work.'},
                    {question: 'What are the three main steps in conducting a Job Safety Analysis (JSA)?', answer: 'Break down the job into steps, identify hazards for each step, and develop control measures.'}
                ]
            },
            {
                id: "l1_5_3",
                title: "Emergency Response & First Aid Basics",
                content: [
                    {type: 'text', content: '<h3>1. Emergency Response Plan (ERP)</h3><p>An ERP outlines the procedures to be followed in various emergency scenarios to minimize harm to personnel, protect the environment, and safeguard assets. All personnel must be familiar with the ERP.</p><ul><li><strong>Key Elements:</strong> Alarm systems, designated Muster Points (safe assembly areas), communication protocols, and clearly defined roles and responsibilities.</li><li><strong>Common Emergencies:</strong> Fire, H2S release, well control incident, medical emergency, and spills.</li></ul><h3>2. First Aid Basics</h3><p>Knowing basic first aid can make a significant difference in the outcome of an incident. The first priority is always to ensure your own safety before helping others.</p><h4>Basic Steps (DRSABCD):</h4><ol><li><strong>D</strong>anger: Check for danger to yourself, the casualty, and others.</li><li><strong>R</strong>esponse: Check if the casualty is conscious.</li><li><strong>S</strong>end for help: Call for emergency services or designated first aiders.</li><li><strong>A</strong>irway: Check if the airway is open and clear.</li><li><strong>B</strong>reathing: Check for normal breathing.</li><li><strong>C</strong>PR: Start Cardiopulmonary Resuscitation if not breathing.</li><li><strong>D</strong>efibrillation: Attach an AED if available.</li></ol><h3>3. Specific First Aid</h3><ul><li><strong>Bleeding:</strong> Apply direct, firm pressure to the wound with a clean cloth.</li><li><strong>Burns:</strong> Cool the burn with cool running water for at least 20 minutes.</li><li><strong>Chemical Splashes:</strong> Flush the affected area with copious amounts of water. Refer to the SDS.</li></ul>'},
                    {type: 'video', topic: 'Demonstration of a muster drill and proper use of an emergency eye wash station.'}
                ],
                glossary: [
                    {term: 'Emergency Response Plan (ERP)', definition: 'A documented plan outlining procedures for various emergencies.'},
                    {term: 'Muster Point', definition: 'A designated safe assembly area during an evacuation.'},
                    {term: 'H2S (Hydrogen Sulfide)', definition: 'A highly toxic and flammable gas often found in oil and gas operations.'},
                    {term: 'CPR (Cardiopulmonary Resuscitation)', definition: 'An emergency procedure for someone whose heart has stopped or who is not breathing.'}
                ],
                safety: { topic: "Emergency Equipment Location", points: ["Know the location of all fire extinguishers, first aid kits, eye wash stations, and SCBA units.", "Ensure emergency exits and escape routes are always clear and unobstructed.", "Verify that emergency equipment is regularly inspected and in good working order."] },
                quiz: [
                    {question: 'Where should all personnel gather during an emergency evacuation on a wellsite?', answer: 'At the designated Muster Point.'},
                    {question: 'What is the first and most crucial step when encountering an injured person?', answer: 'Assess the scene to ensure your own safety first (Check for Danger).'}
                ]
            }
        ]
      }
    ]
  }
];
