export interface Contest {
  name: string,
  prize: string[],
  cover_image: string,
  short_description: string,
  long_description: string,
  registration_deadline: Date,
  category?: "Schools" | "Tertiary" | null,
  tags: string[],
  timeline_events: {
    [event: string]: {
      start_date: Date,
      end_date: Date
    }
  }
};

export const contests: Contest[] = [
  {
    name: "Coding contest (primary)",
    prize: [ "Rs. 40,000", "Rs. 30,000", "Rs.20,000" ],
    cover_image: "/coding-contest-primary.png",
    short_description: "Coding contest for Grades 1-5 to build smart school life apps.",
    long_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat magna ac elementum pretium. Etiam ac tellus eget ligula placerat sollicitudin. Nam eget eros id lacus rutrum interdum. Duis a dolor eget nunc aliquam aliquet pellentesque nec neque. Etiam congue mauris non volutpat fermentum. In ullamcorper a elit eget porttitor. Integer commodo eros velit, ut eleifend erat vulputate porta. Sed molestie quam vel massa dapibus, nec dignissim felis dignissim. Cras sed mauris laoreet, mattis leo et, porttitor dolor.",
    registration_deadline: new Date("2025-08-15"),
    category: "Schools",
    tags: ["Featured", "Programming", "Primary"],
    timeline_events: {}
  },
  {
    name: "Coding contest (junior)",
    prize: [ "Rs. 40,000", "Rs. 30,000", "Rs.20,000" ],
    cover_image: "/coding-contest-junior.png",
    short_description: "Coding contest for Grades 1-5 to build smart school life apps.",
    long_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat magna ac elementum pretium. Etiam ac tellus eget ligula placerat sollicitudin. Nam eget eros id lacus rutrum interdum. Duis a dolor eget nunc aliquam aliquet pellentesque nec neque. Etiam congue mauris non volutpat fermentum. In ullamcorper a elit eget porttitor. Integer commodo eros velit, ut eleifend erat vulputate porta. Sed molestie quam vel massa dapibus, nec dignissim felis dignissim. Cras sed mauris laoreet, mattis leo et, porttitor dolor.",
    registration_deadline: new Date("2025-08-15"),
    category: "Schools",
    tags: ["Junior", "Programming", "Schools"],
    timeline_events: {}
  },
  {
    name: "Coding contest (senior)",
    prize: [ "Rs. 40,000", "Rs. 30,000", "Rs.20,000" ],
    cover_image: "/logo.png",
    short_description: "Coding contest for Grades 1-5 to build smart school life apps.",
    long_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat magna ac elementum pretium. Etiam ac tellus eget ligula placerat sollicitudin. Nam eget eros id lacus rutrum interdum. Duis a dolor eget nunc aliquam aliquet pellentesque nec neque. Etiam congue mauris non volutpat fermentum. In ullamcorper a elit eget porttitor. Integer commodo eros velit, ut eleifend erat vulputate porta. Sed molestie quam vel massa dapibus, nec dignissim felis dignissim. Cras sed mauris laoreet, mattis leo et, porttitor dolor.",
    registration_deadline: new Date("2025-08-15"),
    category: "Schools",
    tags: ["Senior", "Programming", "Schools"],
    timeline_events: {}
  },
  {
    name: "ICT Quiz",
    prize: [ "Rs. 40,000", "Rs. 30,000", "Rs.20,000" ],
    cover_image: "/ict-quiz.png",
    short_description: "Coding contest for Grades 1-5 to build smart school life apps.",
    long_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat magna ac elementum pretium. Etiam ac tellus eget ligula placerat sollicitudin. Nam eget eros id lacus rutrum interdum. Duis a dolor eget nunc aliquam aliquet pellentesque nec neque. Etiam congue mauris non volutpat fermentum. In ullamcorper a elit eget porttitor. Integer commodo eros velit, ut eleifend erat vulputate porta. Sed molestie quam vel massa dapibus, nec dignissim felis dignissim. Cras sed mauris laoreet, mattis leo et, porttitor dolor.",
    registration_deadline: new Date("2025-08-15"),
    category: "Schools",
    tags: ["Quiz", "Knowledge", "ICT"],
    timeline_events: {}
  },
  {
    name: "AI Competition",
    prize: [ "Rs. 40,000", "Rs. 30,000", "Rs.20,000" ],
    cover_image: "/logo.png",
    short_description: "Coding contest for Grades 1-5 to build smart school life apps.",
    long_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat magna ac elementum pretium. Etiam ac tellus eget ligula placerat sollicitudin. Nam eget eros id lacus rutrum interdum. Duis a dolor eget nunc aliquam aliquet pellentesque nec neque. Etiam congue mauris non volutpat fermentum. In ullamcorper a elit eget porttitor. Integer commodo eros velit, ut eleifend erat vulputate porta. Sed molestie quam vel massa dapibus, nec dignissim felis dignissim. Cras sed mauris laoreet, mattis leo et, porttitor dolor.",
    registration_deadline: new Date("2025-08-15"),
    category: "Schools",
    tags: ["AI", "Machine Learning", "Featured"],
    timeline_events: {}
  },
  {
    name: "Algothon",
    prize: [ "Rs. 40,000", "Rs. 30,000", "Rs.20,000" ],
    cover_image: "/logo.png",
    short_description: "Coding contest for Grades 1-5 to build smart school life apps.",
    long_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat magna ac elementum pretium. Etiam ac tellus eget ligula placerat sollicitudin. Nam eget eros id lacus rutrum interdum. Duis a dolor eget nunc aliquam aliquet pellentesque nec neque. Etiam congue mauris non volutpat fermentum. In ullamcorper a elit eget porttitor. Integer commodo eros velit, ut eleifend erat vulputate porta. Sed molestie quam vel massa dapibus, nec dignissim felis dignissim. Cras sed mauris laoreet, mattis leo et, porttitor dolor.",
    registration_deadline: new Date("2025-08-15"),
    category: "Tertiary",
    tags: ["Algorithms", "Hackathon", "Programming"],
    timeline_events: {}
  },
  {
    name: "DevQuest",
    prize: [ "Rs. 55,000", "Rs. 40,000", "Rs. 30,000" ],
    cover_image: "/logo.png",
    short_description: "Coding contest for Grades 1-5 to build smart school life apps.",
    long_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat magna ac elementum pretium. Etiam ac tellus eget ligula placerat sollicitudin. Nam eget eros id lacus rutrum interdum. Duis a dolor eget nunc aliquam aliquet pellentesque nec neque. Etiam congue mauris non volutpat fermentum. In ullamcorper a elit eget porttitor. Integer commodo eros velit, ut eleifend erat vulputate porta. Sed molestie quam vel massa dapibus, nec dignissim felis dignissim. Cras sed mauris laoreet, mattis leo et, porttitor dolor.",
    registration_deadline: new Date("2025-08-15"),
    category: "Tertiary",
    tags: ["Development", "Quest", "Web Dev"],
    timeline_events: {}
  },
  {
    name: "Datathon",
    prize: [ "Rs. 40,000", "Rs. 30,000", "Rs.20,000" ],
    cover_image: "/logo.png",
    short_description: "Coding contest for Grades 1-5 to build smart school life apps.",
    long_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat magna ac elementum pretium. Etiam ac tellus eget ligula placerat sollicitudin. Nam eget eros id lacus rutrum interdum. Duis a dolor eget nunc aliquam aliquet pellentesque nec neque. Etiam congue mauris non volutpat fermentum. In ullamcorper a elit eget porttitor. Integer commodo eros velit, ut eleifend erat vulputate porta. Sed molestie quam vel massa dapibus, nec dignissim felis dignissim. Cras sed mauris laoreet, mattis leo et, porttitor dolor.",
    registration_deadline: new Date("2025-08-15"),
    category: "Tertiary",
    tags: ["Data Science", "Analytics", "Hackathon"],
    timeline_events: {}
  },
  {
    name: "Capture the Flag",
    prize: [ "Rs. 40,000", "Rs. 30,000", "Rs.20,000" ],
    cover_image: "/logo.png",
    short_description: "Coding contest for Grades 1-5 to build smart school life apps.",
    long_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat magna ac elementum pretium. Etiam ac tellus eget ligula placerat sollicitudin. Nam eget eros id lacus rutrum interdum. Duis a dolor eget nunc aliquam aliquet pellentesque nec neque. Etiam congue mauris non volutpat fermentum. In ullamcorper a elit eget porttitor. Integer commodo eros velit, ut eleifend erat vulputate porta. Sed molestie quam vel massa dapibus, nec dignissim felis dignissim. Cras sed mauris laoreet, mattis leo et, porttitor dolor.",
    registration_deadline: new Date("2025-08-15"),
    category: "Tertiary",
    tags: ["Security", "CTF", "Cybersecurity"],
    timeline_events: {}
  },
  {
    name: "Netcom",
    prize: [ "Rs. 40,000", "Rs. 30,000", "Rs.20,000" ],
    cover_image: "/logo.png",
    short_description: "Coding contest for Grades 1-5 to build smart school life apps.",
    long_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat magna ac elementum pretium. Etiam ac tellus eget ligula placerat sollicitudin. Nam eget eros id lacus rutrum interdum. Duis a dolor eget nunc aliquam aliquet pellentesque nec neque. Etiam congue mauris non volutpat fermentum. In ullamcorper a elit eget porttitor. Integer commodo eros velit, ut eleifend erat vulputate porta. Sed molestie quam vel massa dapibus, nec dignissim felis dignissim. Cras sed mauris laoreet, mattis leo et, porttitor dolor.",
    registration_deadline: new Date("2025-08-15"),
    category: "Tertiary",
    tags: ["Network", "Computing", "Infrastructure"],
    timeline_events: {}
  },
  {
    name: "AI Hackathon",
    prize: [ "Rs. 40,000", "Rs. 30,000", "Rs.20,000" ],
    cover_image: "/logo.png",
    short_description: "Coding contest for Grades 1-5 to build smart school life apps.",
    long_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat magna ac elementum pretium. Etiam ac tellus eget ligula placerat sollicitudin. Nam eget eros id lacus rutrum interdum. Duis a dolor eget nunc aliquam aliquet pellentesque nec neque. Etiam congue mauris non volutpat fermentum. In ullamcorper a elit eget porttitor. Integer commodo eros velit, ut eleifend erat vulputate porta. Sed molestie quam vel massa dapibus, nec dignissim felis dignissim. Cras sed mauris laoreet, mattis leo et, porttitor dolor.",
    registration_deadline: new Date("2025-08-15"),
    category: "Tertiary",
    tags: ["AI", "Hackathon", "Machine Learning"],
    timeline_events: {}
  },
  {
    name: "INNOV IoT",
    prize: [ "Rs. 40,000", "Rs. 30,000", "Rs.20,000" ],
    cover_image: "/logo.png",
    short_description: "Coding contest for Grades 1-5 to build smart school life apps.",
    long_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat magna ac elementum pretium. Etiam ac tellus eget ligula placerat sollicitudin. Nam eget eros id lacus rutrum interdum. Duis a dolor eget nunc aliquam aliquet pellentesque nec neque. Etiam congue mauris non volutpat fermentum. In ullamcorper a elit eget porttitor. Integer commodo eros velit, ut eleifend erat vulputate porta. Sed molestie quam vel massa dapibus, nec dignissim felis dignissim. Cras sed mauris laoreet, mattis leo et, porttitor dolor.",
    registration_deadline: new Date("2025-08-15"),
    category: "Tertiary",
    tags: ["IoT", "Innovation", "Hardware"],
    timeline_events: {}
  },
  {
    name: "Technopreneur",
    prize: [ "Rs. 40,000", "Rs. 30,000", "Rs.20,000" ],
    cover_image: "/logo.png",
    short_description: "Coding contest for Grades 1-5 to build smart school life apps.",
    long_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat magna ac elementum pretium. Etiam ac tellus eget ligula placerat sollicitudin. Nam eget eros id lacus rutrum interdum. Duis a dolor eget nunc aliquam aliquet pellentesque nec neque. Etiam congue mauris non volutpat fermentum. In ullamcorper a elit eget porttitor. Integer commodo eros velit, ut eleifend erat vulputate porta. Sed molestie quam vel massa dapibus, nec dignissim felis dignissim. Cras sed mauris laoreet, mattis leo et, porttitor dolor.",
    registration_deadline: new Date("2025-08-15"),
    category: "Tertiary",
    tags: ["Entrepreneurship", "Business", "Innovation"],
    timeline_events: {}
  },
  {
    name: "Revivenation",
    prize: [ "Rs. 40,000", "Rs. 30,000", "Rs.20,000" ],
    cover_image: "/logo.png",
    short_description: "Coding contest for Grades 1-5 to build smart school life apps.",
    long_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat magna ac elementum pretium. Etiam ac tellus eget ligula placerat sollicitudin. Nam eget eros id lacus rutrum interdum. Duis a dolor eget nunc aliquam aliquet pellentesque nec neque. Etiam congue mauris non volutpat fermentum. In ullamcorper a elit eget porttitor. Integer commodo eros velit, ut eleifend erat vulputate porta. Sed molestie quam vel massa dapibus, nec dignissim felis dignissim. Cras sed mauris laoreet, mattis leo et, porttitor dolor.",
    registration_deadline: new Date("2025-08-15"),
    category: "Tertiary",
    tags: ["Environment", "Sustainability", "Innovation"],
    timeline_events: {}
  },
];

