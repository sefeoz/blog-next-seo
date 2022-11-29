export const mdxComponents = {
   p: (props) => <p className="text-white text-lg raleway-semibold" {...props} />,
   strong: (props) => <strong className="raleway-semibold text-gray-400  " {...props} />,
   h2: (props) => <h2 className="text-gray-200 raleway-md" {...props} />,
   h1: (props) => <h1 className="text-gray-100 text-2xl raleway-light" {...props} />,
   h3: (props) => <h3 className="text-gray-300 text-xl raleway-light" {...props} />,
  }