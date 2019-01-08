import { PARENT_TYPE_INVALID } from 'slate-schema-violations';

export default {
    blocks: {
        ['slider-item']: {
            parent: {
                types: ['slider']
            },
            normalize(change, violation, { node }) {
                console.log('violation:', violation);
                switch (violation) {
                    case PARENT_TYPE_INVALID:
                        return change.removeNodeByKey(node.key);
                    default:
                        return undefined;
                }
            }
        }
    }
};
