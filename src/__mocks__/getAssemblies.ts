export default {
  data: {
    assemblies: [
      {
        category: 'test',
        conversionFactor: 1,
        description: 'testing',
        gwp: 0,
        id: 'e82ad687-cba4-4671-902c-26c32b1b215c',
        layers: [],
        lifeTime: 50,
        metaFields: {},
        name: 'test',
        unit: 'm2',
        projectId: 'acfa456f-6628-4c0d-a0c8-1a53b1a46785',
        __typename: 'GraphQlAssembly',
      },
      {
        category: 'test2',
        conversionFactor: 1,
        description: 'testing2',
        gwp: 0,
        id: 'e82ad687-cba4-4671-902c-26c32b1b215q',
        layers: [
          {
            conversionFactor: 1,
            conversion: 'm2',
            name: 'test',
            description: 'test-description',
            epdId: 0,
            referenceServiceLife: 50,
            id: 'e82ad687-cba4-4671-902c-26c32b1b215c',
          },
        ],
        lifeTime: 50,
        metaFields: {},
        name: 'test2',
        unit: 'm2',
        projectId: 'acfa456f-6628-4c0d-a0c8-1a53b1a46785',
        __typename: 'GraphQlAssembly',
      },
    ],
  },
}
