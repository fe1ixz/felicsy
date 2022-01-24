import { PropType } from "./Types";
import { Entity } from "./Entity";

/**
 * Base class for components.
 */

export type ComponentSchemaProp = {
  default?: any;
  type: PropType<any, any>;
};

export type ComponentSchema = {
  [propName: string]: ComponentSchemaProp;
};

export class Component<C> {
  static schema: ComponentSchema;
  static isComponent: true;
  constructor(props?: Partial<Omit<C, keyof Component<any>>> | false);
  copy(source: this): this;
  clone(): this;
  reset(): void;
  dispose(): void;
  getAttachedEntity(): Entity;
}

export interface ComponentConstructor<C extends Component<any>> {
  schema: ComponentSchema;
  isComponent: true;
  new (props?: Partial<Omit<C, keyof Component<any>>> | false): C;
}
