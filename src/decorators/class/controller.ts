import { BaseContext } from 'koa';

const FUNCTION_KEEP_PROPERTIES = ['length', 'prototype', 'name'];

export function Controller(target: Function) {
    const prototypeProperties: string[] = Object.getOwnPropertyNames(target.prototype);
    // only keep class define property
    const definedProperties: string[] = Object.getOwnPropertyNames(target).filter((propertyName) => {
        return !(prototypeProperties.includes(propertyName) || FUNCTION_KEEP_PROPERTIES.includes(propertyName));
    });
    definedProperties.forEach((propertyName: string) => {
        const property = Object.getOwnPropertyDescriptor(target, propertyName);
        // console.log(propert
    });
}
