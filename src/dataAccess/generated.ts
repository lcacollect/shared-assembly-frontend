import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql'
import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** Represents binary data as Base64-encoded strings, using the standard alphabet. */
  Base64: any
  /** Date (isoformat) */
  Date: any
  /** Date with time (isoformat) */
  DateTime: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
  _FieldSet: any
}

export type AssemblyAddInput = {
  category: Scalars['String']
  conversionFactor?: InputMaybe<Scalars['Float']>
  description?: InputMaybe<Scalars['String']>
  lifeTime?: InputMaybe<Scalars['Float']>
  metaFields?: InputMaybe<Scalars['JSON']>
  name: Scalars['String']
  source?: InputMaybe<Scalars['String']>
  unit: GraphQlAssemblyUnit
}

export type AssemblyFilters = {
  category?: InputMaybe<FilterOptions>
  description?: InputMaybe<FilterOptions>
  id?: InputMaybe<FilterOptions>
  lifeTime?: InputMaybe<FilterOptions>
  name?: InputMaybe<FilterOptions>
  source?: InputMaybe<FilterOptions>
}

export type AssemblyLayerInput = {
  conversionFactor?: InputMaybe<Scalars['Float']>
  description?: InputMaybe<Scalars['String']>
  epdId: Scalars['String']
  id?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  referenceServiceLife?: InputMaybe<Scalars['Int']>
  transportConversionFactor?: InputMaybe<Scalars['Float']>
  transportDistance?: InputMaybe<Scalars['Float']>
  transportEpdId?: InputMaybe<Scalars['String']>
}

export type AssemblyLayerUpdateInput = {
  conversionFactor?: InputMaybe<Scalars['Float']>
  description?: InputMaybe<Scalars['String']>
  epdId: Scalars['String']
  id: Scalars['String']
  name?: InputMaybe<Scalars['String']>
  referenceServiceLife?: InputMaybe<Scalars['Int']>
  transportConversionFactor?: InputMaybe<Scalars['Float']>
  transportDistance?: InputMaybe<Scalars['Float']>
  transportEpdId?: InputMaybe<Scalars['String']>
}

export type AssemblyUpdateInput = {
  category?: InputMaybe<Scalars['String']>
  conversionFactor?: InputMaybe<Scalars['Float']>
  description?: InputMaybe<Scalars['String']>
  id: Scalars['String']
  lifeTime?: InputMaybe<Scalars['Float']>
  metaFields?: InputMaybe<Scalars['JSON']>
  name?: InputMaybe<Scalars['String']>
  source?: InputMaybe<Scalars['String']>
  unit?: InputMaybe<GraphQlAssemblyUnit>
}

export enum AssigneeType {
  ProjectGroup = 'PROJECT_GROUP',
  ProjectMember = 'PROJECT_MEMBER',
  User = 'USER',
}

export type CommentFilters = {
  added?: InputMaybe<FilterOptions>
  id?: InputMaybe<FilterOptions>
  text?: InputMaybe<FilterOptions>
}

export type CommitFilters = {
  added?: InputMaybe<FilterOptions>
  id?: InputMaybe<FilterOptions>
  shortId?: InputMaybe<FilterOptions>
}

export type EpdFilters = {
  category?: InputMaybe<FilterOptions>
  id?: InputMaybe<FilterOptions>
  isTransport?: InputMaybe<FilterOptions>
  name?: InputMaybe<FilterOptions>
  owner?: InputMaybe<FilterOptions>
  region?: InputMaybe<FilterOptions>
  source?: InputMaybe<FilterOptions>
  type?: InputMaybe<FilterOptions>
  unit?: InputMaybe<FilterOptions>
}

export type EpdSort = {
  category?: InputMaybe<SortOptions>
  isTransport?: InputMaybe<SortOptions>
  name?: InputMaybe<SortOptions>
  owner?: InputMaybe<SortOptions>
  region?: InputMaybe<SortOptions>
  source?: InputMaybe<SortOptions>
  type?: InputMaybe<SortOptions>
  unit?: InputMaybe<SortOptions>
}

export type FilterOptions = {
  contains?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  equal?: InputMaybe<Scalars['String']>
  isAnyOf?: InputMaybe<Array<Scalars['String']>>
  isEmpty?: InputMaybe<Scalars['Boolean']>
  isNotEmpty?: InputMaybe<Scalars['Boolean']>
  isTrue?: InputMaybe<Scalars['Boolean']>
  jsonContains?: InputMaybe<Scalars['String']>
  startsWith?: InputMaybe<Scalars['String']>
}

export type GraphQlAddEpdInput = {
  ap?: InputMaybe<Scalars['JSON']>
  comment?: InputMaybe<Scalars['String']>
  conversions?: InputMaybe<Scalars['JSON']>
  declaredUnit: GraphQlUnit
  ep?: InputMaybe<Scalars['JSON']>
  gwp?: InputMaybe<Scalars['JSON']>
  id?: InputMaybe<Scalars['String']>
  location: Scalars['String']
  metaData?: InputMaybe<Scalars['JSON']>
  name: Scalars['String']
  odp?: InputMaybe<Scalars['JSON']>
  penre?: InputMaybe<Scalars['JSON']>
  pere?: InputMaybe<Scalars['JSON']>
  pocp?: InputMaybe<Scalars['JSON']>
  publishedDate: Scalars['Date']
  referenceServiceLife?: InputMaybe<Scalars['Int']>
  source: Scalars['JSON']
  subtype: Scalars['String']
  validUntil: Scalars['Date']
  version: Scalars['String']
}

export type GraphQlAddSiteInput = {
  defaultValues?: InputMaybe<Scalars['JSON']>
  description: Scalars['String']
  domainName: Scalars['String']
  logoUrl: Scalars['String']
  metaFields?: InputMaybe<Scalars['JSON']>
  name: Scalars['String']
  projectStages?: InputMaybe<Array<Scalars['String']>>
  url: Scalars['String']
}

export type GraphQlAssembly = {
  __typename?: 'GraphQLAssembly'
  category: Scalars['String']
  conversionFactor: Scalars['Float']
  description?: Maybe<Scalars['String']>
  gwp: Scalars['Float']
  id: Scalars['String']
  layers: Array<Maybe<GraphQlAssemblyLayer>>
  lifeTime: Scalars['Float']
  metaFields?: Maybe<Scalars['JSON']>
  name: Scalars['String']
  source: Scalars['String']
  unit: GraphQlAssemblyUnit
}

export type GraphQlAssemblyGwpArgs = {
  phases?: InputMaybe<Array<Scalars['String']>>
}

export type GraphQlAssemblyLayer = {
  __typename?: 'GraphQLAssemblyLayer'
  conversionFactor?: Maybe<Scalars['Float']>
  description?: Maybe<Scalars['String']>
  epd: GraphQlProjectEpd
  epdId: Scalars['String']
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  referenceServiceLife?: Maybe<Scalars['Int']>
  transportConversionFactor: Scalars['Float']
  transportDistance?: Maybe<Scalars['Float']>
  transportEpd?: Maybe<GraphQlProjectEpd>
}

export enum GraphQlAssemblyUnit {
  Kg = 'kg',
  M = 'm',
  M2 = 'm2',
  M3 = 'm3',
  Pcs = 'pcs',
}

export type GraphQlAssignee = {
  id: Scalars['String']
  type: AssigneeType
}

export type GraphQlComment = {
  __typename?: 'GraphQLComment'
  added: Scalars['DateTime']
  author?: Maybe<GraphQlProjectMember>
  authorId: Scalars['String']
  id: Scalars['ID']
  task: GraphQlTask
  text: Scalars['String']
}

export type GraphQlCommit = {
  __typename?: 'GraphQLCommit'
  added: Scalars['Date']
  authorId?: Maybe<Scalars['String']>
  id: Scalars['String']
  parentId?: Maybe<Scalars['String']>
  reportingSchemaId: Scalars['String']
  repositoryId: Scalars['String']
  schemaCategories?: Maybe<Array<GraphQlSchemaCategory>>
  schemaElements?: Maybe<Array<GraphQlSchemaElement>>
  shortId: Scalars['String']
  tags?: Maybe<Array<GraphQlTag>>
  tasks?: Maybe<Array<GraphQlTask>>
}

export type GraphQlConversion = {
  __typename?: 'GraphQLConversion'
  to: GraphQlUnit
  value: Scalars['Float']
}

export type GraphQlepd = {
  __typename?: 'GraphQLEPD'
  ap?: Maybe<GraphQlImpactCategories>
  comment?: Maybe<Scalars['String']>
  conversions: Array<GraphQlConversion>
  declaredUnit?: Maybe<Scalars['String']>
  ep?: Maybe<GraphQlImpactCategories>
  gwp?: Maybe<GraphQlImpactCategories>
  id: Scalars['String']
  isTransport: Scalars['Boolean']
  location: Scalars['String']
  metaFields?: Maybe<Scalars['JSON']>
  name: Scalars['String']
  odp?: Maybe<GraphQlImpactCategories>
  originId?: Maybe<Scalars['String']>
  penre?: Maybe<GraphQlImpactCategories>
  pere?: Maybe<GraphQlImpactCategories>
  pocp?: Maybe<GraphQlImpactCategories>
  publishedDate: Scalars['Date']
  referenceServiceLife?: Maybe<Scalars['Int']>
  source: Scalars['String']
  subtype: Scalars['String']
  validUntil: Scalars['Date']
  version: Scalars['String']
}

export type GraphQlepdBase = {
  __typename?: 'GraphQLEPDBase'
  ap?: Maybe<GraphQlImpactCategories>
  comment?: Maybe<Scalars['String']>
  conversions: Array<GraphQlConversion>
  declaredUnit?: Maybe<Scalars['String']>
  ep?: Maybe<GraphQlImpactCategories>
  gwp?: Maybe<GraphQlImpactCategories>
  id: Scalars['String']
  isTransport: Scalars['Boolean']
  location: Scalars['String']
  metaFields?: Maybe<Scalars['JSON']>
  name: Scalars['String']
  odp?: Maybe<GraphQlImpactCategories>
  penre?: Maybe<GraphQlImpactCategories>
  pere?: Maybe<GraphQlImpactCategories>
  pocp?: Maybe<GraphQlImpactCategories>
  publishedDate: Scalars['Date']
  referenceServiceLife?: Maybe<Scalars['Int']>
  source: Scalars['String']
  subtype: Scalars['String']
  validUntil: Scalars['Date']
  version: Scalars['String']
}

export type GraphQlepdConnection = {
  __typename?: 'GraphQLEPDConnection'
  edges: Array<GraphQlepdEdge>
  numEdges: Scalars['Int']
  pageInfo: PageInfo
}

export type GraphQlepdEdge = {
  __typename?: 'GraphQLEPDEdge'
  cursor: Scalars['String']
  node: GraphQlepd
}

export type GraphQlImpactCategories = {
  __typename?: 'GraphQLImpactCategories'
  a1a3?: Maybe<Scalars['Float']>
  a4?: Maybe<Scalars['Float']>
  a5?: Maybe<Scalars['Float']>
  b1?: Maybe<Scalars['Float']>
  b2?: Maybe<Scalars['Float']>
  b3?: Maybe<Scalars['Float']>
  b4?: Maybe<Scalars['Float']>
  b5?: Maybe<Scalars['Float']>
  b6?: Maybe<Scalars['Float']>
  b7?: Maybe<Scalars['Float']>
  c1?: Maybe<Scalars['Float']>
  c2?: Maybe<Scalars['Float']>
  c3?: Maybe<Scalars['Float']>
  c4?: Maybe<Scalars['Float']>
  d?: Maybe<Scalars['Float']>
}

export type GraphQlLifeCycleStage = {
  __typename?: 'GraphQLLifeCycleStage'
  category: Scalars['String']
  id: Scalars['String']
  name: Scalars['String']
  phase: Scalars['String']
}

export type GraphQlProject = {
  __typename?: 'GraphQLProject'
  address?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  client?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  domain?: Maybe<ProjectDomain>
  groups?: Maybe<Array<GraphQlProjectGroup>>
  id: Scalars['String']
  imageUrl?: Maybe<Scalars['String']>
  members?: Maybe<Array<GraphQlProjectMember>>
  metaFields?: Maybe<Scalars['JSON']>
  name: Scalars['String']
  projectId?: Maybe<Scalars['ID']>
  public: Scalars['Boolean']
  stages?: Maybe<Array<GraphQlProjectStage>>
}

export type GraphQlProjectAssembly = {
  __typename?: 'GraphQLProjectAssembly'
  category: Scalars['String']
  conversionFactor: Scalars['Float']
  description?: Maybe<Scalars['String']>
  gwp: Scalars['Float']
  id: Scalars['String']
  layers: Array<GraphQlAssemblyLayer>
  lifeTime: Scalars['Float']
  metaFields?: Maybe<Scalars['JSON']>
  name: Scalars['String']
  projectId: Scalars['String']
  unit: GraphQlAssemblyUnit
}

export type GraphQlProjectAssemblyGwpArgs = {
  phases?: InputMaybe<Array<Scalars['String']>>
}

export type GraphQlProjectEpd = {
  __typename?: 'GraphQLProjectEPD'
  ap?: Maybe<GraphQlImpactCategories>
  assemblies?: Maybe<Array<GraphQlProjectAssembly>>
  comment?: Maybe<Scalars['String']>
  conversions: Array<GraphQlConversion>
  declaredUnit?: Maybe<Scalars['String']>
  ep?: Maybe<GraphQlImpactCategories>
  gwp?: Maybe<GraphQlImpactCategories>
  id: Scalars['String']
  isTransport: Scalars['Boolean']
  location: Scalars['String']
  metaFields?: Maybe<Scalars['JSON']>
  name: Scalars['String']
  odp?: Maybe<GraphQlImpactCategories>
  originId: Scalars['String']
  penre?: Maybe<GraphQlImpactCategories>
  pere?: Maybe<GraphQlImpactCategories>
  pocp?: Maybe<GraphQlImpactCategories>
  projectId: Scalars['ID']
  publishedDate: Scalars['Date']
  referenceServiceLife?: Maybe<Scalars['Int']>
  source: Scalars['String']
  subtype: Scalars['String']
  validUntil: Scalars['Date']
  version: Scalars['String']
}

export type GraphQlProjectGroup = {
  __typename?: 'GraphQLProjectGroup'
  id: Scalars['ID']
  lead?: Maybe<GraphQlProjectMember>
  leadId?: Maybe<Scalars['String']>
  members?: Maybe<Array<GraphQlProjectMember>>
  name: Scalars['String']
  projectId: Scalars['String']
}

export type GraphQlProjectMember = {
  __typename?: 'GraphQLProjectMember'
  company?: Maybe<Scalars['String']>
  email: Scalars['String']
  id: Scalars['ID']
  lastLogin?: Maybe<Scalars['Date']>
  leaderOf?: Maybe<Array<GraphQlProjectGroup>>
  name: Scalars['String']
  projectGroups?: Maybe<Array<GraphQlProjectGroup>>
  projectId: Scalars['ID']
  userId: Scalars['String']
}

export type GraphQlProjectMemberGraphQlProjectGroup = GraphQlProjectGroup | GraphQlProjectMember

export type GraphQlProjectSource = {
  __typename?: 'GraphQLProjectSource'
  author: GraphQlProjectMember
  authorId: Scalars['String']
  data?: Maybe<GraphQlSourceFile>
  dataId: Scalars['String']
  elements?: Maybe<Array<GraphQlSchemaElement>>
  fileUrl?: Maybe<Scalars['String']>
  id: Scalars['ID']
  interpretation: Scalars['JSON']
  metaFields: Scalars['JSON']
  name: Scalars['String']
  projectId: Scalars['String']
  type: ProjectSourceType
  updated: Scalars['DateTime']
}

export type GraphQlProjectStage = {
  __typename?: 'GraphQLProjectStage'
  category: Scalars['String']
  name: Scalars['String']
  phase: Scalars['String']
  projectId: Scalars['String']
  stageId: Scalars['String']
}

export type GraphQlReportingCreationSchema = {
  __typename?: 'GraphQLReportingCreationSchema'
  id: Scalars['String']
  name: Scalars['String']
  projectId?: Maybe<Scalars['String']>
}

export type GraphQlReportingSchema = {
  __typename?: 'GraphQLReportingSchema'
  categories?: Maybe<Array<GraphQlSchemaCategory>>
  id: Scalars['String']
  name: Scalars['String']
  projectId: Scalars['String']
  templateId?: Maybe<Scalars['String']>
}

export type GraphQlSchemaCategory = {
  __typename?: 'GraphQLSchemaCategory'
  commits?: Maybe<Array<GraphQlCommit>>
  depth: Scalars['Int']
  description?: Maybe<Scalars['String']>
  elements?: Maybe<Array<GraphQlSchemaElement>>
  id: Scalars['ID']
  name: Scalars['String']
  path: Scalars['String']
  reportingSchema: GraphQlReportingSchema
  reportingSchemaId?: Maybe<Scalars['String']>
}

export type GraphQlSchemaElement = {
  __typename?: 'GraphQLSchemaElement'
  assembly?: Maybe<GraphQlProjectAssembly>
  assemblyId?: Maybe<Scalars['String']>
  commits: Array<GraphQlCommit>
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name: Scalars['String']
  quantity: Scalars['Float']
  result?: Maybe<Scalars['JSON']>
  schemaCategory: GraphQlSchemaCategory
  source?: Maybe<GraphQlProjectSource>
  unit: Unit
}

export type GraphQlSchemaElementGraphQlSchemaCategory = GraphQlSchemaCategory | GraphQlSchemaElement

export type GraphQlSchemaTemplate = {
  __typename?: 'GraphQLSchemaTemplate'
  id: Scalars['String']
  name: Scalars['String']
  schema?: Maybe<GraphQlReportingSchema>
}

export type GraphQlSite = {
  __typename?: 'GraphQLSite'
  defaultValues?: Maybe<Scalars['JSON']>
  description: Scalars['String']
  domainName: Scalars['String']
  id: Scalars['ID']
  logoUrl: Scalars['String']
  metaFields?: Maybe<Scalars['JSON']>
  name: Scalars['String']
  projectStages: Array<Scalars['String']>
  url: Scalars['String']
}

export type GraphQlSourceFile = {
  __typename?: 'GraphQLSourceFile'
  headers: Array<Scalars['String']>
  rows: Scalars['JSON']
}

export type GraphQlTag = {
  __typename?: 'GraphQLTag'
  added: Scalars['Date']
  authorId: Scalars['String']
  commit: GraphQlCommit
  commitId: Scalars['String']
  id: Scalars['String']
  name: Scalars['String']
  shortId: Scalars['String']
}

export type GraphQlTask = {
  __typename?: 'GraphQLTask'
  assignedGroupId?: Maybe<Scalars['String']>
  assignee: GraphQlProjectMemberGraphQlProjectGroup
  assigneeId?: Maybe<Scalars['String']>
  author: GraphQlProjectMember
  authorId: Scalars['String']
  comments?: Maybe<Array<GraphQlComment>>
  commits: Array<GraphQlCommit>
  description: Scalars['String']
  dueDate: Scalars['Date']
  id: Scalars['ID']
  item: GraphQlSchemaElementGraphQlSchemaCategory
  name: Scalars['String']
  reportingSchema: GraphQlReportingSchema
  reportingSchemaId: Scalars['String']
  status: TaskStatus
}

export type GraphQlTypeCodeElement = {
  __typename?: 'GraphQLTypeCodeElement'
  code: Scalars['String']
  id: Scalars['String']
  level: Scalars['Int']
  name: Scalars['String']
}

export enum GraphQlUnit {
  Kg = 'KG',
  L = 'L',
  M = 'M',
  M2 = 'M2',
  M2R1 = 'M2R1',
  M3 = 'M3',
  Pcs = 'PCS',
  Tones = 'TONES',
  Unknown = 'UNKNOWN',
}

export type GraphQlUpdateSiteInput = {
  defaultValues?: InputMaybe<Scalars['JSON']>
  description?: InputMaybe<Scalars['String']>
  domainName?: InputMaybe<Scalars['String']>
  id: Scalars['ID']
  logoUrl?: InputMaybe<Scalars['String']>
  metaFields?: InputMaybe<Scalars['JSON']>
  name?: InputMaybe<Scalars['String']>
  projectStages?: InputMaybe<Array<Scalars['String']>>
  url?: InputMaybe<Scalars['String']>
}

export type GraphQlUserAccount = {
  __typename?: 'GraphQLUserAccount'
  blobSasToken: Scalars['String']
  email: Scalars['String']
  id: Scalars['String']
  name: Scalars['String']
  roles: Array<Scalars['String']>
  tenantId: Scalars['String']
}

export type LifeCycleStageInput = {
  stageId: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  /** Add Assemblies */
  addAssemblies: Array<GraphQlAssembly>
  /** Add layers to an Assembly */
  addAssemblyLayers: Array<GraphQlAssemblyLayer>
  /** Add a comment to a task */
  addComment: GraphQlComment
  /** Add Global EPDs. */
  addEpds: Array<GraphQlepd>
  /** Add a Project */
  addProject: GraphQlProject
  /** Add Project Assemblies */
  addProjectAssemblies: Array<GraphQlProjectAssembly>
  /** Add Project Assemblies from Assemblies */
  addProjectAssembliesFromAssemblies: Array<GraphQlProjectAssembly>
  /** Add layers to an Assembly */
  addProjectAssemblyLayers: Array<GraphQlAssemblyLayer>
  /** Add Global EPDs to a project. */
  addProjectEpds: Array<GraphQlProjectEpd>
  /** Add a Project Group */
  addProjectGroup: GraphQlProjectGroup
  /** Add a Project Member */
  addProjectMember: GraphQlProjectMember
  /** Add Project Members to an existing Project Group */
  addProjectMembersToGroup: GraphQlProjectGroup
  /** Add a Project Source */
  addProjectSource: GraphQlProjectSource
  /** Add a life cycle stage to a project */
  addProjectStage: GraphQlProjectStage
  /**
   * Add a Reporting Schema to a project.
   * Concurrently updates the Schema Template to
   * hold the Reporting Schema.
   */
  addReportingSchema: GraphQlReportingCreationSchema
  /**
   * Add a Reporting Schema to a project.
   * Concurrently updates the Schema Template to
   * hold the Reporting Schema.
   */
  addReportingSchemaFromTemplate: GraphQlReportingCreationSchema
  /** Add a Schema Category to a Reporting Schema */
  addSchemaCategory: GraphQlSchemaCategory
  /** Add a Schema Element to a Schema Category */
  addSchemaElement: GraphQlSchemaElement
  /** Add a Schema Element to a Schema Category */
  addSchemaElementFromSource: Array<GraphQlSchemaElement>
  /** Add a Schema Template */
  addSchemaTemplate: GraphQlSchemaTemplate
  /** Creates a new Item */
  addSites: Array<GraphQlSite>
  /** Add a Task to a Reporting Schema */
  addTask: GraphQlTask
  /** Add a new tag. */
  createTag: GraphQlTag
  /** Add a new typeCodeElement */
  createTypeCodeElement: GraphQlTypeCodeElement
  /** Add a new typeCodeElement from csv file */
  createTypeCodeElementFromSource: GraphQlTypeCodeElement
  /** Delete Assemblies */
  deleteAssemblies: Array<Scalars['ID']>
  /** Delete layers from an Assembly */
  deleteAssemblyLayers: Array<Scalars['String']>
  /** Delete a comment */
  deleteComment: Scalars['String']
  /** Delete a global EPD */
  deleteEpds: Array<Scalars['String']>
  /** Delete a project */
  deleteProject: Scalars['String']
  /** Delete Project Assemblies */
  deleteProjectAssemblies: Array<Scalars['ID']>
  /** Delete layers from an Assembly */
  deleteProjectAssemblyLayers: Array<Scalars['String']>
  /** Delete a project EPD */
  deleteProjectEpds: Array<Scalars['String']>
  /** Delete a project group */
  deleteProjectGroup: Scalars['String']
  /** Delete a Project Member */
  deleteProjectMember: Scalars['String']
  /** Delete a project source */
  deleteProjectSource: Scalars['String']
  /** Remove a life cycle stage from a project */
  deleteProjectStage: Scalars['String']
  /** Delete a Reporting Schema */
  deleteReportingSchema: Scalars['String']
  /** Delete a Schema Category */
  deleteSchemaCategory: Scalars['String']
  /** Delete a Schema Element */
  deleteSchemaElement: Scalars['String']
  /** Delete a Schema Template */
  deleteSchemaTemplate: Scalars['String']
  /** Creates a new Item */
  deleteSites: Array<Scalars['String']>
  /** Delete a tag */
  deleteTag: Scalars['String']
  /** Delete a Task */
  deleteTask: Scalars['String']
  /** Delete a TypeCodeElement */
  deleteTypeCodeElement: Scalars['String']
  /** Remove Project Members from an existing Project Group */
  removeProjectMembersFromGroup: GraphQlProjectGroup
  /** Update Assemblies */
  updateAssemblies: Array<GraphQlAssembly>
  updateAssemblyLayers: Array<GraphQlAssemblyLayer>
  /** Update a task comment */
  updateComment: GraphQlComment
  /** Update a Project */
  updateProject: GraphQlProject
  /** Update Project Assemblies */
  updateProjectAssemblies: Array<GraphQlProjectAssembly>
  updateProjectAssemblyLayers: Array<GraphQlAssemblyLayer>
  /** Update a Project Group */
  updateProjectGroup: GraphQlProjectGroup
  /** Update a Project Source */
  updateProjectSource: GraphQlProjectSource
  /** Update a Reporting Schema */
  updateReportingSchema: GraphQlReportingSchema
  /** Update a Schema Category */
  updateSchemaCategory: GraphQlSchemaCategory
  /** Update Schema Elements */
  updateSchemaElements: Array<GraphQlSchemaElement>
  /** Update a Schema Template */
  updateSchemaTemplate: GraphQlSchemaTemplate
  /** Updates existing Sites */
  updateSites: Array<GraphQlSite>
  /** Change the name of the tag or move it to a different commit. */
  updateTag: GraphQlTag
  /** Update a Task */
  updateTask: GraphQlTask
  /** update typeCodeElement */
  updateTypeCodeElement: GraphQlTypeCodeElement
}

export type MutationAddAssembliesArgs = {
  assemblies: Array<AssemblyAddInput>
}

export type MutationAddAssemblyLayersArgs = {
  id: Scalars['ID']
  layers: Array<AssemblyLayerInput>
}

export type MutationAddCommentArgs = {
  taskId: Scalars['String']
  text: Scalars['String']
}

export type MutationAddEpdsArgs = {
  epds: Array<GraphQlAddEpdInput>
}

export type MutationAddProjectArgs = {
  address?: InputMaybe<Scalars['String']>
  city?: InputMaybe<Scalars['String']>
  client?: InputMaybe<Scalars['String']>
  country?: InputMaybe<Scalars['String']>
  domain?: InputMaybe<ProjectDomain>
  file?: InputMaybe<Scalars['String']>
  groups?: InputMaybe<Array<ProjectGroupInput>>
  members?: InputMaybe<Array<ProjectMemberInput>>
  metaFields?: InputMaybe<Scalars['JSON']>
  name: Scalars['String']
  projectId?: InputMaybe<Scalars['String']>
  public?: InputMaybe<Scalars['Boolean']>
  stages?: InputMaybe<Array<LifeCycleStageInput>>
}

export type MutationAddProjectAssembliesArgs = {
  assemblies: Array<ProjectAssemblyAddInput>
}

export type MutationAddProjectAssembliesFromAssembliesArgs = {
  assemblies: Array<Scalars['ID']>
  projectId: Scalars['ID']
}

export type MutationAddProjectAssemblyLayersArgs = {
  id: Scalars['ID']
  layers: Array<AssemblyLayerInput>
}

export type MutationAddProjectEpdsArgs = {
  epdIds: Array<Scalars['String']>
  projectId: Scalars['String']
}

export type MutationAddProjectGroupArgs = {
  leadId?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  projectId: Scalars['String']
}

export type MutationAddProjectMemberArgs = {
  email: Scalars['String']
  name: Scalars['String']
  projectGroupIds: Array<Scalars['String']>
  projectId: Scalars['String']
}

export type MutationAddProjectMembersToGroupArgs = {
  groupId: Scalars['String']
  memberIds: Array<Scalars['String']>
}

export type MutationAddProjectSourceArgs = {
  dataId?: InputMaybe<Scalars['String']>
  file?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  projectId: Scalars['String']
  speckleUrl?: InputMaybe<Scalars['String']>
  type: ProjectSourceType
}

export type MutationAddProjectStageArgs = {
  projectId: Scalars['String']
  stageId: Scalars['String']
}

export type MutationAddReportingSchemaArgs = {
  name?: InputMaybe<Scalars['String']>
  projectId: Scalars['String']
  templateId: Scalars['String']
}

export type MutationAddReportingSchemaFromTemplateArgs = {
  name?: InputMaybe<Scalars['String']>
  projectId: Scalars['String']
  templateId: Scalars['String']
}

export type MutationAddSchemaCategoryArgs = {
  description?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  path?: InputMaybe<Scalars['String']>
  reportingSchemaId: Scalars['String']
}

export type MutationAddSchemaElementArgs = {
  assemblyId?: InputMaybe<Scalars['String']>
  description: Scalars['String']
  name: Scalars['String']
  quantity: Scalars['Float']
  schemaCategoryId: Scalars['String']
  unit: Unit
}

export type MutationAddSchemaElementFromSourceArgs = {
  objectIds: Array<Scalars['String']>
  quantities?: InputMaybe<Array<Scalars['Float']>>
  schemaCategoryIds: Array<Scalars['String']>
  sourceId: Scalars['String']
  units?: InputMaybe<Array<Unit>>
}

export type MutationAddSchemaTemplateArgs = {
  name: Scalars['String']
}

export type MutationAddSitesArgs = {
  sites: Array<GraphQlAddSiteInput>
}

export type MutationAddTaskArgs = {
  assignee?: InputMaybe<GraphQlAssignee>
  description: Scalars['String']
  dueDate: Scalars['Date']
  item: TaskItem
  name: Scalars['String']
  reportingSchemaId: Scalars['String']
  status: TaskStatus
}

export type MutationCreateTagArgs = {
  commitId: Scalars['String']
  name: Scalars['String']
}

export type MutationCreateTypeCodeElementArgs = {
  code: Scalars['String']
  level: Scalars['Int']
  name: Scalars['String']
}

export type MutationCreateTypeCodeElementFromSourceArgs = {
  file: Scalars['String']
}

export type MutationDeleteAssembliesArgs = {
  ids: Array<Scalars['ID']>
}

export type MutationDeleteAssemblyLayersArgs = {
  id: Scalars['ID']
  layers: Array<Scalars['ID']>
}

export type MutationDeleteCommentArgs = {
  id: Scalars['String']
}

export type MutationDeleteEpdsArgs = {
  ids: Array<Scalars['String']>
}

export type MutationDeleteProjectArgs = {
  id: Scalars['String']
}

export type MutationDeleteProjectAssembliesArgs = {
  ids: Array<Scalars['ID']>
}

export type MutationDeleteProjectAssemblyLayersArgs = {
  id: Scalars['ID']
  layers: Array<Scalars['ID']>
}

export type MutationDeleteProjectEpdsArgs = {
  ids: Array<Scalars['String']>
}

export type MutationDeleteProjectGroupArgs = {
  id: Scalars['String']
}

export type MutationDeleteProjectMemberArgs = {
  id: Scalars['String']
}

export type MutationDeleteProjectSourceArgs = {
  id: Scalars['String']
}

export type MutationDeleteProjectStageArgs = {
  projectId: Scalars['String']
  stageId: Scalars['String']
}

export type MutationDeleteReportingSchemaArgs = {
  id: Scalars['String']
}

export type MutationDeleteSchemaCategoryArgs = {
  id: Scalars['String']
}

export type MutationDeleteSchemaElementArgs = {
  id: Scalars['String']
}

export type MutationDeleteSchemaTemplateArgs = {
  id: Scalars['String']
}

export type MutationDeleteSitesArgs = {
  ids: Array<Scalars['String']>
}

export type MutationDeleteTagArgs = {
  id: Scalars['String']
}

export type MutationDeleteTaskArgs = {
  id: Scalars['String']
}

export type MutationDeleteTypeCodeElementArgs = {
  id: Scalars['String']
}

export type MutationRemoveProjectMembersFromGroupArgs = {
  groupId: Scalars['String']
  memberIds: Array<Scalars['String']>
}

export type MutationUpdateAssembliesArgs = {
  assemblies: Array<AssemblyUpdateInput>
}

export type MutationUpdateAssemblyLayersArgs = {
  id: Scalars['ID']
  layers: Array<AssemblyLayerUpdateInput>
}

export type MutationUpdateCommentArgs = {
  id: Scalars['String']
  text: Scalars['String']
}

export type MutationUpdateProjectArgs = {
  address?: InputMaybe<Scalars['String']>
  city?: InputMaybe<Scalars['String']>
  client?: InputMaybe<Scalars['String']>
  country?: InputMaybe<Scalars['String']>
  domain?: InputMaybe<ProjectDomain>
  file?: InputMaybe<Scalars['String']>
  id: Scalars['String']
  metaFields?: InputMaybe<Scalars['JSON']>
  name?: InputMaybe<Scalars['String']>
  projectId?: InputMaybe<Scalars['String']>
  public?: InputMaybe<Scalars['Boolean']>
}

export type MutationUpdateProjectAssembliesArgs = {
  assemblies: Array<ProjectAssemblyUpdateInput>
}

export type MutationUpdateProjectAssemblyLayersArgs = {
  id: Scalars['ID']
  layers: Array<AssemblyLayerUpdateInput>
}

export type MutationUpdateProjectGroupArgs = {
  id: Scalars['String']
  leadId?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}

export type MutationUpdateProjectSourceArgs = {
  dataId?: InputMaybe<Scalars['String']>
  file?: InputMaybe<Scalars['String']>
  id: Scalars['String']
  interpretation?: InputMaybe<Scalars['JSON']>
  metaFields?: InputMaybe<Scalars['JSON']>
  name?: InputMaybe<Scalars['String']>
  speckleUrl?: InputMaybe<Scalars['String']>
  type?: InputMaybe<ProjectSourceType>
}

export type MutationUpdateReportingSchemaArgs = {
  id: Scalars['String']
  name?: InputMaybe<Scalars['String']>
  projectId?: InputMaybe<Scalars['String']>
}

export type MutationUpdateSchemaCategoryArgs = {
  description?: InputMaybe<Scalars['String']>
  id: Scalars['String']
  name?: InputMaybe<Scalars['String']>
  path?: InputMaybe<Scalars['String']>
}

export type MutationUpdateSchemaElementsArgs = {
  schemaElements: Array<SchemaElementUpdateInput>
}

export type MutationUpdateSchemaTemplateArgs = {
  id: Scalars['String']
  name?: InputMaybe<Scalars['String']>
}

export type MutationUpdateSitesArgs = {
  sites: Array<GraphQlUpdateSiteInput>
}

export type MutationUpdateTagArgs = {
  commitId?: InputMaybe<Scalars['String']>
  id: Scalars['String']
  name?: InputMaybe<Scalars['String']>
}

export type MutationUpdateTaskArgs = {
  assignedGroupId?: InputMaybe<Scalars['String']>
  assignee?: InputMaybe<GraphQlAssignee>
  description?: InputMaybe<Scalars['String']>
  dueDate?: InputMaybe<Scalars['Date']>
  id: Scalars['String']
  item?: InputMaybe<TaskItem>
  name?: InputMaybe<Scalars['String']>
  status?: InputMaybe<TaskStatus>
}

export type MutationUpdateTypeCodeElementArgs = {
  code?: InputMaybe<Scalars['String']>
  id: Scalars['String']
  level?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
}

export type PageInfo = {
  __typename?: 'PageInfo'
  endCursor?: Maybe<Scalars['String']>
  hasNextPage: Scalars['Boolean']
  hasPreviousPage: Scalars['Boolean']
  startCursor?: Maybe<Scalars['String']>
}

export type ProjectAssemblyAddInput = {
  category: Scalars['String']
  conversionFactor?: InputMaybe<Scalars['Float']>
  description?: InputMaybe<Scalars['String']>
  lifeTime?: InputMaybe<Scalars['Float']>
  metaFields?: InputMaybe<Scalars['JSON']>
  name: Scalars['String']
  projectId: Scalars['String']
  unit: GraphQlAssemblyUnit
}

export type ProjectAssemblyUpdateInput = {
  category?: InputMaybe<Scalars['String']>
  conversionFactor?: InputMaybe<Scalars['Float']>
  description?: InputMaybe<Scalars['String']>
  id: Scalars['String']
  lifeTime?: InputMaybe<Scalars['Float']>
  metaFields?: InputMaybe<Scalars['JSON']>
  name?: InputMaybe<Scalars['String']>
  unit?: InputMaybe<GraphQlAssemblyUnit>
}

export enum ProjectDomain {
  Buildings = 'buildings',
  Energy = 'energy',
  Infrastructure = 'infrastructure',
  Tunnels = 'tunnels',
}

export type ProjectEpdFilters = {
  category?: InputMaybe<FilterOptions>
  id?: InputMaybe<FilterOptions>
  isTransport?: InputMaybe<FilterOptions>
  name?: InputMaybe<FilterOptions>
  owner?: InputMaybe<FilterOptions>
  projectId?: InputMaybe<FilterOptions>
  region?: InputMaybe<FilterOptions>
  source?: InputMaybe<FilterOptions>
  type?: InputMaybe<FilterOptions>
  unit?: InputMaybe<SortOptions>
}

export type ProjectFilters = {
  id?: InputMaybe<FilterOptions>
  metaFields?: InputMaybe<FilterOptions>
  name?: InputMaybe<FilterOptions>
  projectId?: InputMaybe<FilterOptions>
}

export type ProjectGroupFilters = {
  id?: InputMaybe<FilterOptions>
  name?: InputMaybe<FilterOptions>
  projectId?: InputMaybe<FilterOptions>
}

export type ProjectGroupInput = {
  id: Scalars['String']
  leadId: Scalars['String']
  name: Scalars['String']
}

export type ProjectMemberFilters = {
  company?: InputMaybe<FilterOptions>
  email?: InputMaybe<FilterOptions>
  name?: InputMaybe<FilterOptions>
  projectId?: InputMaybe<FilterOptions>
  userId?: InputMaybe<FilterOptions>
}

export type ProjectMemberInput = {
  userId: Scalars['String']
}

export type ProjectSourceFilters = {
  id?: InputMaybe<FilterOptions>
  name?: InputMaybe<FilterOptions>
  projectId?: InputMaybe<FilterOptions>
}

export enum ProjectSourceType {
  Csv = 'CSV',
  Speckle = 'SPECKLE',
  Xlsx = 'XLSX',
}

export type Query = {
  __typename?: 'Query'
  /** Get current user */
  account: GraphQlUserAccount
  /** Get assemblies */
  assemblies: Array<GraphQlAssembly>
  /**
   * Calculates the LCA result of a project from a base 64 encoded file.
   * The project argument is a base64 encoded string of a LCAxProject.
   * The result is a base64 encoded string of a LCAxProject with a result object included.
   */
  calculateLca: Scalars['Base64']
  /** Query all comments of a task */
  comments: Array<GraphQlComment>
  /** Get all commits of a Reporting Schema */
  commits: Array<GraphQlCommit>
  epds: GraphQlepdConnection
  /** Resolver for exporting the database contents as a base64 encoded string. */
  exportReportingSchema: Scalars['String']
  /** Get all life cycle stages */
  lifeCycleStages: Array<GraphQlLifeCycleStage>
  /** Get project assemblies */
  projectAssemblies: Array<GraphQlProjectAssembly>
  projectEpds: Array<GraphQlProjectEpd>
  /** Query all Project Groups */
  projectGroups: Array<GraphQlProjectGroup>
  /**
   * Query Project Members using ProjectID.
   * Filters can be used to query unique members of the Project
   */
  projectMembers: Array<GraphQlProjectMember>
  /** Get all sources associated with a project */
  projectSources: Array<GraphQlProjectSource>
  /** Get all life cycle stage associated with a project */
  projectStages: Array<GraphQlProjectStage>
  /** Query all Projects user has access to */
  projects: Array<GraphQlProject>
  /** Query a reporting schema using project_id */
  reportingSchemas: Array<GraphQlReportingSchema>
  /** Get all Schema Categories of a Reporting Schema */
  schemaCategories: Array<GraphQlSchemaCategory>
  /** Get all schema elements for a list of categories */
  schemaElements: Array<GraphQlSchemaElement>
  /** Query Schema Templates */
  schemaTemplates: Array<GraphQlSchemaTemplate>
  /** Returns all Sites */
  sites: Array<GraphQlSite>
  /** Get all tags */
  tags: Array<GraphQlTag>
  /** Get all tasks connected to a reporting schema */
  tasks: Array<GraphQlTask>
  /** Get typeCodeElements */
  typeCodeElements: Array<GraphQlTypeCodeElement>
}

export type QueryAssembliesArgs = {
  filters?: InputMaybe<AssemblyFilters>
}

export type QueryCalculateLcaArgs = {
  project: Scalars['Base64']
}

export type QueryCommentsArgs = {
  filters?: InputMaybe<CommentFilters>
  taskId: Scalars['String']
}

export type QueryCommitsArgs = {
  filters?: InputMaybe<CommitFilters>
  reportingSchemaId: Scalars['String']
}

export type QueryEpdsArgs = {
  after?: InputMaybe<Scalars['String']>
  count?: InputMaybe<Scalars['Int']>
  filters?: InputMaybe<EpdFilters>
  sortBy?: InputMaybe<EpdSort>
}

export type QueryExportReportingSchemaArgs = {
  exportFormat: ExportFormat
  reportingSchemaId: Scalars['String']
}

export type QueryProjectAssembliesArgs = {
  filters?: InputMaybe<AssemblyFilters>
  projectId: Scalars['String']
}

export type QueryProjectEpdsArgs = {
  filters?: InputMaybe<ProjectEpdFilters>
  projectId: Scalars['String']
}

export type QueryProjectGroupsArgs = {
  filters?: InputMaybe<ProjectGroupFilters>
  projectId: Scalars['String']
}

export type QueryProjectMembersArgs = {
  filters?: InputMaybe<ProjectMemberFilters>
  projectId: Scalars['String']
}

export type QueryProjectSourcesArgs = {
  filters?: InputMaybe<ProjectSourceFilters>
  projectId: Scalars['String']
}

export type QueryProjectStagesArgs = {
  projectId: Scalars['String']
}

export type QueryProjectsArgs = {
  filters?: InputMaybe<ProjectFilters>
}

export type QueryReportingSchemasArgs = {
  filters?: InputMaybe<ReportingSchemaFilters>
  projectId: Scalars['String']
}

export type QuerySchemaCategoriesArgs = {
  commitId?: InputMaybe<Scalars['String']>
  filters?: InputMaybe<SchemaCategoryFilters>
  reportingSchemaId: Scalars['String']
}

export type QuerySchemaElementsArgs = {
  commitId?: InputMaybe<Scalars['String']>
  elementId?: InputMaybe<Scalars['String']>
  filters?: InputMaybe<SchemaElementFilters>
  schemaCategoryIds: Array<Scalars['String']>
}

export type QuerySchemaTemplatesArgs = {
  filters?: InputMaybe<SchemaTemplateFilters>
}

export type QuerySitesArgs = {
  filters?: InputMaybe<SiteFilters>
}

export type QueryTagsArgs = {
  filters?: InputMaybe<TagFilters>
  reportingSchemaId: Scalars['String']
}

export type QueryTasksArgs = {
  commitId?: InputMaybe<Scalars['String']>
  filters?: InputMaybe<TaskFilters>
  reportingSchemaId: Scalars['String']
}

export type QueryTypeCodeElementsArgs = {
  code?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}

export type ReportingSchemaFilters = {
  id?: InputMaybe<FilterOptions>
  name?: InputMaybe<FilterOptions>
  projectId?: InputMaybe<FilterOptions>
}

export type SchemaCategoryFilters = {
  description?: InputMaybe<FilterOptions>
  id?: InputMaybe<FilterOptions>
  name?: InputMaybe<FilterOptions>
}

export type SchemaElementFilters = {
  classification?: InputMaybe<FilterOptions>
  description?: InputMaybe<FilterOptions>
  id?: InputMaybe<FilterOptions>
  name?: InputMaybe<FilterOptions>
  quantity?: InputMaybe<FilterOptions>
  subclassification?: InputMaybe<FilterOptions>
  unit?: InputMaybe<FilterOptions>
}

export type SchemaElementUpdateInput = {
  assemblyId?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  id: Scalars['String']
  name?: InputMaybe<Scalars['String']>
  quantity?: InputMaybe<Scalars['Float']>
  result?: InputMaybe<Scalars['JSON']>
  schemaCategory?: InputMaybe<Scalars['String']>
  unit?: InputMaybe<Unit>
}

export type SchemaTemplateFilters = {
  id?: InputMaybe<FilterOptions>
  name?: InputMaybe<FilterOptions>
}

export type SiteFilters = {
  defaultValues?: InputMaybe<FilterOptions>
  description?: InputMaybe<FilterOptions>
  domainName?: InputMaybe<FilterOptions>
  id?: InputMaybe<FilterOptions>
  logoUrl?: InputMaybe<FilterOptions>
  metaFields?: InputMaybe<FilterOptions>
  name?: InputMaybe<FilterOptions>
  projectStages?: InputMaybe<FilterOptions>
  url?: InputMaybe<FilterOptions>
}

export enum SortOptions {
  Asc = 'ASC',
  Dsc = 'DSC',
}

export type TagFilters = {
  added?: InputMaybe<FilterOptions>
  authorId?: InputMaybe<FilterOptions>
  id?: InputMaybe<FilterOptions>
  shortId?: InputMaybe<FilterOptions>
}

export type TaskFilters = {
  description?: InputMaybe<FilterOptions>
  dueDate?: InputMaybe<FilterOptions>
  id?: InputMaybe<FilterOptions>
  itemId?: InputMaybe<FilterOptions>
  itemType?: InputMaybe<FilterOptions>
  name?: InputMaybe<FilterOptions>
}

export enum TaskItemType {
  Category = 'Category',
  Element = 'Element',
}

export enum TaskStatus {
  Approved = 'APPROVED',
  Completed = 'COMPLETED',
  Pending = 'PENDING',
}

export enum Unit {
  Kg = 'KG',
  M = 'M',
  M2 = 'M2',
  M3 = 'M3',
  None = 'NONE',
  Pcs = 'PCS',
}

export enum ExportFormat {
  Csv = 'CSV',
  Lcabyg = 'LCABYG',
  Lcax = 'LCAX',
}

export type TaskItem = {
  id: Scalars['String']
  type: TaskItemType
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AssemblyAddInput: AssemblyAddInput
  String: ResolverTypeWrapper<Scalars['String']>
  Float: ResolverTypeWrapper<Scalars['Float']>
  AssemblyFilters: AssemblyFilters
  AssemblyLayerInput: AssemblyLayerInput
  Int: ResolverTypeWrapper<Scalars['Int']>
  AssemblyLayerUpdateInput: AssemblyLayerUpdateInput
  AssemblyUpdateInput: AssemblyUpdateInput
  AssigneeType: AssigneeType
  Base64: ResolverTypeWrapper<Scalars['Base64']>
  CommentFilters: CommentFilters
  CommitFilters: CommitFilters
  Date: ResolverTypeWrapper<Scalars['Date']>
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>
  EPDFilters: EpdFilters
  EPDSort: EpdSort
  FilterOptions: FilterOptions
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  GraphQLAddEpdInput: GraphQlAddEpdInput
  GraphQLAddSiteInput: GraphQlAddSiteInput
  GraphQLAssembly: ResolverTypeWrapper<GraphQlAssembly>
  GraphQLAssemblyLayer: ResolverTypeWrapper<GraphQlAssemblyLayer>
  GraphQLAssemblyUnit: GraphQlAssemblyUnit
  GraphQLAssignee: GraphQlAssignee
  GraphQLComment: ResolverTypeWrapper<GraphQlComment>
  ID: ResolverTypeWrapper<Scalars['ID']>
  GraphQLCommit: ResolverTypeWrapper<GraphQlCommit>
  GraphQLConversion: ResolverTypeWrapper<GraphQlConversion>
  GraphQLEPD: ResolverTypeWrapper<GraphQlepd>
  GraphQLEPDBase: ResolverTypeWrapper<GraphQlepdBase>
  GraphQLEPDConnection: ResolverTypeWrapper<GraphQlepdConnection>
  GraphQLEPDEdge: ResolverTypeWrapper<GraphQlepdEdge>
  GraphQLImpactCategories: ResolverTypeWrapper<GraphQlImpactCategories>
  GraphQLLifeCycleStage: ResolverTypeWrapper<GraphQlLifeCycleStage>
  GraphQLProject: ResolverTypeWrapper<GraphQlProject>
  GraphQLProjectAssembly: ResolverTypeWrapper<GraphQlProjectAssembly>
  GraphQLProjectEPD: ResolverTypeWrapper<GraphQlProjectEpd>
  GraphQLProjectGroup: ResolverTypeWrapper<GraphQlProjectGroup>
  GraphQLProjectMember: ResolverTypeWrapper<GraphQlProjectMember>
  GraphQLProjectMemberGraphQLProjectGroup:
    | ResolversTypes['GraphQLProjectGroup']
    | ResolversTypes['GraphQLProjectMember']
  GraphQLProjectSource: ResolverTypeWrapper<GraphQlProjectSource>
  GraphQLProjectStage: ResolverTypeWrapper<GraphQlProjectStage>
  GraphQLReportingCreationSchema: ResolverTypeWrapper<GraphQlReportingCreationSchema>
  GraphQLReportingSchema: ResolverTypeWrapper<GraphQlReportingSchema>
  GraphQLSchemaCategory: ResolverTypeWrapper<GraphQlSchemaCategory>
  GraphQLSchemaElement: ResolverTypeWrapper<GraphQlSchemaElement>
  GraphQLSchemaElementGraphQLSchemaCategory:
    | ResolversTypes['GraphQLSchemaCategory']
    | ResolversTypes['GraphQLSchemaElement']
  GraphQLSchemaTemplate: ResolverTypeWrapper<GraphQlSchemaTemplate>
  GraphQLSite: ResolverTypeWrapper<GraphQlSite>
  GraphQLSourceFile: ResolverTypeWrapper<GraphQlSourceFile>
  GraphQLTag: ResolverTypeWrapper<GraphQlTag>
  GraphQLTask: ResolverTypeWrapper<
    Omit<GraphQlTask, 'assignee' | 'item'> & {
      assignee: ResolversTypes['GraphQLProjectMemberGraphQLProjectGroup']
      item: ResolversTypes['GraphQLSchemaElementGraphQLSchemaCategory']
    }
  >
  GraphQLTypeCodeElement: ResolverTypeWrapper<GraphQlTypeCodeElement>
  GraphQLUnit: GraphQlUnit
  GraphQLUpdateSiteInput: GraphQlUpdateSiteInput
  GraphQLUserAccount: ResolverTypeWrapper<GraphQlUserAccount>
  JSON: ResolverTypeWrapper<Scalars['JSON']>
  LifeCycleStageInput: LifeCycleStageInput
  Mutation: ResolverTypeWrapper<{}>
  PageInfo: ResolverTypeWrapper<PageInfo>
  ProjectAssemblyAddInput: ProjectAssemblyAddInput
  ProjectAssemblyUpdateInput: ProjectAssemblyUpdateInput
  ProjectDomain: ProjectDomain
  ProjectEPDFilters: ProjectEpdFilters
  ProjectFilters: ProjectFilters
  ProjectGroupFilters: ProjectGroupFilters
  ProjectGroupInput: ProjectGroupInput
  ProjectMemberFilters: ProjectMemberFilters
  ProjectMemberInput: ProjectMemberInput
  ProjectSourceFilters: ProjectSourceFilters
  ProjectSourceType: ProjectSourceType
  Query: ResolverTypeWrapper<{}>
  ReportingSchemaFilters: ReportingSchemaFilters
  SchemaCategoryFilters: SchemaCategoryFilters
  SchemaElementFilters: SchemaElementFilters
  SchemaElementUpdateInput: SchemaElementUpdateInput
  SchemaTemplateFilters: SchemaTemplateFilters
  SiteFilters: SiteFilters
  SortOptions: SortOptions
  TagFilters: TagFilters
  TaskFilters: TaskFilters
  TaskItemType: TaskItemType
  TaskStatus: TaskStatus
  Unit: Unit
  exportFormat: ExportFormat
  taskItem: TaskItem
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AssemblyAddInput: AssemblyAddInput
  String: Scalars['String']
  Float: Scalars['Float']
  AssemblyFilters: AssemblyFilters
  AssemblyLayerInput: AssemblyLayerInput
  Int: Scalars['Int']
  AssemblyLayerUpdateInput: AssemblyLayerUpdateInput
  AssemblyUpdateInput: AssemblyUpdateInput
  Base64: Scalars['Base64']
  CommentFilters: CommentFilters
  CommitFilters: CommitFilters
  Date: Scalars['Date']
  DateTime: Scalars['DateTime']
  EPDFilters: EpdFilters
  EPDSort: EpdSort
  FilterOptions: FilterOptions
  Boolean: Scalars['Boolean']
  GraphQLAddEpdInput: GraphQlAddEpdInput
  GraphQLAddSiteInput: GraphQlAddSiteInput
  GraphQLAssembly: GraphQlAssembly
  GraphQLAssemblyLayer: GraphQlAssemblyLayer
  GraphQLAssignee: GraphQlAssignee
  GraphQLComment: GraphQlComment
  ID: Scalars['ID']
  GraphQLCommit: GraphQlCommit
  GraphQLConversion: GraphQlConversion
  GraphQLEPD: GraphQlepd
  GraphQLEPDBase: GraphQlepdBase
  GraphQLEPDConnection: GraphQlepdConnection
  GraphQLEPDEdge: GraphQlepdEdge
  GraphQLImpactCategories: GraphQlImpactCategories
  GraphQLLifeCycleStage: GraphQlLifeCycleStage
  GraphQLProject: GraphQlProject
  GraphQLProjectAssembly: GraphQlProjectAssembly
  GraphQLProjectEPD: GraphQlProjectEpd
  GraphQLProjectGroup: GraphQlProjectGroup
  GraphQLProjectMember: GraphQlProjectMember
  GraphQLProjectMemberGraphQLProjectGroup:
    | ResolversParentTypes['GraphQLProjectGroup']
    | ResolversParentTypes['GraphQLProjectMember']
  GraphQLProjectSource: GraphQlProjectSource
  GraphQLProjectStage: GraphQlProjectStage
  GraphQLReportingCreationSchema: GraphQlReportingCreationSchema
  GraphQLReportingSchema: GraphQlReportingSchema
  GraphQLSchemaCategory: GraphQlSchemaCategory
  GraphQLSchemaElement: GraphQlSchemaElement
  GraphQLSchemaElementGraphQLSchemaCategory:
    | ResolversParentTypes['GraphQLSchemaCategory']
    | ResolversParentTypes['GraphQLSchemaElement']
  GraphQLSchemaTemplate: GraphQlSchemaTemplate
  GraphQLSite: GraphQlSite
  GraphQLSourceFile: GraphQlSourceFile
  GraphQLTag: GraphQlTag
  GraphQLTask: Omit<GraphQlTask, 'assignee' | 'item'> & {
    assignee: ResolversParentTypes['GraphQLProjectMemberGraphQLProjectGroup']
    item: ResolversParentTypes['GraphQLSchemaElementGraphQLSchemaCategory']
  }
  GraphQLTypeCodeElement: GraphQlTypeCodeElement
  GraphQLUpdateSiteInput: GraphQlUpdateSiteInput
  GraphQLUserAccount: GraphQlUserAccount
  JSON: Scalars['JSON']
  LifeCycleStageInput: LifeCycleStageInput
  Mutation: {}
  PageInfo: PageInfo
  ProjectAssemblyAddInput: ProjectAssemblyAddInput
  ProjectAssemblyUpdateInput: ProjectAssemblyUpdateInput
  ProjectEPDFilters: ProjectEpdFilters
  ProjectFilters: ProjectFilters
  ProjectGroupFilters: ProjectGroupFilters
  ProjectGroupInput: ProjectGroupInput
  ProjectMemberFilters: ProjectMemberFilters
  ProjectMemberInput: ProjectMemberInput
  ProjectSourceFilters: ProjectSourceFilters
  Query: {}
  ReportingSchemaFilters: ReportingSchemaFilters
  SchemaCategoryFilters: SchemaCategoryFilters
  SchemaElementFilters: SchemaElementFilters
  SchemaElementUpdateInput: SchemaElementUpdateInput
  SchemaTemplateFilters: SchemaTemplateFilters
  SiteFilters: SiteFilters
  TagFilters: TagFilters
  TaskFilters: TaskFilters
  taskItem: TaskItem
}

export type DeferDirectiveArgs = {
  if?: Scalars['Boolean']
  label?: Maybe<Scalars['String']>
}

export type DeferDirectiveResolver<Result, Parent, ContextType = any, Args = DeferDirectiveArgs> = DirectiveResolverFn<
  Result,
  Parent,
  ContextType,
  Args
>

export interface Base64ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Base64'], any> {
  name: 'Base64'
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export type GraphQlAssemblyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLAssembly'] = ResolversParentTypes['GraphQLAssembly'],
> = {
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  conversionFactor?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  gwp?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<GraphQlAssemblyGwpArgs, 'phases'>>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  layers?: Resolver<Array<Maybe<ResolversTypes['GraphQLAssemblyLayer']>>, ParentType, ContextType>
  lifeTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  metaFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  unit?: Resolver<ResolversTypes['GraphQLAssemblyUnit'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlAssemblyLayerResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLAssemblyLayer'] = ResolversParentTypes['GraphQLAssemblyLayer'],
> = {
  conversionFactor?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  epd?: Resolver<ResolversTypes['GraphQLProjectEPD'], ParentType, ContextType>
  epdId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  referenceServiceLife?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  transportConversionFactor?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  transportDistance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  transportEpd?: Resolver<Maybe<ResolversTypes['GraphQLProjectEPD']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlCommentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLComment'] = ResolversParentTypes['GraphQLComment'],
> = {
  added?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  author?: Resolver<Maybe<ResolversTypes['GraphQLProjectMember']>, ParentType, ContextType>
  authorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  task?: Resolver<ResolversTypes['GraphQLTask'], ParentType, ContextType>
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlCommitResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLCommit'] = ResolversParentTypes['GraphQLCommit'],
> = {
  added?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  authorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  parentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  reportingSchemaId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  repositoryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  schemaCategories?: Resolver<Maybe<Array<ResolversTypes['GraphQLSchemaCategory']>>, ParentType, ContextType>
  schemaElements?: Resolver<Maybe<Array<ResolversTypes['GraphQLSchemaElement']>>, ParentType, ContextType>
  shortId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  tags?: Resolver<Maybe<Array<ResolversTypes['GraphQLTag']>>, ParentType, ContextType>
  tasks?: Resolver<Maybe<Array<ResolversTypes['GraphQLTask']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlConversionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLConversion'] = ResolversParentTypes['GraphQLConversion'],
> = {
  to?: Resolver<ResolversTypes['GraphQLUnit'], ParentType, ContextType>
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlepdResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLEPD'] = ResolversParentTypes['GraphQLEPD'],
> = {
  ap?: Resolver<Maybe<ResolversTypes['GraphQLImpactCategories']>, ParentType, ContextType>
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  conversions?: Resolver<Array<ResolversTypes['GraphQLConversion']>, ParentType, ContextType>
  declaredUnit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  ep?: Resolver<Maybe<ResolversTypes['GraphQLImpactCategories']>, ParentType, ContextType>
  gwp?: Resolver<Maybe<ResolversTypes['GraphQLImpactCategories']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  isTransport?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  metaFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  odp?: Resolver<Maybe<ResolversTypes['GraphQLImpactCategories']>, ParentType, ContextType>
  originId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  penre?: Resolver<Maybe<ResolversTypes['GraphQLImpactCategories']>, ParentType, ContextType>
  pere?: Resolver<Maybe<ResolversTypes['GraphQLImpactCategories']>, ParentType, ContextType>
  pocp?: Resolver<Maybe<ResolversTypes['GraphQLImpactCategories']>, ParentType, ContextType>
  publishedDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  referenceServiceLife?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  subtype?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  validUntil?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  version?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlepdBaseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLEPDBase'] = ResolversParentTypes['GraphQLEPDBase'],
> = {
  ap?: Resolver<Maybe<ResolversTypes['GraphQLImpactCategories']>, ParentType, ContextType>
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  conversions?: Resolver<Array<ResolversTypes['GraphQLConversion']>, ParentType, ContextType>
  declaredUnit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  ep?: Resolver<Maybe<ResolversTypes['GraphQLImpactCategories']>, ParentType, ContextType>
  gwp?: Resolver<Maybe<ResolversTypes['GraphQLImpactCategories']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  isTransport?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  metaFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  odp?: Resolver<Maybe<ResolversTypes['GraphQLImpactCategories']>, ParentType, ContextType>
  penre?: Resolver<Maybe<ResolversTypes['GraphQLImpactCategories']>, ParentType, ContextType>
  pere?: Resolver<Maybe<ResolversTypes['GraphQLImpactCategories']>, ParentType, ContextType>
  pocp?: Resolver<Maybe<ResolversTypes['GraphQLImpactCategories']>, ParentType, ContextType>
  publishedDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  referenceServiceLife?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  subtype?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  validUntil?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  version?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlepdConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLEPDConnection'] = ResolversParentTypes['GraphQLEPDConnection'],
> = {
  edges?: Resolver<Array<ResolversTypes['GraphQLEPDEdge']>, ParentType, ContextType>
  numEdges?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlepdEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLEPDEdge'] = ResolversParentTypes['GraphQLEPDEdge'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  node?: Resolver<ResolversTypes['GraphQLEPD'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlImpactCategoriesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLImpactCategories'] = ResolversParentTypes['GraphQLImpactCategories'],
> = {
  a1a3?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  a4?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  a5?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  b1?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  b2?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  b3?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  b4?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  b5?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  b6?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  b7?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  c1?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  c2?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  c3?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  c4?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  d?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlLifeCycleStageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLLifeCycleStage'] = ResolversParentTypes['GraphQLLifeCycleStage'],
> = {
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  phase?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlProjectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLProject'] = ResolversParentTypes['GraphQLProject'],
> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  client?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  domain?: Resolver<Maybe<ResolversTypes['ProjectDomain']>, ParentType, ContextType>
  groups?: Resolver<Maybe<Array<ResolversTypes['GraphQLProjectGroup']>>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  members?: Resolver<Maybe<Array<ResolversTypes['GraphQLProjectMember']>>, ParentType, ContextType>
  metaFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  projectId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  public?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  stages?: Resolver<Maybe<Array<ResolversTypes['GraphQLProjectStage']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlProjectAssemblyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLProjectAssembly'] = ResolversParentTypes['GraphQLProjectAssembly'],
> = {
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  conversionFactor?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  gwp?: Resolver<
    ResolversTypes['Float'],
    ParentType,
    ContextType,
    RequireFields<GraphQlProjectAssemblyGwpArgs, 'phases'>
  >
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  layers?: Resolver<Array<ResolversTypes['GraphQLAssemblyLayer']>, ParentType, ContextType>
  lifeTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  metaFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  unit?: Resolver<ResolversTypes['GraphQLAssemblyUnit'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlProjectEpdResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLProjectEPD'] = ResolversParentTypes['GraphQLProjectEPD'],
> = {
  ap?: Resolver<Maybe<ResolversTypes['GraphQLImpactCategories']>, ParentType, ContextType>
  assemblies?: Resolver<Maybe<Array<ResolversTypes['GraphQLProjectAssembly']>>, ParentType, ContextType>
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  conversions?: Resolver<Array<ResolversTypes['GraphQLConversion']>, ParentType, ContextType>
  declaredUnit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  ep?: Resolver<Maybe<ResolversTypes['GraphQLImpactCategories']>, ParentType, ContextType>
  gwp?: Resolver<Maybe<ResolversTypes['GraphQLImpactCategories']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  isTransport?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  metaFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  odp?: Resolver<Maybe<ResolversTypes['GraphQLImpactCategories']>, ParentType, ContextType>
  originId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  penre?: Resolver<Maybe<ResolversTypes['GraphQLImpactCategories']>, ParentType, ContextType>
  pere?: Resolver<Maybe<ResolversTypes['GraphQLImpactCategories']>, ParentType, ContextType>
  pocp?: Resolver<Maybe<ResolversTypes['GraphQLImpactCategories']>, ParentType, ContextType>
  projectId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  publishedDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  referenceServiceLife?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  subtype?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  validUntil?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  version?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlProjectGroupResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLProjectGroup'] = ResolversParentTypes['GraphQLProjectGroup'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  lead?: Resolver<Maybe<ResolversTypes['GraphQLProjectMember']>, ParentType, ContextType>
  leadId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  members?: Resolver<Maybe<Array<ResolversTypes['GraphQLProjectMember']>>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlProjectMemberResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLProjectMember'] = ResolversParentTypes['GraphQLProjectMember'],
> = {
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  lastLogin?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  leaderOf?: Resolver<Maybe<Array<ResolversTypes['GraphQLProjectGroup']>>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  projectGroups?: Resolver<Maybe<Array<ResolversTypes['GraphQLProjectGroup']>>, ParentType, ContextType>
  projectId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlProjectMemberGraphQlProjectGroupResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLProjectMemberGraphQLProjectGroup'] = ResolversParentTypes['GraphQLProjectMemberGraphQLProjectGroup'],
> = {
  __resolveType: TypeResolveFn<'GraphQLProjectGroup' | 'GraphQLProjectMember', ParentType, ContextType>
}

export type GraphQlProjectSourceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLProjectSource'] = ResolversParentTypes['GraphQLProjectSource'],
> = {
  author?: Resolver<ResolversTypes['GraphQLProjectMember'], ParentType, ContextType>
  authorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  data?: Resolver<Maybe<ResolversTypes['GraphQLSourceFile']>, ParentType, ContextType>
  dataId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  elements?: Resolver<Maybe<Array<ResolversTypes['GraphQLSchemaElement']>>, ParentType, ContextType>
  fileUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  interpretation?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>
  metaFields?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  type?: Resolver<ResolversTypes['ProjectSourceType'], ParentType, ContextType>
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlProjectStageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLProjectStage'] = ResolversParentTypes['GraphQLProjectStage'],
> = {
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  phase?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  stageId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlReportingCreationSchemaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLReportingCreationSchema'] = ResolversParentTypes['GraphQLReportingCreationSchema'],
> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  projectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlReportingSchemaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLReportingSchema'] = ResolversParentTypes['GraphQLReportingSchema'],
> = {
  categories?: Resolver<Maybe<Array<ResolversTypes['GraphQLSchemaCategory']>>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  templateId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlSchemaCategoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLSchemaCategory'] = ResolversParentTypes['GraphQLSchemaCategory'],
> = {
  commits?: Resolver<Maybe<Array<ResolversTypes['GraphQLCommit']>>, ParentType, ContextType>
  depth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  elements?: Resolver<Maybe<Array<ResolversTypes['GraphQLSchemaElement']>>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  reportingSchema?: Resolver<ResolversTypes['GraphQLReportingSchema'], ParentType, ContextType>
  reportingSchemaId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlSchemaElementResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLSchemaElement'] = ResolversParentTypes['GraphQLSchemaElement'],
> = {
  assembly?: Resolver<Maybe<ResolversTypes['GraphQLProjectAssembly']>, ParentType, ContextType>
  assemblyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  commits?: Resolver<Array<ResolversTypes['GraphQLCommit']>, ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  result?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>
  schemaCategory?: Resolver<ResolversTypes['GraphQLSchemaCategory'], ParentType, ContextType>
  source?: Resolver<Maybe<ResolversTypes['GraphQLProjectSource']>, ParentType, ContextType>
  unit?: Resolver<ResolversTypes['Unit'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlSchemaElementGraphQlSchemaCategoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLSchemaElementGraphQLSchemaCategory'] = ResolversParentTypes['GraphQLSchemaElementGraphQLSchemaCategory'],
> = {
  __resolveType: TypeResolveFn<'GraphQLSchemaCategory' | 'GraphQLSchemaElement', ParentType, ContextType>
}

export type GraphQlSchemaTemplateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLSchemaTemplate'] = ResolversParentTypes['GraphQLSchemaTemplate'],
> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  schema?: Resolver<Maybe<ResolversTypes['GraphQLReportingSchema']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlSiteResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLSite'] = ResolversParentTypes['GraphQLSite'],
> = {
  defaultValues?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  domainName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  logoUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  metaFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  projectStages?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlSourceFileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLSourceFile'] = ResolversParentTypes['GraphQLSourceFile'],
> = {
  headers?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>
  rows?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlTagResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLTag'] = ResolversParentTypes['GraphQLTag'],
> = {
  added?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  authorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  commit?: Resolver<ResolversTypes['GraphQLCommit'], ParentType, ContextType>
  commitId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  shortId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlTaskResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLTask'] = ResolversParentTypes['GraphQLTask'],
> = {
  assignedGroupId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  assignee?: Resolver<ResolversTypes['GraphQLProjectMemberGraphQLProjectGroup'], ParentType, ContextType>
  assigneeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  author?: Resolver<ResolversTypes['GraphQLProjectMember'], ParentType, ContextType>
  authorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  comments?: Resolver<Maybe<Array<ResolversTypes['GraphQLComment']>>, ParentType, ContextType>
  commits?: Resolver<Array<ResolversTypes['GraphQLCommit']>, ParentType, ContextType>
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  dueDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  item?: Resolver<ResolversTypes['GraphQLSchemaElementGraphQLSchemaCategory'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  reportingSchema?: Resolver<ResolversTypes['GraphQLReportingSchema'], ParentType, ContextType>
  reportingSchemaId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  status?: Resolver<ResolversTypes['TaskStatus'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlTypeCodeElementResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLTypeCodeElement'] = ResolversParentTypes['GraphQLTypeCodeElement'],
> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlUserAccountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLUserAccount'] = ResolversParentTypes['GraphQLUserAccount'],
> = {
  blobSasToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  roles?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>
  tenantId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON'
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  addAssemblies?: Resolver<
    Array<ResolversTypes['GraphQLAssembly']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddAssembliesArgs, 'assemblies'>
  >
  addAssemblyLayers?: Resolver<
    Array<ResolversTypes['GraphQLAssemblyLayer']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddAssemblyLayersArgs, 'id' | 'layers'>
  >
  addComment?: Resolver<
    ResolversTypes['GraphQLComment'],
    ParentType,
    ContextType,
    RequireFields<MutationAddCommentArgs, 'taskId' | 'text'>
  >
  addEpds?: Resolver<
    Array<ResolversTypes['GraphQLEPD']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddEpdsArgs, 'epds'>
  >
  addProject?: Resolver<
    ResolversTypes['GraphQLProject'],
    ParentType,
    ContextType,
    RequireFields<
      MutationAddProjectArgs,
      | 'address'
      | 'city'
      | 'client'
      | 'country'
      | 'domain'
      | 'file'
      | 'groups'
      | 'members'
      | 'metaFields'
      | 'name'
      | 'projectId'
      | 'public'
      | 'stages'
    >
  >
  addProjectAssemblies?: Resolver<
    Array<ResolversTypes['GraphQLProjectAssembly']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddProjectAssembliesArgs, 'assemblies'>
  >
  addProjectAssembliesFromAssemblies?: Resolver<
    Array<ResolversTypes['GraphQLProjectAssembly']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddProjectAssembliesFromAssembliesArgs, 'assemblies' | 'projectId'>
  >
  addProjectAssemblyLayers?: Resolver<
    Array<ResolversTypes['GraphQLAssemblyLayer']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddProjectAssemblyLayersArgs, 'id' | 'layers'>
  >
  addProjectEpds?: Resolver<
    Array<ResolversTypes['GraphQLProjectEPD']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddProjectEpdsArgs, 'epdIds' | 'projectId'>
  >
  addProjectGroup?: Resolver<
    ResolversTypes['GraphQLProjectGroup'],
    ParentType,
    ContextType,
    RequireFields<MutationAddProjectGroupArgs, 'leadId' | 'name' | 'projectId'>
  >
  addProjectMember?: Resolver<
    ResolversTypes['GraphQLProjectMember'],
    ParentType,
    ContextType,
    RequireFields<MutationAddProjectMemberArgs, 'email' | 'name' | 'projectGroupIds' | 'projectId'>
  >
  addProjectMembersToGroup?: Resolver<
    ResolversTypes['GraphQLProjectGroup'],
    ParentType,
    ContextType,
    RequireFields<MutationAddProjectMembersToGroupArgs, 'groupId' | 'memberIds'>
  >
  addProjectSource?: Resolver<
    ResolversTypes['GraphQLProjectSource'],
    ParentType,
    ContextType,
    RequireFields<MutationAddProjectSourceArgs, 'dataId' | 'file' | 'name' | 'projectId' | 'speckleUrl' | 'type'>
  >
  addProjectStage?: Resolver<
    ResolversTypes['GraphQLProjectStage'],
    ParentType,
    ContextType,
    RequireFields<MutationAddProjectStageArgs, 'projectId' | 'stageId'>
  >
  addReportingSchema?: Resolver<
    ResolversTypes['GraphQLReportingCreationSchema'],
    ParentType,
    ContextType,
    RequireFields<MutationAddReportingSchemaArgs, 'name' | 'projectId' | 'templateId'>
  >
  addReportingSchemaFromTemplate?: Resolver<
    ResolversTypes['GraphQLReportingCreationSchema'],
    ParentType,
    ContextType,
    RequireFields<MutationAddReportingSchemaFromTemplateArgs, 'projectId' | 'templateId'>
  >
  addSchemaCategory?: Resolver<
    ResolversTypes['GraphQLSchemaCategory'],
    ParentType,
    ContextType,
    RequireFields<MutationAddSchemaCategoryArgs, 'description' | 'name' | 'path' | 'reportingSchemaId'>
  >
  addSchemaElement?: Resolver<
    ResolversTypes['GraphQLSchemaElement'],
    ParentType,
    ContextType,
    RequireFields<
      MutationAddSchemaElementArgs,
      'assemblyId' | 'description' | 'name' | 'quantity' | 'schemaCategoryId' | 'unit'
    >
  >
  addSchemaElementFromSource?: Resolver<
    Array<ResolversTypes['GraphQLSchemaElement']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationAddSchemaElementFromSourceArgs,
      'objectIds' | 'quantities' | 'schemaCategoryIds' | 'sourceId' | 'units'
    >
  >
  addSchemaTemplate?: Resolver<
    ResolversTypes['GraphQLSchemaTemplate'],
    ParentType,
    ContextType,
    RequireFields<MutationAddSchemaTemplateArgs, 'name'>
  >
  addSites?: Resolver<
    Array<ResolversTypes['GraphQLSite']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddSitesArgs, 'sites'>
  >
  addTask?: Resolver<
    ResolversTypes['GraphQLTask'],
    ParentType,
    ContextType,
    RequireFields<
      MutationAddTaskArgs,
      'assignee' | 'description' | 'dueDate' | 'item' | 'name' | 'reportingSchemaId' | 'status'
    >
  >
  createTag?: Resolver<
    ResolversTypes['GraphQLTag'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateTagArgs, 'commitId' | 'name'>
  >
  createTypeCodeElement?: Resolver<
    ResolversTypes['GraphQLTypeCodeElement'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateTypeCodeElementArgs, 'code' | 'level' | 'name'>
  >
  createTypeCodeElementFromSource?: Resolver<
    ResolversTypes['GraphQLTypeCodeElement'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateTypeCodeElementFromSourceArgs, 'file'>
  >
  deleteAssemblies?: Resolver<
    Array<ResolversTypes['ID']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteAssembliesArgs, 'ids'>
  >
  deleteAssemblyLayers?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteAssemblyLayersArgs, 'id' | 'layers'>
  >
  deleteComment?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCommentArgs, 'id'>
  >
  deleteEpds?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteEpdsArgs, 'ids'>
  >
  deleteProject?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProjectArgs, 'id'>
  >
  deleteProjectAssemblies?: Resolver<
    Array<ResolversTypes['ID']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProjectAssembliesArgs, 'ids'>
  >
  deleteProjectAssemblyLayers?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProjectAssemblyLayersArgs, 'id' | 'layers'>
  >
  deleteProjectEpds?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProjectEpdsArgs, 'ids'>
  >
  deleteProjectGroup?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProjectGroupArgs, 'id'>
  >
  deleteProjectMember?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProjectMemberArgs, 'id'>
  >
  deleteProjectSource?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProjectSourceArgs, 'id'>
  >
  deleteProjectStage?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProjectStageArgs, 'projectId' | 'stageId'>
  >
  deleteReportingSchema?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteReportingSchemaArgs, 'id'>
  >
  deleteSchemaCategory?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteSchemaCategoryArgs, 'id'>
  >
  deleteSchemaElement?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteSchemaElementArgs, 'id'>
  >
  deleteSchemaTemplate?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteSchemaTemplateArgs, 'id'>
  >
  deleteSites?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteSitesArgs, 'ids'>
  >
  deleteTag?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationDeleteTagArgs, 'id'>>
  deleteTask?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationDeleteTaskArgs, 'id'>>
  deleteTypeCodeElement?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteTypeCodeElementArgs, 'id'>
  >
  removeProjectMembersFromGroup?: Resolver<
    ResolversTypes['GraphQLProjectGroup'],
    ParentType,
    ContextType,
    RequireFields<MutationRemoveProjectMembersFromGroupArgs, 'groupId' | 'memberIds'>
  >
  updateAssemblies?: Resolver<
    Array<ResolversTypes['GraphQLAssembly']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateAssembliesArgs, 'assemblies'>
  >
  updateAssemblyLayers?: Resolver<
    Array<ResolversTypes['GraphQLAssemblyLayer']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateAssemblyLayersArgs, 'id' | 'layers'>
  >
  updateComment?: Resolver<
    ResolversTypes['GraphQLComment'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCommentArgs, 'id' | 'text'>
  >
  updateProject?: Resolver<
    ResolversTypes['GraphQLProject'],
    ParentType,
    ContextType,
    RequireFields<
      MutationUpdateProjectArgs,
      | 'address'
      | 'city'
      | 'client'
      | 'country'
      | 'domain'
      | 'file'
      | 'id'
      | 'metaFields'
      | 'name'
      | 'projectId'
      | 'public'
    >
  >
  updateProjectAssemblies?: Resolver<
    Array<ResolversTypes['GraphQLProjectAssembly']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateProjectAssembliesArgs, 'assemblies'>
  >
  updateProjectAssemblyLayers?: Resolver<
    Array<ResolversTypes['GraphQLAssemblyLayer']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateProjectAssemblyLayersArgs, 'id' | 'layers'>
  >
  updateProjectGroup?: Resolver<
    ResolversTypes['GraphQLProjectGroup'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateProjectGroupArgs, 'id' | 'leadId' | 'name'>
  >
  updateProjectSource?: Resolver<
    ResolversTypes['GraphQLProjectSource'],
    ParentType,
    ContextType,
    RequireFields<
      MutationUpdateProjectSourceArgs,
      'dataId' | 'file' | 'id' | 'interpretation' | 'metaFields' | 'name' | 'speckleUrl' | 'type'
    >
  >
  updateReportingSchema?: Resolver<
    ResolversTypes['GraphQLReportingSchema'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateReportingSchemaArgs, 'id' | 'name' | 'projectId'>
  >
  updateSchemaCategory?: Resolver<
    ResolversTypes['GraphQLSchemaCategory'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateSchemaCategoryArgs, 'description' | 'id' | 'name' | 'path'>
  >
  updateSchemaElements?: Resolver<
    Array<ResolversTypes['GraphQLSchemaElement']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateSchemaElementsArgs, 'schemaElements'>
  >
  updateSchemaTemplate?: Resolver<
    ResolversTypes['GraphQLSchemaTemplate'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateSchemaTemplateArgs, 'id' | 'name'>
  >
  updateSites?: Resolver<
    Array<ResolversTypes['GraphQLSite']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateSitesArgs, 'sites'>
  >
  updateTag?: Resolver<
    ResolversTypes['GraphQLTag'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateTagArgs, 'commitId' | 'id' | 'name'>
  >
  updateTask?: Resolver<
    ResolversTypes['GraphQLTask'],
    ParentType,
    ContextType,
    RequireFields<
      MutationUpdateTaskArgs,
      'assignedGroupId' | 'assignee' | 'description' | 'dueDate' | 'id' | 'item' | 'name' | 'status'
    >
  >
  updateTypeCodeElement?: Resolver<
    ResolversTypes['GraphQLTypeCodeElement'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateTypeCodeElementArgs, 'code' | 'id' | 'level' | 'name'>
  >
}

export type PageInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo'],
> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  account?: Resolver<ResolversTypes['GraphQLUserAccount'], ParentType, ContextType>
  assemblies?: Resolver<
    Array<ResolversTypes['GraphQLAssembly']>,
    ParentType,
    ContextType,
    RequireFields<QueryAssembliesArgs, 'filters'>
  >
  calculateLca?: Resolver<
    ResolversTypes['Base64'],
    ParentType,
    ContextType,
    RequireFields<QueryCalculateLcaArgs, 'project'>
  >
  comments?: Resolver<
    Array<ResolversTypes['GraphQLComment']>,
    ParentType,
    ContextType,
    RequireFields<QueryCommentsArgs, 'filters' | 'taskId'>
  >
  commits?: Resolver<
    Array<ResolversTypes['GraphQLCommit']>,
    ParentType,
    ContextType,
    RequireFields<QueryCommitsArgs, 'filters' | 'reportingSchemaId'>
  >
  epds?: Resolver<
    ResolversTypes['GraphQLEPDConnection'],
    ParentType,
    ContextType,
    RequireFields<QueryEpdsArgs, 'count' | 'filters' | 'sortBy'>
  >
  exportReportingSchema?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<QueryExportReportingSchemaArgs, 'exportFormat' | 'reportingSchemaId'>
  >
  lifeCycleStages?: Resolver<Array<ResolversTypes['GraphQLLifeCycleStage']>, ParentType, ContextType>
  projectAssemblies?: Resolver<
    Array<ResolversTypes['GraphQLProjectAssembly']>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectAssembliesArgs, 'filters' | 'projectId'>
  >
  projectEpds?: Resolver<
    Array<ResolversTypes['GraphQLProjectEPD']>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectEpdsArgs, 'filters' | 'projectId'>
  >
  projectGroups?: Resolver<
    Array<ResolversTypes['GraphQLProjectGroup']>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectGroupsArgs, 'filters' | 'projectId'>
  >
  projectMembers?: Resolver<
    Array<ResolversTypes['GraphQLProjectMember']>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectMembersArgs, 'filters' | 'projectId'>
  >
  projectSources?: Resolver<
    Array<ResolversTypes['GraphQLProjectSource']>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectSourcesArgs, 'filters' | 'projectId'>
  >
  projectStages?: Resolver<
    Array<ResolversTypes['GraphQLProjectStage']>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectStagesArgs, 'projectId'>
  >
  projects?: Resolver<
    Array<ResolversTypes['GraphQLProject']>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectsArgs, 'filters'>
  >
  reportingSchemas?: Resolver<
    Array<ResolversTypes['GraphQLReportingSchema']>,
    ParentType,
    ContextType,
    RequireFields<QueryReportingSchemasArgs, 'filters' | 'projectId'>
  >
  schemaCategories?: Resolver<
    Array<ResolversTypes['GraphQLSchemaCategory']>,
    ParentType,
    ContextType,
    RequireFields<QuerySchemaCategoriesArgs, 'commitId' | 'filters' | 'reportingSchemaId'>
  >
  schemaElements?: Resolver<
    Array<ResolversTypes['GraphQLSchemaElement']>,
    ParentType,
    ContextType,
    RequireFields<QuerySchemaElementsArgs, 'commitId' | 'elementId' | 'filters' | 'schemaCategoryIds'>
  >
  schemaTemplates?: Resolver<
    Array<ResolversTypes['GraphQLSchemaTemplate']>,
    ParentType,
    ContextType,
    RequireFields<QuerySchemaTemplatesArgs, 'filters'>
  >
  sites?: Resolver<
    Array<ResolversTypes['GraphQLSite']>,
    ParentType,
    ContextType,
    RequireFields<QuerySitesArgs, 'filters'>
  >
  tags?: Resolver<
    Array<ResolversTypes['GraphQLTag']>,
    ParentType,
    ContextType,
    RequireFields<QueryTagsArgs, 'filters' | 'reportingSchemaId'>
  >
  tasks?: Resolver<
    Array<ResolversTypes['GraphQLTask']>,
    ParentType,
    ContextType,
    RequireFields<QueryTasksArgs, 'commitId' | 'filters' | 'reportingSchemaId'>
  >
  typeCodeElements?: Resolver<
    Array<ResolversTypes['GraphQLTypeCodeElement']>,
    ParentType,
    ContextType,
    Partial<QueryTypeCodeElementsArgs>
  >
}

export type Resolvers<ContextType = any> = {
  Base64?: GraphQLScalarType
  Date?: GraphQLScalarType
  DateTime?: GraphQLScalarType
  GraphQLAssembly?: GraphQlAssemblyResolvers<ContextType>
  GraphQLAssemblyLayer?: GraphQlAssemblyLayerResolvers<ContextType>
  GraphQLComment?: GraphQlCommentResolvers<ContextType>
  GraphQLCommit?: GraphQlCommitResolvers<ContextType>
  GraphQLConversion?: GraphQlConversionResolvers<ContextType>
  GraphQLEPD?: GraphQlepdResolvers<ContextType>
  GraphQLEPDBase?: GraphQlepdBaseResolvers<ContextType>
  GraphQLEPDConnection?: GraphQlepdConnectionResolvers<ContextType>
  GraphQLEPDEdge?: GraphQlepdEdgeResolvers<ContextType>
  GraphQLImpactCategories?: GraphQlImpactCategoriesResolvers<ContextType>
  GraphQLLifeCycleStage?: GraphQlLifeCycleStageResolvers<ContextType>
  GraphQLProject?: GraphQlProjectResolvers<ContextType>
  GraphQLProjectAssembly?: GraphQlProjectAssemblyResolvers<ContextType>
  GraphQLProjectEPD?: GraphQlProjectEpdResolvers<ContextType>
  GraphQLProjectGroup?: GraphQlProjectGroupResolvers<ContextType>
  GraphQLProjectMember?: GraphQlProjectMemberResolvers<ContextType>
  GraphQLProjectMemberGraphQLProjectGroup?: GraphQlProjectMemberGraphQlProjectGroupResolvers<ContextType>
  GraphQLProjectSource?: GraphQlProjectSourceResolvers<ContextType>
  GraphQLProjectStage?: GraphQlProjectStageResolvers<ContextType>
  GraphQLReportingCreationSchema?: GraphQlReportingCreationSchemaResolvers<ContextType>
  GraphQLReportingSchema?: GraphQlReportingSchemaResolvers<ContextType>
  GraphQLSchemaCategory?: GraphQlSchemaCategoryResolvers<ContextType>
  GraphQLSchemaElement?: GraphQlSchemaElementResolvers<ContextType>
  GraphQLSchemaElementGraphQLSchemaCategory?: GraphQlSchemaElementGraphQlSchemaCategoryResolvers<ContextType>
  GraphQLSchemaTemplate?: GraphQlSchemaTemplateResolvers<ContextType>
  GraphQLSite?: GraphQlSiteResolvers<ContextType>
  GraphQLSourceFile?: GraphQlSourceFileResolvers<ContextType>
  GraphQLTag?: GraphQlTagResolvers<ContextType>
  GraphQLTask?: GraphQlTaskResolvers<ContextType>
  GraphQLTypeCodeElement?: GraphQlTypeCodeElementResolvers<ContextType>
  GraphQLUserAccount?: GraphQlUserAccountResolvers<ContextType>
  JSON?: GraphQLScalarType
  Mutation?: MutationResolvers<ContextType>
  PageInfo?: PageInfoResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
}

export type DirectiveResolvers<ContextType = any> = {
  defer?: DeferDirectiveResolver<any, any, ContextType>
}

export type GetProjectAssembliesQueryVariables = Exact<{
  projectId: Scalars['String']
}>

export type GetProjectAssembliesQuery = {
  __typename?: 'Query'
  projectAssemblies: Array<{
    __typename?: 'GraphQLProjectAssembly'
    id: string
    name: string
    category: string
    gwp: number
    conversionFactor: number
    lifeTime: number
    unit: GraphQlAssemblyUnit
    projectId: string
    description?: string | null
    metaFields?: any | null
    layers: Array<{
      __typename?: 'GraphQLAssemblyLayer'
      id?: string | null
      name?: string | null
      epdId: string
      description?: string | null
      conversionFactor?: number | null
      referenceServiceLife?: number | null
      transportDistance?: number | null
      transportConversionFactor: number
      transportEpd?: { __typename?: 'GraphQLProjectEPD'; id: string; name: string; declaredUnit?: string | null } | null
    }>
  }>
}

export type GetProjectEpdsQueryVariables = Exact<{
  projectId: Scalars['String']
  filters?: InputMaybe<ProjectEpdFilters>
}>

export type GetProjectEpdsQuery = {
  __typename?: 'Query'
  projectEpds: Array<{
    __typename?: 'GraphQLProjectEPD'
    id: string
    name: string
    declaredUnit?: string | null
    referenceServiceLife?: number | null
  }>
}

export type GetProjectEpdQueryVariables = Exact<{
  projectId: Scalars['String']
  epdId: Scalars['String']
  a1a3?: InputMaybe<Scalars['Boolean']>
  a4?: InputMaybe<Scalars['Boolean']>
  a5?: InputMaybe<Scalars['Boolean']>
  b1?: InputMaybe<Scalars['Boolean']>
  b2?: InputMaybe<Scalars['Boolean']>
  b3?: InputMaybe<Scalars['Boolean']>
  b4?: InputMaybe<Scalars['Boolean']>
  b5?: InputMaybe<Scalars['Boolean']>
  b6?: InputMaybe<Scalars['Boolean']>
  b7?: InputMaybe<Scalars['Boolean']>
  c1?: InputMaybe<Scalars['Boolean']>
  c2?: InputMaybe<Scalars['Boolean']>
  c3?: InputMaybe<Scalars['Boolean']>
  c4?: InputMaybe<Scalars['Boolean']>
  d?: InputMaybe<Scalars['Boolean']>
}>

export type GetProjectEpdQuery = {
  __typename?: 'Query'
  projectEpds: Array<{
    __typename?: 'GraphQLProjectEPD'
    id: string
    name: string
    source: string
    version: string
    validUntil: any
    publishedDate: any
    location: string
    declaredUnit?: string | null
    subtype: string
    isTransport: boolean
    gwp?: {
      __typename?: 'GraphQLImpactCategories'
      a1a3?: number | null
      a4?: number | null
      a5?: number | null
      b1?: number | null
      b2?: number | null
      b3?: number | null
      b4?: number | null
      b5?: number | null
      b6?: number | null
      b7?: number | null
      c1?: number | null
      c2?: number | null
      c3?: number | null
      c4?: number | null
      d?: number | null
    } | null
  }>
}

export type GetProjectMembersQueryVariables = Exact<{
  projectId: Scalars['String']
}>

export type GetProjectMembersQuery = {
  __typename?: 'Query'
  projectMembers: Array<{
    __typename?: 'GraphQLProjectMember'
    id: string
    userId: string
    name: string
    email: string
    company?: string | null
    lastLogin?: any | null
    projectId: string
    projectGroups?: Array<{ __typename?: 'GraphQLProjectGroup'; id: string; name: string }> | null
  }>
}

export type GetAccountQueryVariables = Exact<{ [key: string]: never }>

export type GetAccountQuery = {
  __typename?: 'Query'
  account: { __typename?: 'GraphQLUserAccount'; id: string; name: string; email: string }
}

export type GetprojectStagesQueryVariables = Exact<{
  projectId: Scalars['String']
}>

export type GetprojectStagesQuery = {
  __typename?: 'Query'
  projectStages: Array<{
    __typename?: 'GraphQLProjectStage'
    stageId: string
    projectId: string
    name: string
    category: string
    phase: string
  }>
}

export type AddProjectAssembliesMutationVariables = Exact<{
  assemblies: Array<ProjectAssemblyAddInput> | ProjectAssemblyAddInput
}>

export type AddProjectAssembliesMutation = {
  __typename?: 'Mutation'
  addProjectAssemblies: Array<{ __typename?: 'GraphQLProjectAssembly'; name: string; category: string }>
}

export type UpdateProjectAssembliesMutationVariables = Exact<{
  assemblies: Array<ProjectAssemblyUpdateInput> | ProjectAssemblyUpdateInput
}>

export type UpdateProjectAssembliesMutation = {
  __typename?: 'Mutation'
  updateProjectAssemblies: Array<{ __typename?: 'GraphQLProjectAssembly'; name: string }>
}

export type DeleteProjectAssembliesMutationVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID']
}>

export type DeleteProjectAssembliesMutation = { __typename?: 'Mutation'; deleteProjectAssemblies: Array<string> }

export type AddProjectAssemblyLayersMutationVariables = Exact<{
  id: Scalars['ID']
  layers: Array<AssemblyLayerInput> | AssemblyLayerInput
}>

export type AddProjectAssemblyLayersMutation = {
  __typename?: 'Mutation'
  addProjectAssemblyLayers: Array<{ __typename?: 'GraphQLAssemblyLayer'; id?: string | null; name?: string | null }>
}

export type UpdateProjectAssemblyLayersMutationVariables = Exact<{
  id: Scalars['ID']
  layers: Array<AssemblyLayerUpdateInput> | AssemblyLayerUpdateInput
}>

export type UpdateProjectAssemblyLayersMutation = {
  __typename?: 'Mutation'
  updateProjectAssemblyLayers: Array<{ __typename?: 'GraphQLAssemblyLayer'; id?: string | null; name?: string | null }>
}

export type DeleteProjectAssemblyLayersMutationVariables = Exact<{
  id: Scalars['ID']
  layers: Array<Scalars['ID']> | Scalars['ID']
}>

export type DeleteProjectAssemblyLayersMutation = {
  __typename?: 'Mutation'
  deleteProjectAssemblyLayers: Array<string>
}

export const GetProjectAssembliesDocument = gql`
  query getProjectAssemblies($projectId: String!) {
    projectAssemblies(projectId: $projectId) {
      id
      name
      category
      gwp
      conversionFactor
      lifeTime
      unit
      projectId
      layers {
        id
        name
        epdId
        description
        conversionFactor
        referenceServiceLife
        transportEpd {
          id
          name
          declaredUnit
        }
        transportDistance
        transportConversionFactor
      }
      description
      metaFields
    }
  }
`

/**
 * __useGetProjectAssembliesQuery__
 *
 * To run a query within a React component, call `useGetProjectAssembliesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectAssembliesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectAssembliesQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useGetProjectAssembliesQuery(
  baseOptions: Apollo.QueryHookOptions<GetProjectAssembliesQuery, GetProjectAssembliesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProjectAssembliesQuery, GetProjectAssembliesQueryVariables>(
    GetProjectAssembliesDocument,
    options,
  )
}
export function useGetProjectAssembliesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetProjectAssembliesQuery, GetProjectAssembliesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProjectAssembliesQuery, GetProjectAssembliesQueryVariables>(
    GetProjectAssembliesDocument,
    options,
  )
}
export type GetProjectAssembliesQueryHookResult = ReturnType<typeof useGetProjectAssembliesQuery>
export type GetProjectAssembliesLazyQueryHookResult = ReturnType<typeof useGetProjectAssembliesLazyQuery>
export type GetProjectAssembliesQueryResult = Apollo.QueryResult<
  GetProjectAssembliesQuery,
  GetProjectAssembliesQueryVariables
>
export const GetProjectEpdsDocument = gql`
  query getProjectEpds($projectId: String!, $filters: ProjectEPDFilters) {
    projectEpds(projectId: $projectId, filters: $filters) {
      id
      name
      declaredUnit
      referenceServiceLife
    }
  }
`

/**
 * __useGetProjectEpdsQuery__
 *
 * To run a query within a React component, call `useGetProjectEpdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectEpdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectEpdsQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useGetProjectEpdsQuery(
  baseOptions: Apollo.QueryHookOptions<GetProjectEpdsQuery, GetProjectEpdsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProjectEpdsQuery, GetProjectEpdsQueryVariables>(GetProjectEpdsDocument, options)
}
export function useGetProjectEpdsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetProjectEpdsQuery, GetProjectEpdsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProjectEpdsQuery, GetProjectEpdsQueryVariables>(GetProjectEpdsDocument, options)
}
export type GetProjectEpdsQueryHookResult = ReturnType<typeof useGetProjectEpdsQuery>
export type GetProjectEpdsLazyQueryHookResult = ReturnType<typeof useGetProjectEpdsLazyQuery>
export type GetProjectEpdsQueryResult = Apollo.QueryResult<GetProjectEpdsQuery, GetProjectEpdsQueryVariables>
export const GetProjectEpdDocument = gql`
  query getProjectEpd(
    $projectId: String!
    $epdId: String!
    $a1a3: Boolean = false
    $a4: Boolean = false
    $a5: Boolean = false
    $b1: Boolean = false
    $b2: Boolean = false
    $b3: Boolean = false
    $b4: Boolean = false
    $b5: Boolean = false
    $b6: Boolean = false
    $b7: Boolean = false
    $c1: Boolean = false
    $c2: Boolean = false
    $c3: Boolean = false
    $c4: Boolean = false
    $d: Boolean = false
  ) {
    projectEpds(projectId: $projectId, filters: { id: { equal: $epdId } }) {
      id
      name
      source
      gwp {
        a1a3 @include(if: $a1a3)
        a4 @include(if: $a4)
        a5 @include(if: $a5)
        b1 @include(if: $b1)
        b2 @include(if: $b2)
        b3 @include(if: $b3)
        b4 @include(if: $b4)
        b5 @include(if: $b5)
        b6 @include(if: $b6)
        b7 @include(if: $b7)
        c1 @include(if: $c1)
        c2 @include(if: $c2)
        c3 @include(if: $c3)
        c4 @include(if: $c4)
        d @include(if: $d)
      }
      version
      validUntil
      publishedDate
      location
      declaredUnit
      subtype
      isTransport
    }
  }
`

/**
 * __useGetProjectEpdQuery__
 *
 * To run a query within a React component, call `useGetProjectEpdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectEpdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectEpdQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *      epdId: // value for 'epdId'
 *      a1a3: // value for 'a1a3'
 *      a4: // value for 'a4'
 *      a5: // value for 'a5'
 *      b1: // value for 'b1'
 *      b2: // value for 'b2'
 *      b3: // value for 'b3'
 *      b4: // value for 'b4'
 *      b5: // value for 'b5'
 *      b6: // value for 'b6'
 *      b7: // value for 'b7'
 *      c1: // value for 'c1'
 *      c2: // value for 'c2'
 *      c3: // value for 'c3'
 *      c4: // value for 'c4'
 *      d: // value for 'd'
 *   },
 * });
 */
export function useGetProjectEpdQuery(
  baseOptions: Apollo.QueryHookOptions<GetProjectEpdQuery, GetProjectEpdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProjectEpdQuery, GetProjectEpdQueryVariables>(GetProjectEpdDocument, options)
}
export function useGetProjectEpdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetProjectEpdQuery, GetProjectEpdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProjectEpdQuery, GetProjectEpdQueryVariables>(GetProjectEpdDocument, options)
}
export type GetProjectEpdQueryHookResult = ReturnType<typeof useGetProjectEpdQuery>
export type GetProjectEpdLazyQueryHookResult = ReturnType<typeof useGetProjectEpdLazyQuery>
export type GetProjectEpdQueryResult = Apollo.QueryResult<GetProjectEpdQuery, GetProjectEpdQueryVariables>
export const GetProjectMembersDocument = gql`
  query getProjectMembers($projectId: String!) {
    projectMembers(projectId: $projectId) {
      id
      userId
      name
      userId
      email
      company
      lastLogin
      projectId
      projectGroups {
        id
        name
      }
    }
  }
`

/**
 * __useGetProjectMembersQuery__
 *
 * To run a query within a React component, call `useGetProjectMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectMembersQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useGetProjectMembersQuery(
  baseOptions: Apollo.QueryHookOptions<GetProjectMembersQuery, GetProjectMembersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProjectMembersQuery, GetProjectMembersQueryVariables>(GetProjectMembersDocument, options)
}
export function useGetProjectMembersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetProjectMembersQuery, GetProjectMembersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProjectMembersQuery, GetProjectMembersQueryVariables>(
    GetProjectMembersDocument,
    options,
  )
}
export type GetProjectMembersQueryHookResult = ReturnType<typeof useGetProjectMembersQuery>
export type GetProjectMembersLazyQueryHookResult = ReturnType<typeof useGetProjectMembersLazyQuery>
export type GetProjectMembersQueryResult = Apollo.QueryResult<GetProjectMembersQuery, GetProjectMembersQueryVariables>
export const GetAccountDocument = gql`
  query getAccount {
    account {
      id
      name
      email
    }
  }
`

/**
 * __useGetAccountQuery__
 *
 * To run a query within a React component, call `useGetAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccountQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAccountQuery(baseOptions?: Apollo.QueryHookOptions<GetAccountQuery, GetAccountQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAccountQuery, GetAccountQueryVariables>(GetAccountDocument, options)
}
export function useGetAccountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAccountQuery, GetAccountQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAccountQuery, GetAccountQueryVariables>(GetAccountDocument, options)
}
export type GetAccountQueryHookResult = ReturnType<typeof useGetAccountQuery>
export type GetAccountLazyQueryHookResult = ReturnType<typeof useGetAccountLazyQuery>
export type GetAccountQueryResult = Apollo.QueryResult<GetAccountQuery, GetAccountQueryVariables>
export const GetprojectStagesDocument = gql`
  query getprojectStages($projectId: String!) {
    projectStages(projectId: $projectId) {
      stageId
      projectId
      name
      category
      phase
    }
  }
`

/**
 * __useGetprojectStagesQuery__
 *
 * To run a query within a React component, call `useGetprojectStagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetprojectStagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetprojectStagesQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useGetprojectStagesQuery(
  baseOptions: Apollo.QueryHookOptions<GetprojectStagesQuery, GetprojectStagesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetprojectStagesQuery, GetprojectStagesQueryVariables>(GetprojectStagesDocument, options)
}
export function useGetprojectStagesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetprojectStagesQuery, GetprojectStagesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetprojectStagesQuery, GetprojectStagesQueryVariables>(GetprojectStagesDocument, options)
}
export type GetprojectStagesQueryHookResult = ReturnType<typeof useGetprojectStagesQuery>
export type GetprojectStagesLazyQueryHookResult = ReturnType<typeof useGetprojectStagesLazyQuery>
export type GetprojectStagesQueryResult = Apollo.QueryResult<GetprojectStagesQuery, GetprojectStagesQueryVariables>
export const AddProjectAssembliesDocument = gql`
  mutation addProjectAssemblies($assemblies: [ProjectAssemblyAddInput!]!) {
    addProjectAssemblies(assemblies: $assemblies) {
      name
      category
    }
  }
`
export type AddProjectAssembliesMutationFn = Apollo.MutationFunction<
  AddProjectAssembliesMutation,
  AddProjectAssembliesMutationVariables
>

/**
 * __useAddProjectAssembliesMutation__
 *
 * To run a mutation, you first call `useAddProjectAssembliesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProjectAssembliesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProjectAssembliesMutation, { data, loading, error }] = useAddProjectAssembliesMutation({
 *   variables: {
 *      assemblies: // value for 'assemblies'
 *   },
 * });
 */
export function useAddProjectAssembliesMutation(
  baseOptions?: Apollo.MutationHookOptions<AddProjectAssembliesMutation, AddProjectAssembliesMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddProjectAssembliesMutation, AddProjectAssembliesMutationVariables>(
    AddProjectAssembliesDocument,
    options,
  )
}
export type AddProjectAssembliesMutationHookResult = ReturnType<typeof useAddProjectAssembliesMutation>
export type AddProjectAssembliesMutationResult = Apollo.MutationResult<AddProjectAssembliesMutation>
export type AddProjectAssembliesMutationOptions = Apollo.BaseMutationOptions<
  AddProjectAssembliesMutation,
  AddProjectAssembliesMutationVariables
>
export const UpdateProjectAssembliesDocument = gql`
  mutation updateProjectAssemblies($assemblies: [ProjectAssemblyUpdateInput!]!) {
    updateProjectAssemblies(assemblies: $assemblies) {
      name
    }
  }
`
export type UpdateProjectAssembliesMutationFn = Apollo.MutationFunction<
  UpdateProjectAssembliesMutation,
  UpdateProjectAssembliesMutationVariables
>

/**
 * __useUpdateProjectAssembliesMutation__
 *
 * To run a mutation, you first call `useUpdateProjectAssembliesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectAssembliesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectAssembliesMutation, { data, loading, error }] = useUpdateProjectAssembliesMutation({
 *   variables: {
 *      assemblies: // value for 'assemblies'
 *   },
 * });
 */
export function useUpdateProjectAssembliesMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateProjectAssembliesMutation, UpdateProjectAssembliesMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateProjectAssembliesMutation, UpdateProjectAssembliesMutationVariables>(
    UpdateProjectAssembliesDocument,
    options,
  )
}
export type UpdateProjectAssembliesMutationHookResult = ReturnType<typeof useUpdateProjectAssembliesMutation>
export type UpdateProjectAssembliesMutationResult = Apollo.MutationResult<UpdateProjectAssembliesMutation>
export type UpdateProjectAssembliesMutationOptions = Apollo.BaseMutationOptions<
  UpdateProjectAssembliesMutation,
  UpdateProjectAssembliesMutationVariables
>
export const DeleteProjectAssembliesDocument = gql`
  mutation deleteProjectAssemblies($ids: [ID!]!) {
    deleteProjectAssemblies(ids: $ids)
  }
`
export type DeleteProjectAssembliesMutationFn = Apollo.MutationFunction<
  DeleteProjectAssembliesMutation,
  DeleteProjectAssembliesMutationVariables
>

/**
 * __useDeleteProjectAssembliesMutation__
 *
 * To run a mutation, you first call `useDeleteProjectAssembliesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProjectAssembliesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProjectAssembliesMutation, { data, loading, error }] = useDeleteProjectAssembliesMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useDeleteProjectAssembliesMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteProjectAssembliesMutation, DeleteProjectAssembliesMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteProjectAssembliesMutation, DeleteProjectAssembliesMutationVariables>(
    DeleteProjectAssembliesDocument,
    options,
  )
}
export type DeleteProjectAssembliesMutationHookResult = ReturnType<typeof useDeleteProjectAssembliesMutation>
export type DeleteProjectAssembliesMutationResult = Apollo.MutationResult<DeleteProjectAssembliesMutation>
export type DeleteProjectAssembliesMutationOptions = Apollo.BaseMutationOptions<
  DeleteProjectAssembliesMutation,
  DeleteProjectAssembliesMutationVariables
>
export const AddProjectAssemblyLayersDocument = gql`
  mutation addProjectAssemblyLayers($id: ID!, $layers: [AssemblyLayerInput!]!) {
    addProjectAssemblyLayers(id: $id, layers: $layers) {
      id
      name
    }
  }
`
export type AddProjectAssemblyLayersMutationFn = Apollo.MutationFunction<
  AddProjectAssemblyLayersMutation,
  AddProjectAssemblyLayersMutationVariables
>

/**
 * __useAddProjectAssemblyLayersMutation__
 *
 * To run a mutation, you first call `useAddProjectAssemblyLayersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProjectAssemblyLayersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProjectAssemblyLayersMutation, { data, loading, error }] = useAddProjectAssemblyLayersMutation({
 *   variables: {
 *      id: // value for 'id'
 *      layers: // value for 'layers'
 *   },
 * });
 */
export function useAddProjectAssemblyLayersMutation(
  baseOptions?: Apollo.MutationHookOptions<AddProjectAssemblyLayersMutation, AddProjectAssemblyLayersMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddProjectAssemblyLayersMutation, AddProjectAssemblyLayersMutationVariables>(
    AddProjectAssemblyLayersDocument,
    options,
  )
}
export type AddProjectAssemblyLayersMutationHookResult = ReturnType<typeof useAddProjectAssemblyLayersMutation>
export type AddProjectAssemblyLayersMutationResult = Apollo.MutationResult<AddProjectAssemblyLayersMutation>
export type AddProjectAssemblyLayersMutationOptions = Apollo.BaseMutationOptions<
  AddProjectAssemblyLayersMutation,
  AddProjectAssemblyLayersMutationVariables
>
export const UpdateProjectAssemblyLayersDocument = gql`
  mutation updateProjectAssemblyLayers($id: ID!, $layers: [AssemblyLayerUpdateInput!]!) {
    updateProjectAssemblyLayers(id: $id, layers: $layers) {
      id
      name
    }
  }
`
export type UpdateProjectAssemblyLayersMutationFn = Apollo.MutationFunction<
  UpdateProjectAssemblyLayersMutation,
  UpdateProjectAssemblyLayersMutationVariables
>

/**
 * __useUpdateProjectAssemblyLayersMutation__
 *
 * To run a mutation, you first call `useUpdateProjectAssemblyLayersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectAssemblyLayersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectAssemblyLayersMutation, { data, loading, error }] = useUpdateProjectAssemblyLayersMutation({
 *   variables: {
 *      id: // value for 'id'
 *      layers: // value for 'layers'
 *   },
 * });
 */
export function useUpdateProjectAssemblyLayersMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateProjectAssemblyLayersMutation,
    UpdateProjectAssemblyLayersMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateProjectAssemblyLayersMutation, UpdateProjectAssemblyLayersMutationVariables>(
    UpdateProjectAssemblyLayersDocument,
    options,
  )
}
export type UpdateProjectAssemblyLayersMutationHookResult = ReturnType<typeof useUpdateProjectAssemblyLayersMutation>
export type UpdateProjectAssemblyLayersMutationResult = Apollo.MutationResult<UpdateProjectAssemblyLayersMutation>
export type UpdateProjectAssemblyLayersMutationOptions = Apollo.BaseMutationOptions<
  UpdateProjectAssemblyLayersMutation,
  UpdateProjectAssemblyLayersMutationVariables
>
export const DeleteProjectAssemblyLayersDocument = gql`
  mutation deleteProjectAssemblyLayers($id: ID!, $layers: [ID!]!) {
    deleteProjectAssemblyLayers(id: $id, layers: $layers)
  }
`
export type DeleteProjectAssemblyLayersMutationFn = Apollo.MutationFunction<
  DeleteProjectAssemblyLayersMutation,
  DeleteProjectAssemblyLayersMutationVariables
>

/**
 * __useDeleteProjectAssemblyLayersMutation__
 *
 * To run a mutation, you first call `useDeleteProjectAssemblyLayersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProjectAssemblyLayersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProjectAssemblyLayersMutation, { data, loading, error }] = useDeleteProjectAssemblyLayersMutation({
 *   variables: {
 *      id: // value for 'id'
 *      layers: // value for 'layers'
 *   },
 * });
 */
export function useDeleteProjectAssemblyLayersMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteProjectAssemblyLayersMutation,
    DeleteProjectAssemblyLayersMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteProjectAssemblyLayersMutation, DeleteProjectAssemblyLayersMutationVariables>(
    DeleteProjectAssemblyLayersDocument,
    options,
  )
}
export type DeleteProjectAssemblyLayersMutationHookResult = ReturnType<typeof useDeleteProjectAssemblyLayersMutation>
export type DeleteProjectAssemblyLayersMutationResult = Apollo.MutationResult<DeleteProjectAssemblyLayersMutation>
export type DeleteProjectAssemblyLayersMutationOptions = Apollo.BaseMutationOptions<
  DeleteProjectAssemblyLayersMutation,
  DeleteProjectAssemblyLayersMutationVariables
>
