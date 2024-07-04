import { Suspense, FunctionComponent } from 'react';
import Loading from './Loading';


const Loadable = <P extends {}>(Component: FunctionComponent<P>) => {
  const LoadableComponent = (props: P)  => (
    <Suspense fallback={<Loading/>}>
       <Component {...props} />
    </Suspense>
  );

  return LoadableComponent;
};

export default Loadable;