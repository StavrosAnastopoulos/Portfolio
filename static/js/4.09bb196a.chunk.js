(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[4],{52:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var i,o=a(1),n=a.n(o),r=a(13),s=[{image:"/images/examplegeometrymap.png",image2:"/images/examplegeometrymapFull.png",title:"Saliency in 3D Environment",summary:"Exploring low-level saliency in virtual environments during a search task.",overview:'<p>Exploring low-level saliency in virtual environments during a search task. \n\t\t\t\tThe 3D environment was created in Unity using a random dungeon generation asset. \n\t\t\t\tThe play-through and other relevant information such as character position and rotation in each frame were recorded, as well as the gaze points which were extracted using a Tobii EyeX tracker with the provided Unity SDK.</p>\n\t\t\t\t<p>The information was then processed with OpenCV in terms of low-level (pixel) saliency and the environment was recreated using OpenGL for visualisation. \n\t\t\t\tFrames were processed in terms of their salient features using a variety of low-level salient algorithms, such as the \n\t\t\t\t<a href="http://www.klab.caltech.edu/~xhou/papers/cvpr07.pdf">Spectral Residual Map of Hou and Zhang</a>\n\t\t\t\twhere an example implementation is available built-in the OpenCV(3+) library.</p>\n\t\t\t\t<p>The salient points gathered throughout the play-through were filtered to minimise duplicates. \n\t\t\t\tThey were then evaluated in terms of attendance using a 3D heatmap created from the player\'s gaze points.</p>',tags:"Tobii EyeX, Unity, C++, OpenCV, OpenGL, Computer Vision and Graphics"},{image:"/images/volumvis.png",image2:"/images/volumvisFull.png",title:"3D Volume Visualisation using Ray Tracing",summary:"Visualisation of volume data using ray tracing rendering and uniform sampling.",overview:'<p>Visualisation of volume data using the ray tracing rendering technique and uniform sampling.\n\t\t\t\tThe data was first expressed in the world as a box with 6 planes, on which we cast rays. \n\t\t\t\tUpon verifying a hit we recursed on that ray with a uniform step which was calculated by the angle of the ray with the plane. \n\t\t\t\tRespective 3D points were then converted into intensity values from our data according to nearest-neighbor or trilinear sampling. \n\t\t\t\tThe recursion stops when the point is no longer valid.</p>\n\t\t\t\t<p>We used OpenGL for rendering the output as a set of 2D points and Pthreads for acceleration.\n\t\t\t\tCurrent set-up: 500x500 resolution/ 256x256x100 datasize/ 8 threads runs approximately 0.1-0.3 seconds with NN or 0.5-0.7 seconds with trilinear interpolation. \n\t\t\t\tRunning time depends on the face and distance that we are looking (number of rays that represent data).</p>\n\t\t\t\t<p>Source code available <a href="https://github.com/StavrosAnastopoulos/VolumeVisualisation">here.</a></p>',tags:"C++, Pthreads, OpenGL, Computer Vision and Graphics"},{image:"/images/raytracing.png",image2:"/images/raytracing.png",title:"Ray Tracing",summary:"Ray Tracer rendering technique. All objects are declared in a mathematical format.",overview:'<p>Ray Tracer example written in C++ using OpenGL for rendering the output, GLM for matrix and vector operations and Pthreads for some speed-up. \n\t\t\t\tContains a scene with primitive objects (sphere/plane/triangle). \n\t\t\t\tThe objects are declared in a mathematical format (no mesh readers/handlers) and the lighting follows the standard Ambient/Diffuse/Specular lighting with light attenuation and normal shadows. \n\t\t\t\tThe materials can vary as: Normal, Reflective, Refractive.</p>\n\t\t\t\t<p>Currently it runs in ~1 second on 4 threads in a scene 640x480 with 125 objects.</p>\n\t\t\t\t<p>Source code available <a href="https://github.com/StavrosAnastopoulos/raytracer">here.</a></p>',tags:"C++, Pthreads, OpenGL, GLM, Computer Vision and Graphics"},{image:"/images/tracking.png",image2:"/images/trackingFull.png",title:"Multiple Object Tracking",summary:"Identify and track a set of objects across frames.",overview:'<p>The objective was to identify and track a set of balls across frames, having a total of 10 balls varied across 3 colors. \n\t\t\t\tHaving an almost stationary background, we extract the different balls using background subtraction and we further process the image with morphological operators and color information to erase noise and keep the individual spheres. \n\t\t\t\tFor tracking we used the Condensation tracker to encode dynamics and produce plausible future locations and Kalman filter for their evaluation. \n\t\t\t\tThe "observed" values came from a naive approach of comparing relative positions, sizes and histograms across frames. \n\t\t\t\tOverall the tracking was about 75% accurate across frames, however it was prone to errors when there were more than one balls of the same color in the same area.</p>',tags:"Matlab, Computer Vision and Graphics"},{image:"/images/DWA.png",image2:"/images/DWA.png",title:"Image Processing",summary:"Application of some basic filters is explored, as well as a stitching technique for panoramic compostition.",overview:'<p>Python code demonstrating an horizontal panoramic composition technique. \n\t\t\t\tThe algorithm takes consecutive images and finds a best merging point based on the difference of pixel columns. \n\t\t\t\tThen by merging horizontally and processing the overlap area, by dynamically assigning weights, it creates a smooth transition between the images. \n\t\t\t\tThe effect of various filters has also been explored, such as Gaussian and Median smoothing and Sobel edges.</p>\n\t\t\t\t<p>Source code available <a href="https://github.com/StavrosAnastopoulos/ImProc">here.</a></p>',tags:"Python, UG Final Year Project, Computer Vision and Graphics"},{image:"/images/boulder.png",image2:"/images/boulder.png",title:"Boulder Bypasser",summary:"Semi 3D flight game. Fly inside a procedurally generated cave. Pass throught waypoints and avoid obstacles.",overview:'<p>Semi-3D Flight game.</p>\n\t\t\t\t<p>The player is given control of a spaceship inside a cave and he has to progress through it, avoid obstacles and pass through the way-points to increase his score and speed. \n\t\t\t\tA custom character controller gives the initial feel that was envisioned and then some minor options allow the player to adjust to his preferences. \n\t\t\t\tThese include input (touch or accelerometer), adjusting the sensitivity, the character transparency or even changing the view point.</p>\n\t\t\t\t<p>Objects are low polygon made in 3DS MAX, simple enough to serve their purpose. \n\t\t\t\tIn-game they are being generated using a clustering algorithm to determine their initial position, size and speed. \n\t\t\t\tUnity\'s standard assets for cell shading fitted perfectly with the atmosphere and low polygon objects achieving simple cartoon graphics.</p>\n\t\t\t\t<p>Procedural mesh generation and editing gives the feeling of movement through the cave. \n\t\t\t\tUsing a single chunk of terrain which is continuously altered using Perlin noise, the cave is continuously updated based on player\'s speed. \n\t\t\t\tThe mesh points are being modified using Compute Shaders where supported, otherwise the terrain is split in four parts and use the standard .Net threads, achieving real-time update of both the mesh and its collider.</p> \n\t\t\t\t<p>The game is for android and freely available on <a href="https://play.google.com/store/apps/details?id=com.TheMisku.BoulderBypasser">Google Play</a>.</p>\n\t\t\t\t<p>Source code available <a href="https://github.com/StavrosAnastopoulos/Boulder-Bypasser">here.</a></p>',tags:"Unity, 3DS Max, Computer Games"},{image:"/images/spaceretr.png",image2:"/images/spaceretrFull.png",title:"Space Retributor",summary:"2D arcade space shooter. Fight your way through enemies of increasing difficulty and their end-game boss.",overview:'<p>A 2D arcade, space shooter game.</p>\n\t\t\t\t<p>The main enemies are divided into three different categories with different behaviors such as focusing the user for period of time or avoiding his attacks. \n\t\t\t\tThe different categories are labeled with different level of difficulty and their spawn chance changes depending on how the user\'s score progresses. \n\t\t\t\tA boss fight is also available after the player reaches a certain score. \n\t\t\t\tOn enemy death there is a chance for a power-up to spawn. \n\t\t\t\tThese are also divided into three categories as health replenishment, temporary invulnerability and temporary boost in user\'s attack frequency. \n\t\t\t\tThe armor of the user is recharged if depleted after a a few seconds providing him with a smart sustainability. \n\t\t\t\tA persistent high score table can be accessed from the menu screen that keeps the top five attempts and the respective attempt number. \n\t\t\t\tThe graphics consist from sprite animations and particle effects.</p>\n\t\t\t\t<p>The game can be freely downloaded from <a href="https://play.google.com/store/apps/details?id=com.TheMisku.SpaceRetributor">Google Play</a>.</p>\n\t\t\t\t<p>Source code available <a href="https://github.com/StavrosAnastopoulos/Space-Retributor">here.</a></p>',tags:"Unity, Computer Games"},{image:"/images/ballrunner.png",image2:"/images/ballrunnerFull.png",title:"Ball Runner",summary:"A platform-runner mini game with simplistic graphics and procedurally generated level.",overview:'<p>A platform/runner mini game with simplistic graphics.</p>\n\t\t\t\t<p>Mostly a case study for automatic tile-map generation. \n\t\t\t\tThe environment is generated randomly and infinitely as long as the player survives and progresses. \n\t\t\t\tThere are collectibles along the way for the user, which can be gathered to increase his score. \n\t\t\t\tHowever there are some that will hinder his movement abilities, so collect with caution.</p>\n\t\t\t\t<p>The game can be freely downloaded on android devices from <a href="https://play.google.com/store/apps/details?id=com.NoCompany.Platformer">Google Play</a>.</p>\n\t\t\t\t<p>Source code available <a href="https://github.com/StavrosAnastopoulos/Ball-Runner">here.</a></p>',tags:"Unity, Computer Games"},{image:"/images/calendar.PNG",image2:"/images/calendar.PNG",title:"Calendar based Scheduler",summary:"A scheduler created for a museum to hold the guided tours and generate weekly and semester reports.",overview:'<p>This project was created for a naval museum as a scheduler in order to store their guided tours and have a good visualisation of the timetable to increase their productivity. \n\t\t\t\tIt features three view modes; The monthly view is a compact version in order to have a full scale visualisation of the timeschedule without worrying about individual group details. \n\t\t\t\tIt is the prefered version when in the process of booking a new group because the user can easily see information about the period around a certain date and conclude faster to an appropriate day/time.\n\t\t\t\tThe second most usefull view mode is the daily mode. There the user can add or review each group by looking at the full details.\n\t\t\t\tThe last view mode is the weekly, which gives full information of the user about each day of week and each appointment. \n\t\t\t\tIt is not so visually appealing, but it is used in order to automatically generate the weekly report (exported in pdf).\n\t\t\t\tApart from the weekly report, the application also features the generation of a semester report which is more client specific.</p>\n\t\t\t\t<p>Furthermore, there are a lot of setting for customisation and extensibility.\n\t\t\t\tThe timetable to each day of week can be altered in order to suit the customer needs.\n\t\t\t\tAlso the detailes that are stored for each group can be defined and the user can create a variety of such groups.\n\t\t\t\tTo add to that, colour groups can be defined, and when creating a new appointment you can set its special colour group to be visualised in the monthly view. \n\t\t\t\tThat helps as a reminder to the user when there is a special appointment or occasion coming up.</p>\n\t\t\t\t<p>As far as the data is concerned, they are stored in XML files. There is a file hierarchy as year>month>xmlfile and in the file they are separated by day as per parent>children. \n\t\t\t\tSo when the application tries to retrieve information about a day, the algorithm goes directly to the associated year/month, so that it doesnt have to go through all the data.</p>\n\t\t\t\t<p>Source code available <a href="https://github.com/StavrosAnastopoulos/Calendar">here.</a></p>',tags:"Unity"},{image:"/images/robot.png",image2:"/images/robot.png",title:"Automated Resoure Retrieval with Mobile Robots",summary:"Robotics group project with aim of constructing an autonomous robot for navigating in an arena, searching the specified resources and retrieving them back to the base.",overview:"<p>A robotics project conducted in a team of three. \n\t\t\t\tThe aim of the project was to construct an autonomous mobile robot for navigating in an arena, searching the specified resources and retrieving them back to the base. \n\t\t\t\tThe robot itself was constructed using Phidget electrical boards, motors and sensors, a fit-PC, a camera and Lego pieces. \n\t\t\t\tIt used two IR sensors and one sonar for navigation and avoidance, the camera for recognising resources and a gripper for collecting them.</p>",tags:"C++, Pthreads, Phidget, Lego"},{image:"/images/NN.png",image2:"/images/NN.png",title:"Neural Network and Genetic Algorithm",summary:"Construction of Neural Network to learn two function outputs with single input and optimisation of hidden layer by a genetic algorithm.",overview:'<p>An example of a Neural Network simulating the result of two functions in C++. \n\t\t\t\tThe initial structure includes one input node, one hidden layer with five hidden nodes, two output nodes and two threshold nodes on transition between layers. \n\t\t\t\tThe Neural Network is trained on a set of input and output results and validated on a different set of input-output. \n\t\t\t\tOptimisation through Genetic Algorithm is conducted to optimise the number of hidden neurons. </p>\n\t\t\t\t<p>Source code available <a href="https://github.com/StavrosAnastopoulos/neuralnet">here.</a></p>',tags:"C++"},{image:"/images/portfolioSmall.png",image2:"/images/portfolioSmall.png",title:"Portfolio",summary:"Does this count as a project though?",tags:"React, Mobx, Github Pages"}],l=a(9),h=a(18),c=a(20),p=a(19),d=a(21),m=(a(52),a(0)),u=a(27),g=Object(r.a)(i=function(e){function t(){var e,a;Object(l.a)(this,t);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).card={backgroundColor:a.props.theme.colorMain,borderColor:a.props.theme.colorMain},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"card",style:this.card},n.a.createElement(m.b.Provider,{value:{color:this.props.theme.colorLink,className:"action-icon"}},n.a.createElement("div",{onClick:function(){return e.props.onClick()}},u.a[this.props.actionIcon])),n.a.createElement("h3",{style:{color:this.props.theme.colorLink,padding:"10px"}},this.props.project.title),n.a.createElement("hr",{style:{borderColor:this.props.theme.colorLink}}),n.a.createElement("p",{style:{color:this.props.theme.colorBackground,padding:"10px"},dangerouslySetInnerHTML:{__html:this.props.project.summary}}),n.a.createElement("p",{className:"tags",style:{color:this.props.theme.colorBackground}},this.props.project.tags),n.a.createElement("img",{src:this.props.project.img,alt:this.props.project.img}))}}]),t}(n.a.Component))||i,f=a(17),v=a(22),y=function(e){v.a.component=n.a.createElement(g,{theme:f.a,project:{title:e.title,summary:e.overview,tags:e.tags,img:e.image2},onClick:function(){return v.a.isOpen=!1,void(v.a.component=null)},actionIcon:"colapse"}),v.a.hasBackdrop=!0,v.a.isOpen=!0},w=Object(r.a)((function(){return n.a.createElement("div",{style:{display:"flex",flexFlow:"row wrap"}},s.map((function(e,t){return n.a.createElement(g,Object.assign({key:"projext-".concat(t)},{theme:f.a,project:{title:e.title,summary:e.summary,tags:e.tags,img:e.image},onClick:function(){return y(e)},actionIcon:"expand"}))})))}));t.default=w}}]);
//# sourceMappingURL=4.09bb196a.chunk.js.map