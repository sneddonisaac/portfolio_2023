
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sparkles, OrbitControls, PerspectiveCamera, Text3D } from '@react-three/drei';

const SphereComponent: React.FC = () => {
	return (
		  <Canvas id={"sphere-canvas"} style={{ height: '100vh' }}>
		  <Sparkles
		  color="grey"
		  count={500}
		  noise={1}
		  opacity={1}
		  size={0.09837078303098679,4.9938554763793945,0.9619252681732178,4.156472682952881,1.247249722480774,0.8361868858337402,4.622819423675537,0.5525344014167786,1.7084596157073975,1.1410322189331055,0.17890894412994385,0.09343338757753372,2.7728679180145264,0.7528035044670105,0.08819561451673508,4.737834453582764,2.7910842895507812,4.855172157287598,0.8173384666442871,1.3736919164657593,3.6977641582489014,0.7209181189537048,4.716225624084473,0.8447349071502686,0.41971731185913086,1.9086458683013916,2.972444772720337,3.913015842437744,1.868736743927002,4.140961170196533,4.159960746765137,1.341970682144165,3.7744314670562744,2.3528599739074707,1.9697593450546265,1.0412640571594238,1.0540052652359009,4.598093032836914,2.1013519763946533,4.19737434387207,4.660358428955078,1.4386000633239746,0.2731863558292389,0.4798938035964966,2.264317750930786,2.242832899093628,0.521310031414032,2.1496779918670654,2.637857675552368,4.435784339904785,4.106625556945801,2.500274658203125,2.6850712299346924,2.4230148792266846,0.2522212266921997,0.6562067866325378,2.7421305179595947,1.3547694683074951,2.9054291248321533,3.0434253215789795,3.1482598781585693,1.5850063562393188,0.3024333715438843,2.06973934173584,4.925349712371826,4.12275505065918,1.09261155128479,0.6273101568222046,0.01918082870543003,2.324042558670044,3.1250803470611572,1.433812141418457,3.7609589099884033,2.1531271934509277,2.0484421253204346,3.040410041809082,1.3947473764419556,0.5541085004806519,1.6831260919570923,3.622047185897827,0.7405917644500732,1.7904739379882812,2.9629926681518555,1.4641497135162354,4.564165115356445,4.731633186340332,4.483879089355469,2.401582956314087,3.5813422203063965,0.4787938892841339,0.45542043447494507,3.201137065887451,2.2875754833221436,4.491689682006836,0.28083837032318115,2.6428487300872803,2.448411464691162,4.6926589012146,0.10595770925283432,3.328779458999634}
		  scale={10}
		  speed={0.8}
		  />
		  <OrbitControls 
			enableRotate
		  />
		  <Text3D
		  	color="rgb(0,0,0)"
		  	font={"/satoshi_semi_bold.json"}
			position={[-5, 0, -10]}
			textAlign='center'
			anchorX={"center"}
			anchorY={"center"}
		  >
		  	Creative Developer	
		  </Text3D> 
		  {/*<axesHelper />*/}
		  <PerspectiveCamera
		  makeDefault
		  position={[
		  2,
		  2,
		  2
		  ]}
		  />    
			  </Canvas>
			  );
};

export default SphereComponent;
