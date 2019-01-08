import { CHILD_TYPE_INVALID } from 'slate-schema-violations';

export default {
    blocks: {
        ['slider']: {
            nodes: [{
                types: ['slider-item']
            }],
            normalize(change, violation, { node }) {
                console.log('violation:', violation);
                switch (violation) {
                    case CHILD_TYPE_INVALID:
                        return change.removeNodeByKey(node.key);
                    default:
                        return undefined;
                }
            }
        }
    }
};
