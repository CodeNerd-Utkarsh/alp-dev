import { gql } from "@apollo/client";

export const FETCH_TEAM_MEMBER_DATA = gql`
  query teamMembers {
    teamMembers {
      id
      memberName
      memberRole
      linkedIn
      image{
        url
      }
      textContent {
        document(hydrateRelationships: false)
      }
    }
  }
`;

export const FETCH_SECTION_DATA = gql`
  query section($filter: SectionWhereUniqueInput!) {
    section(where: $filter) {
      id
      sectionName
      pageName
      sectionTitle
      image {
        url
      }
      textContent {
        document(hydrateRelationships: false)
      }
    }
  }
`;

export const FETCH_MULTIPLE_SECTIONS = gql`
  query sections($filter: SectionWhereInput!) {
    sections(where: $filter, orderBy: {order: asc}) {
      id
      sectionName
      pageName
      sectionTitle
      image {
        url
      }
      textContent {
        document(hydrateRelationships: false)
      }
    }
  }
`;

export const FETCH_VIDEO = gql`
  query video($filter: VideoWhereUniqueInput!) {
    video(where: $filter) {
      id
      videoTitle
      video {
        url
      }
    }
  }
`;

export const FETCH_MULTIPLE_BLOGS = gql`
  query blogs($filter: BlogWhereInput!) {
    blogs(where: $filter) {
      id
      blogTitle
      timePosted
      image {
        url
      }
      blogContent {
        document(hydrateRelationships: false)
      }
    }
  }
`;
