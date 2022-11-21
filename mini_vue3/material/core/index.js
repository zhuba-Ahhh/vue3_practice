import {
  effectWatch
} from './reactivity/index.js';
import {
  mountElement,
  diff
} from './renderer/index.js'

export function createApp(rootComponent) {
  return {
    mount(rootContainer) {
      const context = rootComponent.setup();
      let isMounted = false;
      let prevSubTree;

      // console.log(rootContainer);
      effectWatch(() => {
        rootContainer.innerHTML = ``;
        if (!isMounted) {
          // init
          const subTree = rootComponent.render(context);
          // console.log(subTree);
          mountElement(subTree, rootContainer);
          prevSubTree = subTree;
        } else {
          // update
          const subTree = rootContainer.render(context);
          diff(prevSubTree, subTree);
          prevSubTree = subTree;
        }

        // const element = rootComponent.render(context); // 使用h.js

        // rootContainer.append(element);

        // const subTree = rootComponent.render(context);
        // // console.log(subTree);
        // mountElement(subTree, rootContainer);

        // diff
        // newNode oldNode
        // rootContainer.append(element);
      })
    }
  }
}