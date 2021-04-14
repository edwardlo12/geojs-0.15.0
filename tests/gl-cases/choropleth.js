describe('choropleth', function () {
  var imageTest = require('../image-test');
  var common = require('../test-common');

  var states = [
    {
      'type': 'Feature',
      'properties': {
        'GEO_ID': '0400000US04',
        'STATE': '04',
        'NAME': 'Arizona',
        'LSAD': '',
        'CENSUSAREA': 113594.084000
      },
      'geometry': {
        'type': 'Polygon',
        'coordinates': [[[-112.538593, 37.000674], [-112.534545, 37.000684], [-112.368946, 37.001125], [-112.357690, 37.001025], [-111.412784, 37.001478], [-111.405869, 37.001481], [-111.405517, 37.001497], [-111.189888, 37.000959], [-110.750690, 37.003197], [-110.495259, 37.003875], [-110.331050, 36.998216], [-110.000677, 36.997968], [-109.381226, 36.999148], [-109.378039, 36.999135], [-109.270097, 36.999266], [-109.268213, 36.999242], [-109.263390, 36.999263], [-109.246917, 36.999346], [-109.233848, 36.999266], [-109.181196, 36.999271], [-109.045223, 36.999084], [-109.045244, 36.969489], [-109.045272, 36.968871], [-109.045407, 36.874998], [-109.045433, 36.874589], [-109.045973, 36.002338], [-109.046011, 35.925896], [-109.046054, 35.925860], [-109.046055, 35.888721], [-109.046024, 35.879800], [-109.046295, 35.616517], [-109.046296, 35.614251], [-109.046509, 35.546440], [-109.046481, 35.546326], [-109.046082, 35.174665], [-109.045851, 34.959718], [-109.046156, 34.579291], [-109.046182, 34.522553], [-109.046182, 34.522393], [-109.046627, 33.778233], [-109.046870, 33.372654], [-109.047045, 33.369280], [-109.046909, 33.365570], [-109.046827, 33.365272], [-109.047237, 33.208965], [-109.047116, 33.137995], [-109.047117, 33.137559], [-109.047013, 33.092917], [-109.046905, 33.091931], [-109.047453, 33.069427], [-109.047480, 33.068420], [-109.047117, 32.777570], [-109.047117, 32.777569], [-109.047638, 32.693439], [-109.047645, 32.689988], [-109.047653, 32.686327], [-109.047653, 32.681379], [-109.047926, 32.426376], [-109.048286, 32.089114], [-109.048296, 32.084093], [-109.048731, 32.028174], [-109.048599, 32.013651], [-109.048590, 31.870791], [-109.048769, 31.861383], [-109.048763, 31.810776], [-109.049195, 31.796551], [-109.049813, 31.499528], [-109.049843, 31.499515], [-109.050044, 31.332502], [-109.426931, 31.334033], [-110.460172, 31.333051], [-110.760997, 31.332765], [-110.976828, 31.332560], [-111.098097, 31.339836], [-111.366635, 31.425880], [-111.579530, 31.494095], [-112.246102, 31.704195], [-112.867074, 31.895488], [-113.125961, 31.972780], [-113.333794, 32.038521], [-113.493196, 32.088943], [-114.250775, 32.323910], [-114.813613, 32.494277], [-114.809393, 32.617119], [-114.807390, 32.621332], [-114.799302, 32.625115], [-114.781872, 32.625050], [-114.753111, 32.658304], [-114.748000, 32.664184], [-114.719633, 32.718763], [-114.678632, 32.736614], [-114.677091, 32.736218], [-114.658840, 32.733830], [-114.658260, 32.733799], [-114.615585, 32.728446], [-114.615733, 32.729427], [-114.496827, 32.822119], [-114.496284, 32.822326], [-114.465715, 32.879191], [-114.465715, 32.879420], [-114.462890, 32.905797], [-114.468605, 32.971649], [-114.511343, 33.023455], [-114.516912, 33.026871], [-114.523578, 33.030961], [-114.571653, 33.036624], [-114.578287, 33.035375], [-114.584765, 33.028231], [-114.589778, 33.026228], [-114.606282, 33.025703], [-114.623870, 33.028720], [-114.675104, 33.047532], [-114.707819, 33.091102], [-114.706175, 33.105335], [-114.696829, 33.131209], [-114.687074, 33.142196], [-114.679359, 33.159519], [-114.675360, 33.185489], [-114.672088, 33.258499], [-114.700103, 33.341045], [-114.721233, 33.396912], [-114.665278, 33.415358], [-114.627125, 33.433554], [-114.622918, 33.456561], [-114.594534, 33.495059], [-114.558898, 33.531819], [-114.535664, 33.568788], [-114.535965, 33.569154], [-114.540300, 33.580615], [-114.540617, 33.591412], [-114.530348, 33.679245], [-114.523959, 33.685879], [-114.519113, 33.688473], [-114.496489, 33.696901], [-114.494197, 33.707922], [-114.504340, 33.756381], [-114.523365, 33.806120], [-114.525539, 33.838614], [-114.518434, 33.917518], [-114.499883, 33.961789], [-114.463610, 33.993431], [-114.438266, 34.022609], [-114.434949, 34.037784], [-114.435429, 34.079727], [-114.433380, 34.088413], [-114.420499, 34.103466], [-114.411681, 34.110031], [-114.401352, 34.111652], [-114.390565, 34.110084], [-114.366521, 34.118575], [-114.321618, 34.138093], [-114.312592, 34.144453], [-114.244191, 34.179625], [-114.225861, 34.201774], [-114.164476, 34.251667], [-114.133264, 34.258462], [-114.131489, 34.260387], [-114.138282, 34.303230], [-114.176909, 34.349306], [-114.199482, 34.361373], [-114.264317, 34.401329], [-114.339627, 34.451435], [-114.452547, 34.653494], [-114.465607, 34.692260], [-114.552682, 34.766871], [-114.633051, 34.869971], [-114.635176, 34.875003], [-114.636725, 34.889107], [-114.630877, 34.907263], [-114.629015, 34.986148], [-114.629190, 34.991887], [-114.633013, 35.002085], [-114.633544, 35.015644], [-114.635469, 35.028266], [-114.621956, 35.094678], [-114.599120, 35.121050], [-114.584300, 35.124999], [-114.578524, 35.128750], [-114.572747, 35.138725], [-114.569569, 35.163053], [-114.569238, 35.183480], [-114.595931, 35.325234], [-114.604314, 35.353584], [-114.627137, 35.409504], [-114.652005, 35.429165], [-114.662125, 35.444241], [-114.677643, 35.489742], [-114.676733, 35.499063], [-114.674981, 35.510564], [-114.671147, 35.520641], [-114.653806, 35.599490], [-114.653406, 35.610789], [-114.657506, 35.618289], [-114.676707, 35.640989], [-114.689407, 35.651412], [-114.700308, 35.700387], [-114.707710, 35.811885], [-114.705611, 35.848884], [-114.704211, 35.851984], [-114.706130, 35.878712], [-114.731296, 35.945157], [-114.743576, 35.983721], [-114.755618, 36.087166], [-114.744857, 36.098693], [-114.736165, 36.104367], [-114.631716, 36.142306], [-114.572031, 36.151610], [-114.513256, 36.151217], [-114.381446, 36.141665], [-114.365835, 36.133722], [-114.328777, 36.105501], [-114.310857, 36.083787], [-114.307235, 36.076544], [-114.303614, 36.066456], [-114.292663, 36.051118], [-114.263146, 36.025937], [-114.252651, 36.020193], [-114.238799, 36.014561], [-114.233289, 36.014289], [-114.213690, 36.015613], [-114.154130, 36.023862], [-114.148774, 36.027310], [-114.138202, 36.041284], [-114.125796, 36.077531], [-114.120193, 36.102228], [-114.063021, 36.186942], [-114.060302, 36.189363], [-114.046838, 36.194069], [-114.047106, 36.250591], [-114.048515, 36.289598], [-114.046403, 36.371873], [-114.046488, 36.473449], [-114.050562, 36.656259], [-114.050578, 36.800173], [-114.050583, 36.843141], [-114.050600, 37.000396], [-113.965907, 37.000025], [-113.965907, 36.999976], [-112.966471, 37.000219], [-112.899366, 37.000319], [-112.609787, 37.000753], [-112.558974, 37.000692], [-112.545094, 37.000734], [-112.540368, 37.000669], [-112.538593, 37.000674]]]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'GEO_ID': '0400000US05',
        'STATE': '05',
        'NAME': 'Arkansas',
        'LSAD': '',
        'CENSUSAREA': 52035.477000
      },
      'geometry': {
        'type': 'Polygon',
        'coordinates': [[[-94.042964, 33.019219], [-94.043036, 33.079485], [-94.042870, 33.092727], [-94.043007, 33.133890], [-94.043077, 33.138162], [-94.043185, 33.143476], [-94.042875, 33.199785], [-94.042892, 33.202666], [-94.042876, 33.215219], [-94.042730, 33.241823], [-94.043004, 33.250128], [-94.043050, 33.260904], [-94.042990, 33.271227], [-94.042990, 33.271243], [-94.043067, 33.330498], [-94.043067, 33.347351], [-94.043067, 33.352097], [-94.043128, 33.358757], [-94.042869, 33.371170], [-94.043053, 33.377716], [-94.042887, 33.420225], [-94.042988, 33.431024], [-94.042988, 33.435824], [-94.043188, 33.470324], [-94.043279, 33.491030], [-94.043009, 33.493039], [-94.043375, 33.542315], [-94.043428, 33.551425], [-94.043450, 33.552253], [-94.066846, 33.568909], [-94.085243, 33.575546], [-94.181805, 33.593217], [-94.252656, 33.586144], [-94.257801, 33.582508], [-94.355945, 33.543180], [-94.409329, 33.568265], [-94.464336, 33.598819], [-94.470963, 33.605940], [-94.478366, 33.620847], [-94.485875, 33.637867], [-94.485577, 33.653310], [-94.485528, 33.663388], [-94.484520, 33.687909], [-94.484616, 33.691592], [-94.483840, 33.711332], [-94.483874, 33.716733], [-94.482870, 33.750564], [-94.482862, 33.750780], [-94.482777, 33.753638], [-94.482682, 33.756286], [-94.481842, 33.789008], [-94.481543, 33.795719], [-94.481361, 33.802649], [-94.481355, 33.802887], [-94.480574, 33.830166], [-94.479954, 33.851330], [-94.478994, 33.881197], [-94.478842, 33.881485], [-94.477387, 33.937759], [-94.477318, 33.940932], [-94.477038, 33.953838], [-94.476957, 33.957365], [-94.474895, 34.019655], [-94.474896, 34.021838], [-94.474896, 34.021877], [-94.470292, 34.189864], [-94.465847, 34.352073], [-94.465425, 34.359548], [-94.464176, 34.402713], [-94.463816, 34.414465], [-94.463671, 34.419585], [-94.461149, 34.507457], [-94.460058, 34.545264], [-94.460052, 34.547869], [-94.457500, 34.634945], [-94.457530, 34.642961], [-94.454576, 34.728962], [-94.450233, 34.855413], [-94.450140, 34.858694], [-94.450065, 34.861335], [-94.449630, 34.875253], [-94.449058, 34.890556], [-94.449086, 34.894152], [-94.449253, 34.895869], [-94.447889, 34.933941], [-94.441232, 35.119724], [-94.440754, 35.128806], [-94.439550, 35.169037], [-94.439509, 35.171807], [-94.439056, 35.193588], [-94.439084, 35.197298], [-94.438470, 35.208587], [-94.438247, 35.210992], [-94.437774, 35.239271], [-94.437578, 35.242202], [-94.435812, 35.271300], [-94.435706, 35.274267], [-94.435316, 35.275893], [-94.435280, 35.287485], [-94.435170, 35.291494], [-94.434115, 35.306493], [-94.431815, 35.362891], [-94.432685, 35.380806], [-94.433742, 35.386467], [-94.433915, 35.387391], [-94.431215, 35.394290], [-94.431789, 35.397659], [-94.463318, 35.582660], [-94.464097, 35.587265], [-94.464457, 35.588909], [-94.465272, 35.594037], [-94.472647, 35.638556], [-94.487585, 35.726147], [-94.488210, 35.729240], [-94.492932, 35.759166], [-94.493362, 35.761892], [-94.494549, 35.768303], [-94.499045, 35.793460], [-94.499647, 35.796910], [-94.500526, 35.802642], [-94.500764, 35.803820], [-94.501162, 35.806430], [-94.503011, 35.817210], [-94.504438, 35.826369], [-94.505642, 35.833628], [-94.507631, 35.845901], [-94.522658, 35.934250], [-94.522658, 35.934799], [-94.522634, 35.934892], [-94.522910, 35.936127], [-94.524344, 35.944050], [-94.524640, 35.945727], [-94.528162, 35.965665], [-94.528305, 35.966054], [-94.532071, 35.987852], [-94.533646, 35.996804], [-94.534852, 36.002678], [-94.535724, 36.007807], [-94.547715, 36.077271], [-94.547871, 36.078281], [-94.552184, 36.102235], [-94.561165, 36.152110], [-94.562803, 36.161749], [-94.562828, 36.161895], [-94.565655, 36.178439], [-94.566588, 36.183774], [-94.571253, 36.210901], [-94.571806, 36.213748], [-94.574395, 36.229996], [-94.574880, 36.232741], [-94.575071, 36.233682], [-94.576003, 36.240070], [-94.577899, 36.249548], [-94.577883, 36.250080], [-94.586200, 36.299969], [-94.593397, 36.345742], [-94.599723, 36.387587], [-94.601984, 36.402120], [-94.602623, 36.405283], [-94.605408, 36.421949], [-94.611609, 36.461528], [-94.613830, 36.476248], [-94.615311, 36.484992], [-94.617919, 36.499414], [-94.559290, 36.499496], [-94.519478, 36.499214], [-94.111473, 36.498597], [-94.110673, 36.498587], [-94.100252, 36.498670], [-94.098588, 36.498676], [-94.077089, 36.498730], [-93.963920, 36.498717], [-93.959190, 36.498717], [-93.921840, 36.498718], [-93.906128, 36.498718], [-93.866758, 36.498789], [-93.728022, 36.499037], [-93.727552, 36.499055], [-93.718893, 36.499178], [-93.709956, 36.499179], [-93.700171, 36.499135], [-93.584282, 36.498896], [-93.584281, 36.498896], [-93.514512, 36.498881], [-93.507408, 36.498911], [-93.426989, 36.498585], [-93.396079, 36.498669], [-93.394718, 36.498519], [-93.315337, 36.498408], [-93.315324, 36.498408], [-93.296117, 36.498389], [-93.088988, 36.498184], [-93.087635, 36.498239], [-93.069512, 36.498242], [-93.068455, 36.498250], [-93.013742, 36.498130], [-92.894336, 36.497867], [-92.894001, 36.497850], [-92.854049, 36.497983], [-92.838876, 36.498033], [-92.838621, 36.498079], [-92.772341, 36.497772], [-92.772333, 36.497772], [-92.529145, 36.497739], [-92.318415, 36.497711], [-92.309424, 36.497894], [-92.216412, 36.498417], [-92.214143, 36.498372], [-92.211449, 36.498395], [-92.199396, 36.498351], [-92.150295, 36.498634], [-92.137741, 36.498706], [-92.120415, 36.498863], [-92.120306, 36.498864], [-92.098356, 36.498803], [-92.074934, 36.498761], [-92.057178, 36.498670], [-92.055789, 36.498670], [-92.028847, 36.498642], [-92.019375, 36.498524], [-91.988751, 36.498498], [-91.985802, 36.498431], [-91.865995, 36.498783], [-91.864385, 36.498789], [-91.805981, 36.498987], [-91.802040, 36.498963], [-91.799500, 36.498952], [-91.784713, 36.499074], [-91.766111, 36.499114], [-91.726663, 36.499209], [-91.687615, 36.499397], [-91.686026, 36.499374], [-91.672343, 36.499463], [-91.642590, 36.499335], [-91.631439, 36.499198], [-91.601317, 36.499343], [-91.596213, 36.499162], [-91.549163, 36.499161], [-91.539359, 36.499116], [-91.536870, 36.499156], [-91.529774, 36.499022], [-91.450005, 36.497538], [-91.446284, 36.497469], [-91.436502, 36.497377], [-91.433298, 36.497262], [-91.407261, 36.497123], [-91.407137, 36.497112], [-91.405141, 36.497165], [-91.404915, 36.497120], [-91.227398, 36.497617], [-91.218645, 36.497564], [-91.217360, 36.497511], [-91.126529, 36.497712], [-91.096277, 36.497893], [-91.095880, 36.497870], [-91.017974, 36.498062], [-91.008558, 36.498270], [-90.963063, 36.498418], [-90.960648, 36.498426], [-90.879220, 36.498378], [-90.876867, 36.498423], [-90.876567, 36.498313], [-90.873775, 36.498074], [-90.850434, 36.498548], [-90.784398, 36.498524], [-90.782454, 36.498523], [-90.765672, 36.498494], [-90.711226, 36.498318], [-90.693005, 36.498510], [-90.653246, 36.498488], [-90.648494, 36.498447], [-90.612554, 36.498559], [-90.605450, 36.498459], [-90.594300, 36.498459], [-90.585342, 36.498497], [-90.576180, 36.498446], [-90.576112, 36.498446], [-90.500160, 36.498399], [-90.495027, 36.498371], [-90.494575, 36.498368], [-90.339892, 36.498213], [-90.228943, 36.497771], [-90.220732, 36.497858], [-90.220702, 36.497858], [-90.217323, 36.497797], [-90.193943, 36.497823], [-90.152481, 36.497952], [-90.154409, 36.496832], [-90.156369, 36.487748], [-90.133993, 36.437906], [-90.072897, 36.393007], [-90.064514, 36.382085], [-90.063980, 36.303038], [-90.076301, 36.280708], [-90.083731, 36.272332], [-90.114922, 36.265595], [-90.198735, 36.201382], [-90.220425, 36.184764], [-90.319168, 36.089976], [-90.364430, 36.013625], [-90.368718, 35.995812], [-90.342616, 35.995895], [-90.339434, 35.996033], [-90.292376, 35.996397], [-90.288947, 35.996418], [-90.288800, 35.996419], [-90.158812, 35.997375], [-90.127331, 35.997635], [-90.126350, 35.997596], [-89.972563, 35.998994], [-89.965327, 35.998813], [-89.961075, 35.999135], [-89.959893, 35.999020], [-89.959377, 35.999020], [-89.959375, 35.999020], [-89.901183, 35.999365], [-89.896508, 35.999432], [-89.875586, 35.999562], [-89.875085, 35.999578], [-89.874590, 35.999575], [-89.869010, 35.999640], [-89.770255, 36.000524], [-89.769973, 36.000536], [-89.737648, 36.000567], [-89.737564, 36.000522], [-89.733095, 36.000608], [-89.719970, 35.974620], [-89.686924, 35.947716], [-89.687939, 35.905384], [-89.688141, 35.896946], [-89.714934, 35.906247], [-89.733610, 35.904699], [-89.756036, 35.896817], [-89.765689, 35.891299], [-89.771726, 35.879724], [-89.773564, 35.871697], [-89.772467, 35.865098], [-89.769413, 35.861558], [-89.749424, 35.852955], [-89.729517, 35.847632], [-89.709261, 35.838911], [-89.702883, 35.834153], [-89.701045, 35.828227], [-89.703875, 35.820281], [-89.821216, 35.756716], [-89.865631, 35.746577], [-89.889023, 35.750558], [-89.905538, 35.759063], [-89.909996, 35.759396], [-89.950278, 35.738493], [-89.956254, 35.733386], [-89.958882, 35.723834], [-89.955753, 35.690621], [-89.937383, 35.665711], [-89.922749, 35.655293], [-89.906147, 35.651145], [-89.890510, 35.652408], [-89.884932, 35.655107], [-89.909797, 35.537914], [-89.933572, 35.533299], [-89.957347, 35.528683], [-90.017312, 35.555996], [-90.028620, 35.555249], [-90.032938, 35.553440], [-90.039744, 35.548041], [-90.034976, 35.480705], [-90.034014, 35.468821], [-90.047680, 35.459255], [-90.059068, 35.457889], [-90.067798, 35.466224], [-90.072154, 35.470752], [-90.074420, 35.472518], [-90.107723, 35.476935], [-90.152386, 35.436789], [-90.169002, 35.421853], [-90.179265, 35.385194], [-90.178341, 35.382092], [-90.166246, 35.374745], [-90.143633, 35.374745], [-90.135510, 35.376668], [-90.093589, 35.393333], [-90.089612, 35.379842], [-90.086691, 35.369935], [-90.114893, 35.303887], [-90.153394, 35.302588], [-90.158913, 35.300637], [-90.163812, 35.296115], [-90.168871, 35.281997], [-90.166594, 35.274588], [-90.158865, 35.262577], [-90.152094, 35.255989], [-90.140394, 35.252289], [-90.116493, 35.255788], [-90.105093, 35.254288], [-90.097947, 35.249983], [-90.077410, 35.225479], [-90.074262, 35.218316], [-90.073354, 35.211004], [-90.064612, 35.140621], [-90.065392, 35.137691], [-90.083420, 35.121670], [-90.090610, 35.118287], [-90.100593, 35.116691], [-90.109393, 35.118891], [-90.142794, 35.135091], [-90.160058, 35.128830], [-90.174594, 35.116682], [-90.193859, 35.061646], [-90.295596, 35.040093], [-90.309877, 35.009750], [-90.309297, 34.995694], [-90.253969, 34.954988], [-90.244476, 34.937596], [-90.250095, 34.907320], [-90.293918, 34.860563], [-90.307384, 34.846195], [-90.407964, 34.832767], [-90.414864, 34.831846], [-90.423879, 34.834606], [-90.436431, 34.855060], [-90.461451, 34.856728], [-90.473961, 34.852558], [-90.478131, 34.832542], [-90.467289, 34.782502], [-90.479799, 34.769158], [-90.494811, 34.767490], [-90.501325, 34.769931], [-90.519831, 34.782502], [-90.537345, 34.784170], [-90.549855, 34.763320], [-90.554859, 34.727458], [-90.533175, 34.707442], [-90.509823, 34.689928], [-90.508989, 34.679086], [-90.521499, 34.663240], [-90.539013, 34.659070], [-90.549855, 34.662406], [-90.564033, 34.665742], [-90.576543, 34.657402], [-90.575786, 34.641749], [-90.570133, 34.524829], [-90.565809, 34.435400], [-90.575336, 34.415152], [-90.613944, 34.390723], [-90.658542, 34.375705], [-90.764143, 34.363396], [-90.856367, 34.238928], [-90.868775, 34.228245], [-90.894744, 34.229977], [-90.911480, 34.223051], [-90.913212, 34.210355], [-90.895898, 34.191888], [-90.880894, 34.180346], [-90.880317, 34.169381], [-90.893013, 34.155531], [-90.918405, 34.154376], [-90.934564, 34.130138], [-90.933116, 34.124488], [-90.931969, 34.120017], [-90.928793, 34.107631], [-90.912057, 34.095512], [-90.888396, 34.087433], [-90.879163, 34.065503], [-90.887413, 34.032505], [-90.964708, 34.007952], [-91.018890, 34.003151], [-91.089119, 33.972653], [-91.088164, 33.960078], [-91.036821, 33.914656], [-91.067511, 33.840443], [-91.139869, 33.777117], [-91.144682, 33.750108], [-91.136118, 33.728632], [-91.126805, 33.707814], [-91.127900, 33.695762], [-91.132831, 33.688092], [-91.139953, 33.683709], [-91.148170, 33.679327], [-91.176110, 33.684257], [-91.185971, 33.679327], [-91.188710, 33.669466], [-91.193093, 33.656866], [-91.186519, 33.645909], [-91.157484, 33.626187], [-91.130445, 33.606034], [-91.134043, 33.594489], [-91.152148, 33.582721], [-91.224121, 33.567369], [-91.228287, 33.559937], [-91.232295, 33.552788], [-91.215671, 33.529423], [-91.125109, 33.472842], [-91.118495, 33.449116], [-91.131885, 33.430063], [-91.184427, 33.419576], [-91.141216, 33.298397], [-91.110561, 33.245930], [-91.085984, 33.221644], [-91.087589, 33.145177], [-91.125656, 33.038276], [-91.157662, 33.011217], [-91.166073, 33.004106], [-91.265018, 33.005084], [-91.284398, 33.005007], [-91.312016, 33.005262], [-91.322506, 33.005341], [-91.325037, 33.005364], [-91.326396, 33.005376], [-91.329767, 33.005421], [-91.333011, 33.005529], [-91.376016, 33.005794], [-91.425466, 33.006016], [-91.435782, 33.006099], [-91.460370, 33.006246], [-91.559494, 33.006840], [-91.572326, 33.006908], [-91.579639, 33.006472], [-91.579802, 33.006518], [-91.609001, 33.006556], [-91.617615, 33.006717], [-91.626670, 33.006639], [-91.950001, 33.007520], [-91.951958, 33.007428], [-92.069105, 33.008163], [-92.222825, 33.009080], [-92.292664, 33.010103], [-92.335893, 33.010349], [-92.362865, 33.010628], [-92.370290, 33.010717], [-92.469762, 33.012010], [-92.501383, 33.012160], [-92.503776, 33.012161], [-92.711289, 33.014307], [-92.715884, 33.014398], [-92.723553, 33.014328], [-92.724743, 33.014347], [-92.724994, 33.014351], [-92.733197, 33.014347], [-92.830798, 33.015661], [-92.844073, 33.016034], [-92.844286, 33.016070], [-92.854167, 33.016132], [-92.867510, 33.016062], [-92.946553, 33.016807], [-92.971137, 33.017192], [-92.988708, 33.017298], [-93.070686, 33.017792], [-93.073167, 33.017898], [-93.081428, 33.017928], [-93.100981, 33.017786], [-93.101443, 33.017740], [-93.154351, 33.017856], [-93.197402, 33.017951], [-93.238607, 33.017992], [-93.308181, 33.018156], [-93.308398, 33.018179], [-93.340353, 33.018337], [-93.377134, 33.018234], [-93.467042, 33.018611], [-93.489506, 33.018443], [-93.490520, 33.018442], [-93.490893, 33.018442], [-93.520971, 33.018616], [-93.520994, 33.018616], [-93.524916, 33.018637], [-93.531499, 33.018643], [-93.804930, 33.019347], [-93.814553, 33.019372], [-94.024475, 33.019207], [-94.027983, 33.019139], [-94.035839, 33.019145], [-94.041444, 33.019188], [-94.042964, 33.019219]]]
      }
    }
  ];

  var myMap;

  beforeEach(function () {
    imageTest.prepareImageTest();
  });

  afterEach(function () {
    myMap.exit();
  });

  it('choropleth', function (done) {
    var mapOptions = {
      zoom: 4,
      center: {
        y: 33.60,
        x: -95.00
      }
    };
    myMap = common.createOsmMap(mapOptions, {}, true);

    var scalarValues = states
        .map(function (feature, index) {
          return {
            id: feature.properties.GEO_ID,
            value: index
          };
        });

    var layer = myMap.createLayer('feature', {features: ['choropleth']});

    layer.createFeature('choropleth')
         .data(states)
         .scalar(scalarValues)
         .choropleth({});
    myMap.draw();

    imageTest.imageTest('choropleth', null, 0.001, done, myMap.onIdle, 0, 2);
  });
});
