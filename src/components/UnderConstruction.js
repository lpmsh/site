import { TypeAnimation } from 'react-type-animation';

export default function UnderConstruction() {
  return (
    <div className='construction'>
        <div style={{ width: '20em' }}>
            <TypeAnimation
                // Same String at the start will only be typed once, initially
                sequence={[
                'Under Construction',
                1000,
                'Under Construction.',
                1000,
                'Under Construction..',
                1000,
                'Under Construction...',
                950,
                ]}
                speed={50} // Custom Speed from 1-99 - Default Speed: 40
                style={{ fontSize: '2em', color: '#FFFFFF' }}

                repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
        </div>
    </div>
  );
};