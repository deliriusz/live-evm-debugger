import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInterfaceType,
    GraphQLInt,
    GraphQLList,
    GraphQLBoolean
} from 'graphql';


const debugTraceBaseFields = {
    processCounter: {type: GraphQLInt},
    operationName: {type: GraphQLString},
    gasLeft: {type: GraphQLInt},
    gasCost: {type: GraphQLInt},
    depth: {type: GraphQLInt},
    stack: {type: new GraphQLList(GraphQLString)},
    memory: {type: new GraphQLList(GraphQLString)}
}

const debugTraceInterfaceType = new GraphQLInterfaceType({
    name: 'DebugTraceInterface',
    fields: debugTraceBaseFields
});

const debugTraceType = new GraphQLObjectType({
    name: 'DebugTrace',
    interfaces: [debugTraceInterfaceType],
    isTypeOf: (source: any) => {console.log(source); return true},
    fields: {
        ...debugTraceBaseFields
    }
})

const callTraceType = new GraphQLObjectType({
    name: 'CallTrace',
    interfaces: [debugTraceInterfaceType],
    isTypeOf: (source: any) => {console.log(source); return true},
    fields: {
        ...debugTraceBaseFields,
        value: { type: GraphQLInt },
        gasPassed: { type: GraphQLInt },
        destinationAddress: { type: GraphQLString },
        rawCalldata: { type: GraphQLString },
        rawReturnData: { type: GraphQLString },
    }
})

const jumpTraceType = new GraphQLObjectType({
    name: 'JumpTrace',
    interfaces: [debugTraceInterfaceType],
    isTypeOf: (source: any) => {console.log(source); return true},
    fields: {
        ...debugTraceBaseFields,
        destinationPC: { type: GraphQLString },
        isEffective: { type: GraphQLBoolean },
    }
})

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQuery',
        fields: {
            debugTrace: {
                type: debugTraceType,
                args: {
                    type: { type: GraphQLString, defaultValue: '' }
                },
                resolve: (_: any, {type}: any)  => {
                    return {
                        processCounter: 1,
                        operationName: 'JUMP',
                        gasLeft: 1230,
                        gasCost : 5,
                        depth: 5,
                        stack: [''],
                        memory: [''],
                    };
                },
            },
        },
    }),
});
