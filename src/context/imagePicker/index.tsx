// import React, {createContext, useState, ReactNode} from 'react';

// interface ImageContextType {
//   image: string | null;
//   setImage: React.Dispatch<React.SetStateAction<string | null>>;
// }

// export const ImageContext = createContext<ImageContextType>({
//   image: null,
//   setImage: () => {},
// });

// interface ImageProviderProps {
//   children: ReactNode;
// }

// export const ImageProvider = ({children}: ImageProviderProps) => {
//   const [image, setImage] = useState<string | null>(null);

//   return (
//     <ImageContext.Provider value={{image, setImage}}>
//       {children}
//     </ImageContext.Provider>
//   );
// };

// import React, { createContext, useState, ReactNode } from 'react';

// interface ImageContextType {
//   image: string | null;
//   setImage: React.Dispatch<React.SetStateAction<string | null>>;
// }

// export const ImageContext = createContext<ImageContextType>({
//   image: null,
//   setImage: () => {},
// });

// interface ImageProviderProps {
//   children: ReactNode;
// }

// export const ImageProvider = ({ children }: ImageProviderProps) => {
//   const [image, setImage] = useState<string | null>(null);

//   return (
//     <ImageContext.Provider value={{ image, setImage }}>
//       {children}
//     </ImageContext.Provider>
//   );
// };
import React, { createContext, useState, ReactNode } from 'react';

interface ImageContextType {
  image: string | null;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
}

export const ImageContext = createContext<ImageContextType>({
  image: null,
  setImage: () => {},
});

interface ImageProviderProps {
  children: ReactNode;
}

export const ImageProvider = ({ children }: ImageProviderProps) => {
  const [image, setImage] = useState<string | null>(null);

  return (
    <ImageContext.Provider value={{ image, setImage }}>
      {children}
    </ImageContext.Provider>
  );
};
