import { Router } from 'express';
export const appRouter = Router();
interface IOptions {
  path: string;
  method: 'get' | 'post' | 'put' | 'delete';
}

const RoutesDecorator = (options: IOptions) => {
  return (target: any, propertyKey: string) =>
    (appRouter as any)[options.method](options.path, target[propertyKey]);
};
export default RoutesDecorator;
