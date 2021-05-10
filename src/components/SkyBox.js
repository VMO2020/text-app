import { useThree } from 'react-three-fiber';
import { CubeTextureLoader } from 'three';

// Loads the skybox texture to be applied to the scene.
export function SkyBox() {
	const { scene } = useThree();
	const loader = new CubeTextureLoader();
	// The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
	const texture = loader.load([
		'/images2/Front.jpg',
		'/images2/Back.jpg',
		'/images2/Up.jpg',
		'/images2/Down.jpg',
		'/images2/Right.jpg',
		'/images2/Left.jpg',
	]);

	// Set the scene background property to the resulting texture.
	scene.background = texture;
	return null;
}
