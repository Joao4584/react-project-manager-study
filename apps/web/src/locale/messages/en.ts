export default {
  homepage: {
    construction: {
      title: "Project under Construction",
      description: "We are working hard to bring you something amazing. Stay tuned!",
      button: {
        github: "Access GitHub"
      }
    }
  },
  dashboard: {
    routes: {
      dashboard: "Dashboard",
      class: "Class",
    },
    header:{
      document: "View Github"
    },
    notFound: {
      title: "Page Not Found",
      description: "Sorry, this page is down or does not exist.",
      link: "Go to Dashboard",
      document: "View documentation"
    }
  }
} as const;
