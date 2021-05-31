import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** The InputType for creating a certificate. */
export type AddCertificateType = {
  /** The title of the certificate. */
  title: Scalars['String'];
  /** The issuer of the certificate. */
  issuer: Scalars['String'];
  /** The certification's ID. */
  certificateID: Scalars['String'];
  /** The certificate's website. */
  url?: Maybe<Scalars['String']>;
  /** The year the certificate was completed. */
  completionDate: Scalars['String'];
};

/** The InputType for creating a project. */
export type AddProjectType = {
  /** The title of the project. */
  title: Scalars['String'];
  /** The description of the project. */
  description: Scalars['String'];
  /** The technologies used in this project. */
  technologies: Array<Scalars['String']>;
  /** The project's source code or website. */
  url?: Maybe<Scalars['String']>;
  /** The year the project was completed. */
  completionDate: Scalars['String'];
};

/** The Admin Model. */
export type Admin = {
  __typename?: 'Admin';
  /** The Admin's ID. */
  id: Scalars['ID'];
  /** The Admin's username. */
  username: Scalars['String'];
};

/** The Certificate Model. */
export type Certificate = {
  __typename?: 'Certificate';
  /** The certificate's ID. */
  id: Scalars['ID'];
  /** The title of the certificate. */
  title: Scalars['String'];
  /** The issuer of the certificate. */
  issuer: Scalars['String'];
  /** The certificate's URL. */
  url: Scalars['String'];
  /** The certification's ID. */
  certificateID: Scalars['String'];
  /** The year the certificate was received. */
  completionDate: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a new certificate. */
  addCertificate: Certificate;
  /** Deletes a certificate by its ID. */
  deleteCertificate: Scalars['Boolean'];
  /** Updates a a specific certificate by its ID. */
  updateCertificate: Certificate;
  /** Creates a new project. */
  addProject: Project;
  /** Deletes a project by its ID. */
  deleteProject: Scalars['Boolean'];
  /** Updates a a specific project by its ID. */
  updateProject: Project;
  /** Register an admin. */
  registerAdmin: Admin;
  /** Login an admin. */
  loginAdmin?: Maybe<Admin>;
  /** Logs out an admin. */
  logout: Scalars['Boolean'];
  /** Send an email from the user to me. */
  contactMe: Scalars['Boolean'];
};


export type MutationAddCertificateArgs = {
  data: AddCertificateType;
};


export type MutationDeleteCertificateArgs = {
  id: Scalars['String'];
};


export type MutationUpdateCertificateArgs = {
  data: UpdateCertificateType;
};


export type MutationAddProjectArgs = {
  data: AddProjectType;
};


export type MutationDeleteProjectArgs = {
  id: Scalars['String'];
};


export type MutationUpdateProjectArgs = {
  data: UpdateProjectType;
};


export type MutationRegisterAdminArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationLoginAdminArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationContactMeArgs = {
  message: Scalars['String'];
  subject: Scalars['String'];
  from: Scalars['String'];
};

/** The Project Model. */
export type Project = {
  __typename?: 'Project';
  /** The project's ID. */
  id: Scalars['ID'];
  /** The title of the project. */
  title: Scalars['String'];
  /** The description of the project. */
  description: Scalars['String'];
  /** The technologies used in this project. */
  technologies: Array<Scalars['String']>;
  /** The project's source code or website. */
  url?: Maybe<Scalars['String']>;
  /** The year the project was completed. */
  completionDate: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** Gets all the certificates in the database. */
  certificates: Array<Certificate>;
  /** Gets a certificate by its ID. */
  certificate: Certificate;
  /** Gets all the projects in the database. */
  projects: Array<Project>;
  /** Gets a project by its ID. */
  project: Project;
  /** Get logged in admin */
  me?: Maybe<Admin>;
};


export type QueryCertificateArgs = {
  id: Scalars['String'];
};


export type QueryProjectArgs = {
  id: Scalars['String'];
};

/** The InputType for updating a certificate. */
export type UpdateCertificateType = {
  /** The certificate's ID. */
  id: Scalars['ID'];
  /** The title of the certificate. */
  title?: Maybe<Scalars['String']>;
  /** The issuer of the certificate. */
  issuer?: Maybe<Scalars['String']>;
  /** The certification's ID. */
  certificateID?: Maybe<Scalars['String']>;
  /** The certificate's website. */
  url?: Maybe<Scalars['String']>;
  /** The year the certificate was completed. */
  completionDate?: Maybe<Scalars['String']>;
};

/** The InputType for updating a project. */
export type UpdateProjectType = {
  /** The project's ID. */
  id: Scalars['ID'];
  /** The title of the project. */
  title?: Maybe<Scalars['String']>;
  /** The description of the project. */
  description?: Maybe<Scalars['String']>;
  /** The technologies used in this project. */
  technologies?: Maybe<Array<Scalars['String']>>;
  /** The project's source code or website. */
  url?: Maybe<Scalars['String']>;
  /** The year the project was completed. */
  completionDate?: Maybe<Scalars['String']>;
};

export type ContactMeMutationVariables = Exact<{
  from: Scalars['String'];
  subject: Scalars['String'];
  message: Scalars['String'];
}>;


export type ContactMeMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'contactMe'>
);

export type CertificatesQueryVariables = Exact<{ [key: string]: never; }>;


export type CertificatesQuery = (
  { __typename?: 'Query' }
  & { certificates: Array<(
    { __typename?: 'Certificate' }
    & Pick<Certificate, 'id' | 'title' | 'issuer' | 'certificateID' | 'completionDate' | 'url'>
  )> }
);

export type ProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsQuery = (
  { __typename?: 'Query' }
  & { projects: Array<(
    { __typename?: 'Project' }
    & Pick<Project, 'id' | 'title' | 'description' | 'technologies' | 'completionDate' | 'url'>
  )> }
);


export const ContactMeDocument = gql`
    mutation ContactMe($from: String!, $subject: String!, $message: String!) {
  contactMe(from: $from, subject: $subject, message: $message)
}
    `;
export type ContactMeMutationFn = Apollo.MutationFunction<ContactMeMutation, ContactMeMutationVariables>;

/**
 * __useContactMeMutation__
 *
 * To run a mutation, you first call `useContactMeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContactMeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contactMeMutation, { data, loading, error }] = useContactMeMutation({
 *   variables: {
 *      from: // value for 'from'
 *      subject: // value for 'subject'
 *      message: // value for 'message'
 *   },
 * });
 */
export function useContactMeMutation(baseOptions?: Apollo.MutationHookOptions<ContactMeMutation, ContactMeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ContactMeMutation, ContactMeMutationVariables>(ContactMeDocument, options);
      }
export type ContactMeMutationHookResult = ReturnType<typeof useContactMeMutation>;
export type ContactMeMutationResult = Apollo.MutationResult<ContactMeMutation>;
export type ContactMeMutationOptions = Apollo.BaseMutationOptions<ContactMeMutation, ContactMeMutationVariables>;
export const CertificatesDocument = gql`
    query Certificates {
  certificates {
    id
    title
    issuer
    certificateID
    completionDate
    url
  }
}
    `;

/**
 * __useCertificatesQuery__
 *
 * To run a query within a React component, call `useCertificatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCertificatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCertificatesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCertificatesQuery(baseOptions?: Apollo.QueryHookOptions<CertificatesQuery, CertificatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CertificatesQuery, CertificatesQueryVariables>(CertificatesDocument, options);
      }
export function useCertificatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CertificatesQuery, CertificatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CertificatesQuery, CertificatesQueryVariables>(CertificatesDocument, options);
        }
export type CertificatesQueryHookResult = ReturnType<typeof useCertificatesQuery>;
export type CertificatesLazyQueryHookResult = ReturnType<typeof useCertificatesLazyQuery>;
export type CertificatesQueryResult = Apollo.QueryResult<CertificatesQuery, CertificatesQueryVariables>;
export const ProjectsDocument = gql`
    query Projects {
  projects {
    id
    title
    description
    technologies
    completionDate
    url
  }
}
    `;

/**
 * __useProjectsQuery__
 *
 * To run a query within a React component, call `useProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProjectsQuery(baseOptions?: Apollo.QueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
      }
export function useProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
        }
export type ProjectsQueryHookResult = ReturnType<typeof useProjectsQuery>;
export type ProjectsLazyQueryHookResult = ReturnType<typeof useProjectsLazyQuery>;
export type ProjectsQueryResult = Apollo.QueryResult<ProjectsQuery, ProjectsQueryVariables>;