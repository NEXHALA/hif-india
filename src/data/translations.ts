export type Language = 'en' | 'kn' | 'hi'

export interface LanguageOption {
  code: Language
  label: string
  nativeLabel: string
  shortLabel: string
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', nativeLabel: 'English', shortLabel: 'EN' },
  { code: 'kn', label: 'Kannada', nativeLabel: 'ಕನ್ನಡ', shortLabel: 'ಕ' },
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी', shortLabel: 'हि' }
]

export interface TranslationDictionary {
  nav: {
    home: string
    about: string
    projects: string
    activities: string
    gallery: string
    getInvolved: string
    contact: string
    donate: string
    donateNow: string
    menu: string
    closeMenu: string
    language: string
  }
  org: {
    name: string
    fullName: string
    tagline: string
    shortTagline: string
    established: string
    regDetails: string
    slogan: string
    sloganShort: string
    auditBadge: string
    addressLabel: string
    hqLocation: string
    centralSecretariat: string
    phoneLabel: string
    emailLabel: string
    websiteLabel: string
    workingHours: string
    workingHoursVal: string
  }
  common: {
    donateNow: string
    viewDetails: string
    exploreProjects: string
    exploreActivities: string
    learnMore: string
    joinAsVolunteer: string
    backToProjects: string
    backToActivities: string
    backToHome: string
    close: string
    submit: string
    submitting: string
    copy: string
    copied: string
    download: string
    share: string
    filterAll: string
    readMore: string
    viewAll: string
    search: string
    send: string
    sending: string
    seeImpact: string
    pledgeNow: string
    transparent: string
    zeroCommission: string
    verified: string
    monthly: string
    oneTime: string
    all: string
    loading: string
    success: string
    error: string
    sendAnother: string
    next: string
    prev: string
    required: string
    optional: string
    or: string
    call: string
    dayMode: string
    nightMode: string
    now: string
  }
  hero: {
    establishedBadge: string
    title: string
    subtitle: string
    donateCta: string
    donateBannerTitle: string
    impactCta: string
    activeVolunteers: string
    emergencyFundBanner: string
    emergencyFundTitle: string
    emergencyFundDesc: string
    liveCounters: string
  }
  about: {
    eyebrow: string
    title: string
    description: string
    whoWeAreBadge: string
    whoWeAreTitle: string
    whoWeAreText1: string
    whoWeAreText2: string
    teamBadge: string
    teamTitle: string
    teamDesc: string
    teamPhotoAlt: string
    viewPhoto: string
    whoWeArePhotoAlt: string
    visionTitle: string
    visionText: string
    missionTitle: string
    missionText: string
    coreValuesTitle: string
    coreValuesSubtitle: string
    values: {
      transparencyTitle: string
      transparencyDesc: string
      compassionTitle: string
      compassionDesc: string
      dignityTitle: string
      dignityDesc: string
      sustainabilityTitle: string
      sustainabilityDesc: string
    }
    historyTitle: string
    historyText: string
    boardTitle: string
    boardSubtitle: string
    pillarsTitle: string
    pillarsSubtitle: string
    pillarsDesc: string
    trustTitle: string
    trustPoint1: string
    trustPoint2: string
    trustPoint3: string
    trustPoint4: string
    hqTitle: string
  }
  stats: {
    housesDelivered: string
    housesSubtext: string
    masjidsRevived: string
    masjidsSubtext: string
    orphansNurtured: string
    orphansSubtext: string
    bloodUnits: string
    bloodSubtext: string
    auditTransparency: string
    auditSubtext: string
  }
  pillars: {
    housingTitle: string
    housingDesc: string
    orphanCareTitle: string
    orphanCareDesc: string
    masjidRevivalTitle: string
    masjidRevivalDesc: string
    healthcareTitle: string
    healthcareDesc: string
  }
  projects: {
    eyebrow: string
    title: string
    subtitle: string
    allProgramsBadge: string
    allProgramsTitle: string
    viewAll: string
    achievementsTitle: string
    futureGoalsTitle: string
    tiersTitle: string
    beforeAfterTitle: string
    beforeLabel: string
    afterLabel: string
    afterComingSoon: string
    ashiyana: {
      title: string
      subtitle: string
      badge: string
      overview: string
      statHomesBuilt: string
      statTarget: string
      statAvgCost: string
    }
    chittor: {
      title: string
      subtitle: string
      badge: string
      overview: string
      statBoys: string
      statCampus: string
      statCurriculum: string
    }
    masjid: {
      title: string
      subtitle: string
      badge: string
      overview: string
      statReopened: string
      statNewBuilt: string
      statReach: string
    }
    educationCity: {
      title: string
      subtitle: string
      badge: string
      overview: string
    }
    boondh: {
      title: string
      subtitle: string
      badge: string
      overview: string
    }
    libaas: {
      title: string
      subtitle: string
      badge: string
      overview: string
    }
  }
  activities: {
    eyebrow: string
    title: string
    subtitle: string
    wingsBadge: string
    wingsTitle: string
    featuresTitle: string
    impactTitle: string
    medical: {
      title: string
      subtitle: string
      badge: string
      overview: string
      statBlood: string
      statEquipment: string
      statHelpline: string
    }
    education: {
      title: string
      subtitle: string
      badge: string
      overview: string
      statStudents: string
      statScholarships: string
      statCamps: string
    }
    youth: {
      title: string
      subtitle: string
      badge: string
      overview: string
      statVolunteers: string
      statWorkshops: string
      statDrives: string
    }
    womenSkill: {
      title: string
      subtitle: string
      badge: string
      overview: string
    }
    disasterRelief: {
      title: string
      subtitle: string
      badge: string
      overview: string
    }
  }
  gallery: {
    eyebrow: string
    title: string
    subtitle: string
    filters: {
      all: string
      housing: string
      orphanage: string
      masjid: string
      healthcare: string
      education: string
      community: string
      youth: string
    }
    emptyMessage: string
  }
  reels: {
    eyebrow: string
    title: string
    subtitle: string
    previous: string
    next: string
    viewReel: string
    followUs: string
    mute: string
    unmute: string
  }
  featureVideos: {
    eyebrow: string
    title: string
    subtitle: string
    previous: string
    next: string
    viewVideo: string
    mute: string
    unmute: string
  }
  getInvolved: {
    eyebrow: string
    title: string
    description: string
    calculatorBadge: string
    calculatorTitle: string
    calculatorSubtitle: string
    volunteerBadge: string
    volunteerTitle: string
    volunteerSubtitle: string
    form: {
      fullName: string
      fullNamePlaceholder: string
      email: string
      emailPlaceholder: string
      phone: string
      phonePlaceholder: string
      city: string
      cityPlaceholder: string
      skillsLabel: string
      availableHours: string
      availableHoursPlaceholder: string
      notes: string
      notesPlaceholder: string
      submitButton: string
      submittingButton: string
      submitError: string
      whatsAppButton: string
      successTitle: string
      successMessage: string
      submitAnother: string
    }
    skills: {
      bloodDonation: string
      teaching: string
      disasterResponse: string
      mediaDesign: string
      fieldVerification: string
      eventLogistics: string
    }
    bankCard: {
      title: string
      subtitle: string
      accountName: string
      accountNumber: string
      ifsc: string
      branch: string
      upiId: string
      taxNote: string
      copyDetails: string
    }
    faqTitle: string
    faqSubtitle: string
    faqs: {
      q1: string
      a1: string
      q2: string
      a2: string
      q3: string
      a3: string
      q4: string
      a4: string
    }
  }
  contact: {
    eyebrow: string
    title: string
    description: string
    centralSecretariat: string
    hours: string
    hoursValue: string
    primaryPhoneLabel: string
    altPhoneLabel: string
    emailLabel: string
    formTitle: string
    formSubtitle: string
    nameLabel: string
    namePlaceholder: string
    emailInputLabel: string
    emailPlaceholder: string
    phoneInputLabel: string
    phonePlaceholder: string
    subjectLabel: string
    subjectPlaceholder: string
    subjects: {
      general: string
      donation: string
      volunteer: string
      medical: string
      partnership: string
      other: string
    }
    messageFieldLabel: string
    messagePlaceholder: string
    sendMessage: string
    sendingMessage: string
    submitError: string
    whatsAppButton: string
    whatsAppHint: string
    messageSentTitle: string
    messageSentText: string
    sendAnother: string
  }
  donateModal: {
    title: string
    subtitle: string
    forCause: string
    generalFund: string
    presetAmounts: string
    customAmount: string
    customAmountPlaceholder: string
    tabScanQr: string
    tabBankTransfer: string
    fastestBadge: string
    beneficiaryName: string
    accountNumber: string
    ifscCode: string
    branch: string
    branchValue: string
    upiId: string
    scanQr: string
    showQr: string
    hideQr: string
    qrHelp: string
    qrSecurityTitle: string
    qrSecurityNote: string
    tax80GNote: string
    notifyWhatsapp: string
    close: string
    copiedToast: string
  }
  footer: {
    aboutText: string
    zeroCommission: string
    exploreTitle: string
    programsTitle: string
    supportUs: string
    bankAccount: string
    donateQr: string
    allRightsReserved: string
    addressFull: string
    slogan: string
    developedBy: string
  }
  legal: {
    lastUpdated: string
    lastUpdatedDate: string
    relatedNav: string
    orgRegisteredHq: string
    termsTitle: string
    termsDesc: string
    privacyTitle: string
    privacyDesc: string
    refundTitle: string
    refundDesc: string
    cancellationTitle: string
    cancellationDesc: string
    terms: {
      aboutTitle: string
      aboutBody: string
      whatWeDoTitle: string
      whatWeDoBody: string
      whatWeDoListIntro: string
      programAshiyana: string
      programChitoor: string
      programMasjid: string
      programMedical: string
      donationsTitle: string
      donationsBody1: string
      donationsBody2: string
      donationsBody3: string
      donationsBody4: string
      responsibilitiesTitle: string
      responsibilitiesBody: string
      contentTitle: string
      contentBody: string
      paymentsTitle: string
      paymentsBody: string
      ipTitle: string
      ipBody: string
      liabilityTitle: string
      liabilityBody: string
      lawTitle: string
      lawBody: string
      changesTitle: string
      changesBody: string
    }
    privacy: {
      whoTitle: string
      whoBody: string
      collectTitle: string
      collectIntro: string
      collectForm: string
      collectDonation: string
      collectPayment: string
      collectPrefs: string
      useTitle: string
      useIntro: string
      useConfirm: string
      use80g: string
      useReply: string
      useBooks: string
      useProtect: string
      useNoSell: string
      shareTitle: string
      shareIntro: string
      shareRazorpay: string
      shareBank: string
      shareAudit: string
      shareHost: string
      shareProviders: string
      retainTitle: string
      retainBody: string
      choicesTitle: string
      choicesBody: string
      childrenTitle: string
      childrenBody: string
      changesTitle: string
      changesBody: string
    }
    refund: {
      notRefundableTitle: string
      notRefundableBody: string
      whenTitle: string
      whenIntro: string
      whenDuplicate: string
      whenFailed: string
      whenMistake: string
      whenUnauthorised: string
      whenSpent: string
      howTitle: string
      howBody: string
      howReply: string
      timelineTitle: string
      timelineBody: string
      failedTitle: string
      failedBody: string
    }
    cancellation: {
      beforeTitle: string
      beforeBody: string
      beforeNoSub: string
      afterTitle: string
      afterLead: string
      afterTrail: string
      ifHifTitle: string
      ifHifBody: string
      volunteerTitle: string
      volunteerBody: string
      shippingTitle: string
      shippingBody: string
    }
  }
}

export const translations: Record<Language, any> = {
  // ==========================================
  // ENGLISH TRANSLATIONS
  // ==========================================
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      activities: 'Activities',
      gallery: 'Gallery',
      getInvolved: 'Get Involved',
      contact: 'Contact',
      donate: 'Donate',
      donateNow: 'Donate Now',
      menu: 'Menu',
      closeMenu: 'Close Menu',
      language: 'Language'
    },
    org: {
      name: 'HIF INDIA',
      fullName: 'Highland Islamic Forum (HIF INDIA)',
      tagline: 'Empowering Communities, Transforming Lives with Compassion & Dignity',
      shortTagline: 'Empowering Communities, Transforming Lives',
      established: 'Registered NGO in Mangaluru',
      regDetails: 'Registered NGO under Indian Trusts Act',
      slogan: '100% direct, zero-commission grassroots disbursement',
      sloganShort: '100% Direct Grassroots Relief',
      auditBadge: 'Audited & Transparent',
      addressLabel: 'Address',
      hqLocation: 'Masjid Ehsaan Complex, Kankanady, Mangalore – 575002',
      centralSecretariat: 'Central Secretariat',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      websiteLabel: 'Website',
      workingHours: 'Working Hours',
      workingHoursVal: '9:00 AM – 7:00 PM (Mon–Sat)'
    },
    common: {
      donateNow: 'Donate Now',
      viewDetails: 'View Details',
      exploreProjects: 'Explore Projects',
      exploreActivities: 'Explore Activities',
      learnMore: 'Learn More',
      joinAsVolunteer: 'Join as Volunteer',
      backToProjects: 'Back to Projects',
      backToActivities: 'Back to Activities',
      backToHome: 'Back to Home',
      close: 'Close',
      submit: 'Submit',
      submitting: 'Submitting...',
      copy: 'Copy',
      copied: 'Copied!',
      download: 'Download',
      share: 'Share',
      filterAll: 'All',
      readMore: 'Read More',
      viewAll: 'View All',
      search: 'Search',
      send: 'Send Message',
      sending: 'Sending...',
      seeImpact: 'See Our Impact',
      pledgeNow: 'Pledge Now',
      transparent: '100% Transparent',
      zeroCommission: 'Zero Commission',
      verified: 'Verified Grassroots NGO',
      monthly: 'Monthly',
      oneTime: 'One Time',
      all: 'All',
      loading: 'Loading...',
      success: 'Success',
      error: 'Error',
      sendAnother: 'Send Another',
      next: 'Next',
      prev: 'Previous',
      required: 'Required',
      optional: 'Optional',
      or: 'or',
      call: 'Call',
      dayMode: 'Day (Light) Mode',
      nightMode: 'Night (Dark) Mode',
      now: 'Now'
    },
    hero: {
      establishedBadge: 'Registered NGO in Mangaluru',
      title: 'Dignity, shelter & hope for communities across Karnataka.',
      subtitle:
        'HIF INDIA builds permanent homes, nurtures orphaned children, revives rural masjids, and delivers free medical relief — with 100% direct, transparent grassroots impact.',
      donateCta: 'Donate Now',
      donateBannerTitle: 'Your support builds homes, futures, and hope.',
      impactCta: 'See Our Impact',
      activeVolunteers: 'Active Volunteers Across Coastal Karnataka',
      emergencyFundBanner: 'Emergency Relief Active: Providing Flood, Medical, and Food Relief Support.',
      emergencyFundTitle: 'Immediate Humanitarian Response',
      emergencyFundDesc: 'Mobilizing direct assistance for vulnerable families in distress.',
      liveCounters: 'Real-Time Impact Metrics'
    },
    about: {
      eyebrow: 'About HIF INDIA',
      title: 'A grassroots trust, built on community trust.',
      description:
        'Highland Islamic Forum (HIF INDIA) is a registered NGO headquartered in Mangaluru, working across Karnataka and Andhra Pradesh.',
      whoWeAreBadge: 'Who We Are',
      whoWeAreTitle: 'Highland Islamic Forum (HIF INDIA)',
      whoWeAreText1:
        'Empowering Communities, Transforming Lives with Compassion & Dignity. Since our founding, we have focused on tangible, measurable interventions — permanent housing for the homeless, a loving residential sanctuary for orphaned boys, restoration of abandoned rural masjids, and free-of-cost medical equipment loans and blood donation coordination for families in crisis.',
      whoWeAreText2:
        'Registered NGO under Indian Trusts Act, HIF INDIA operates on a strict zero-commission policy: every rupee donated toward a specific project is channeled directly into materials, labor, meals, or medical relief for the intended beneficiaries.',
      teamBadge: 'Our Community',
      teamTitle: 'The people behind the mission',
      teamDesc:
        'HIF India is powered by hundreds of volunteers, youth leaders, and community members who show up with compassion at every event, programme, and relief drive.',
      teamPhotoAlt: 'HIF India team and community',
      viewPhoto: 'View photo',
      whoWeArePhotoAlt: 'HIF India field work and community outreach',
      visionTitle: 'Our Vision',
      visionText:
        'To build a righteous, self-reliant, and compassionate society where no family is left shelterless, every orphan finds a loving sanctuary of growth, rural places of worship flourish with knowledge, and healthcare is accessible to all regardless of socio-economic standing.',
      missionTitle: 'Our Mission',
      missionText:
        'To systematically alleviate poverty, homelessness, and educational deprivation through transparent, community-driven, sustainable programs rooted in Islamic ethical values of universal mercy, dignity, and brotherhood.',
      coreValuesTitle: 'Our Core Values',
      coreValuesSubtitle: 'Guiding principles that govern every initiative and grassroots intervention.',
      values: {
        transparencyTitle: '100% Transparency',
        transparencyDesc:
          'Every rupee received is publicly accounted for and channeled directly to the field with zero administrative cuts.',
        compassionTitle: 'Universal Compassion',
        compassionDesc:
          'Serving all human beings with genuine care, empathy, and unconditional brotherhood regardless of background.',
        dignityTitle: 'Upholding Human Dignity',
        dignityDesc:
          'Empowering recipients through permanent solutions and respect, rather than temporary patronizing charity.',
        sustainabilityTitle: 'Sustainable Impact',
        sustainabilityDesc:
          'Designing long-term programs in housing, education, and solar-powered facilities that endure for generations.'
      },
      historyTitle: 'Our Journey',
      historyText:
        'Starting as a grassroots youth collective in Mangaluru, HIF evolved into a state-wide humanitarian organization touching thousands of lives with housing, orphan nurture, and healthcare.',
      boardTitle: 'Board of Trustees & Leadership',
      boardSubtitle: 'Guided by experienced community leaders, scholars, and dedicated social workers.',
      pillarsTitle: 'Our Four Pillars',
      pillarsSubtitle: 'Integrated programs addressing the essential foundations of a dignified life.',
      pillarsDesc:
        'Every rupee donated flows into one of these four pillars — connected to a single, transparent core commitment to grassroots dignity.',
      trustTitle: 'Transparency & Trust',
      trustPoint1: 'Registered NGO under Indian Trusts Act, based in Mangaluru, Karnataka.',
      trustPoint2: '100% direct, zero-commission disbursement to grassroots beneficiaries.',
      trustPoint3: 'Annual financial audits with donor-visible spend breakdowns on request.',
      trustPoint4: 'Transfer receipts and 80G tax exemption certificates issued for contributions.',
      hqTitle: 'Headquarters'
    },
    stats: {
      housesDelivered: 'Houses Delivered',
      housesSubtext: 'Goal: 150 by 2030 in Project Ashiyana',
      masjidsRevived: 'Masjids Revived & Maintained',
      masjidsSubtext: 'Across Karnataka & Andhra Pradesh',
      orphansNurtured: 'Orphan Students Nurtured',
      orphansSubtext: 'Comprehensive living, Hifz & modern schooling',
      bloodUnits: 'Blood Units Mobilized',
      bloodSubtext: 'Life-saving emergency blood cell units',
      auditTransparency: 'Audit & Transparency',
      auditSubtext: 'Direct zero-commission grassroots disbursement'
    },
    pillars: {
      housingTitle: 'Housing',
      housingDesc: 'Permanent Ashiyana homes for destitute families',
      orphanCareTitle: 'Orphan Care',
      orphanCareDesc: 'Shelter for Underprivileged in Chinnapalli, Chittoor',
      masjidRevivalTitle: 'Masjid Revival',
      masjidRevivalDesc: '176 rural masjids reopened & supported',
      healthcareTitle: 'Healthcare',
      healthcareDesc: 'Free MEDIBANK equipment & blood donor network'
    },
    projects: {
      eyebrow: 'Our Projects',
      title: 'Flagship programs, built for lasting change.',
      subtitle:
        'Three long-term initiatives addressing housing, orphan care, and spiritual community infrastructure across South India.',
      allProgramsBadge: 'All Programs',
      allProgramsTitle: 'Every project, transparently tracked from fund to field.',
      viewAll: 'View All Projects',
      achievementsTitle: 'Key Achievements',
      futureGoalsTitle: 'Future Goals',
      tiersTitle: 'Sponsorship Tiers',
      beforeAfterTitle: 'Before & After',
      beforeLabel: 'Before',
      afterLabel: 'After',
      afterComingSoon: 'Completed homes will appear here next.',
      ashiyana: {
        title: 'Project Ashiyana',
        subtitle: 'Shelter of Dignity for Homeless & Destitute Families',
        badge: 'Housing Mission',
        overview:
          'Project Ashiyana provides solid, dignified homes for widowed mothers, impoverished rural families, and disabled breadwinners living in dilapidated shacks.',
        statHomesBuilt: '36 Homes Built',
        statTarget: 'Target: 150 Homes by 2030',
        statAvgCost: '₹7.5 – ₹10 Lakh Avg Cost'
      },
      chittor: {
        title: 'HIF CHITOOR – D.U.R.J',
        subtitle: 'Shelter for Underprivileged',
        badge: 'Shelter for Underprivileged',
        overview:
          'From an old building to a thriving campus — a 2.5-acre Shelter for Underprivileged in Chinnapalli, Chittoor District, Andhra Pradesh.',
        statBoys: '2.5 Acres Campus',
        statCampus: '20,000 sq. ft. Building',
        statCurriculum: 'Chinnapalli, Chittoor District'
      },
      masjid: {
        title: 'Masjid Development Project',
        subtitle: 'Community + Support + Sustainability',
        badge: 'Spiritual Community',
        overview:
          'What began with one closed Masjid near Chintamani, Karnataka, has grown into a movement that has helped reopen and support 176 Masjids, Alhamdulillah.',
        statReopened: '176 Masjids Supported',
        statNewBuilt: 'Started with 1 Masjid',
        statReach: 'Karnataka & Andhra Pradesh'
      },
      educationCity: {
        title: 'HIF Education City',
        subtitle: 'A 3.82-Acre Arabic Academy Rising in Assaigoli, Mangaluru',
        badge: 'Islamic Education Infrastructure',
        overview:
          'A state-of-the-art Arabic Academy coming up on a 3.82-acre campus in Assaigoli, Mangaluru, envisioned to transform Islamic learning for generations of students.'
      },
      boondh: {
        title: 'Project Boondh',
        subtitle: 'Safe Drinking Water for Underserved Communities',
        badge: 'Water Security',
        overview:
          'Project Boondh ensures access to clean and safe drinking water for underserved communities through borewells, water tankers, and filtration infrastructure.'
      },
      libaas: {
        title: 'Project Libaas',
        subtitle: 'Dignity in Celebration for Underprivileged Brides & Grooms',
        badge: 'Dignity & Celebration',
        overview:
          'Project Libaas provides wedding dresses for brides and grooms from underprivileged families, helping them celebrate their special day with dignity. We also accept good-condition bridal clothes as in-kind donations.'
      }
    },
    activities: {
      eyebrow: 'Activities & Wings',
      title: 'Specialized wings for targeted community impact.',
      subtitle:
        'From emergency medical equipment to youth development and academic aid, our dedicated wings provide continuous grassroots support.',
      wingsBadge: 'Our Wings',
      wingsTitle: 'Continuous community intervention across health, education, and youth.',
      featuresTitle: 'What We Do',
      impactTitle: 'Impact So Far',
      medical: {
        title: 'HIF Medical Cell & MEDIBANK',
        subtitle: 'Free Medical Equipment on Loan & Life-Saving Healthcare Support',
        badge: 'Healthcare & Relief',
        overview:
          'Providing free loans of expensive medical devices (hospital beds, oxygen concentrators, wheelchairs) and coordinating emergency blood donors and dialysis subsidies.',
        statBlood: '1,500+ Blood Units Donated',
        statEquipment: '200+ Equipment Pool',
        statHelpline: '24/7 Helpline Support'
      },
      education: {
        title: 'HIF Education Wing',
        subtitle: 'Nurturing Academic Excellence, Digital Skills & Value Education',
        badge: 'Academic Empowerment',
        overview:
          'Empowering underprivileged students with merit scholarships, free school bags, textbook distribution, computer education, and summer personality camps.',
        statStudents: '2,500+ Students Assisted',
        statScholarships: '₹40L+ Scholarships Awarded',
        statCamps: '45+ Batches Conducted'
      },
      youth: {
        title: 'HIF Youth Wing Education Cell',
        subtitle: 'Inspiring Next-Gen Leaders with Skills, English & Community Service',
        badge: 'Youth Leadership',
        overview:
          'Mobilizing energetic youth into social change-makers through spoken English courses, digital literacy, disaster relief response, and ethical mentoring.',
        statVolunteers: '300+ Active Youth Volunteers',
        statWorkshops: '60+ Skill Workshops',
        statDrives: '120+ Community Drives'
      },
      womenSkill: {
        title: 'Women Skill & Livelihood Center',
        subtitle: 'Tailoring, Vocational Craft & Micro-Enterprise Support',
        badge: 'Livelihood',
        overview:
          'Empowering widowed and low-income women with tailoring machines, embroidery training, and home enterprise incubation.'
      },
      disasterRelief: {
        title: 'Disaster Relief & Rapid Response',
        subtitle: 'Flood Relief, Ration Kits & Emergency Rehabilitation',
        badge: 'Emergency Aid',
        overview:
          'Deploying emergency volunteer rescue teams, potable water, ration kits, and home repair materials during monsoon floods and calamities.'
      }
    },
    gallery: {
      eyebrow: 'Impact Gallery',
      title: 'Moments of change from the ground.',
      subtitle:
        'A visual record of homes handed over, students taught, masjids revived, and lives touched — captured across our project sites.',
      filters: {
        all: 'All',
        housing: 'Housing',
        orphanage: 'Orphanage',
        masjid: 'Masjid',
        healthcare: 'Healthcare',
        education: 'Education',
        community: 'Community',
        youth: 'Youth'
      },
      emptyMessage: 'No photos found for this category.'
    },
    reels: {
      eyebrow: 'Our Reels',
      title: 'Stories worth watching, straight from the field',
      subtitle:
        'A closer look at the moments behind our work — home handovers, classroom days, and relief drives, told through short reels.',
      previous: 'Previous reel',
      next: 'Next reel',
      viewReel: 'View reel',
      followUs: 'Follow @hif_india for more',
      mute: 'Mute',
      unmute: 'Unmute'
    },
    featureVideos: {
      eyebrow: 'On the ground',
      title: 'Moments that stay with us',
      subtitle:
        'Longer stories from the field — the people, places, and days that define our mission.',
      previous: 'Previous video',
      next: 'Next video',
      viewVideo: 'View video',
      mute: 'Mute',
      unmute: 'Unmute'
    },
    getInvolved: {
      eyebrow: 'Get Involved',
      title: 'Everyone has a role to play.',
      description:
        'Calculate your impact, sign up to volunteer, or contribute directly — every path leads to real change on the ground.',
      calculatorBadge: 'Impact Calculator',
      calculatorTitle: 'See what your gift can do',
      calculatorSubtitle: 'Choose an amount to see the tangible change you will bring.',
      volunteerBadge: 'Join the Movement',
      volunteerTitle: 'Become a HIF Volunteer',
      volunteerSubtitle: 'Put your skills and time into action for lasting community transformation.',
      form: {
        fullName: 'Full Name *',
        fullNamePlaceholder: 'e.g. Mohammed Farooq',
        email: 'Email Address *',
        emailPlaceholder: 'you@example.com',
        phone: 'Phone / WhatsApp *',
        phonePlaceholder: '+91 98750 81312',
        city: 'City / Location *',
        cityPlaceholder: 'e.g. Mangalore, Udupi, Bengaluru',
        skillsLabel: 'How would you like to contribute? (Select skills)',
        availableHours: 'Available Hours / Week',
        availableHoursPlaceholder: 'e.g. 4-6 hours / weekends',
        notes: 'Brief Introduction / Relevant Experience',
        notesPlaceholder: 'Tell us a little about your background, hobbies, or why you want to volunteer...',
        submitButton: 'Register as Volunteer',
        submittingButton: 'Submitting...',
        submitError: 'Unable to submit your application. Please try again or message us on WhatsApp.',
        whatsAppButton: 'Message us on WhatsApp',
        successTitle: 'Thank You for Registering!',
        successMessage: 'Our volunteer coordinator will get in touch with you via WhatsApp or phone shortly.',
        submitAnother: 'Submit Another Application'
      },
      skills: {
        bloodDonation: 'Blood Donation / Medical Coordination',
        teaching: 'Teaching / Spoken English / Tutoring',
        disasterResponse: 'Disaster & Flood Emergency Response',
        mediaDesign: 'Graphic Design, Video & Social Media',
        fieldVerification: 'Ashiyana Field Verification & Relief',
        eventLogistics: 'Event Organization & Logistics'
      },
      bankCard: {
        title: 'Direct Bank Transfer',
        subtitle: 'Directly fund our accounts with zero processing fees',
        accountName: 'Beneficiary Name',
        accountNumber: 'Account Number',
        ifsc: 'IFSC Code',
        branch: 'Branch',
        upiId: 'UPI ID',
        taxNote: 'All donations are eligible for 80G tax exemption benefits.',
        copyDetails: 'Copy All Bank Details'
      },
      faqTitle: 'Frequently Asked Questions',
      faqSubtitle: 'Clear answers on how donations, audits, and projects are managed.',
      faqs: {
        q1: 'Is HIF India eligible for 80G tax deductions?',
        a1: 'Yes, donations to HIF INDIA are eligible for 80G tax exemption under the Indian Income Tax Act. Official receipts and certificates are provided.',
        q2: 'How much of my donation goes directly to beneficiaries?',
        a2: '100% of project-designated donations go directly to materials, labor, food, or medical aid with zero administrative cuts.',
        q3: 'Can I sponsor an entire Ashiyana home or orphan student?',
        a3: 'Yes! You can sponsor an entire home construction (₹7.5L) or sponsor an orphan student annually (₹15,000/yr) with full milestone reports.',
        q4: 'Can I volunteer remotely if I live outside Mangalore?',
        a4: 'Absolutely. We welcome remote volunteers for digital design, translation, web development, curriculum drafting, and social media outreach.'
      }
    },
    contact: {
      eyebrow: 'Contact',
      title: "We'd love to hear from you.",
      description:
        'Reach our Mangaluru headquarters for donations, sponsorships, medical equipment requests, or volunteering.',
      centralSecretariat: 'Central Secretariat',
      hours: 'Working Hours',
      hoursValue: '9:00 AM – 7:00 PM (Mon–Sat)',
      primaryPhoneLabel: 'Primary Office & Medical Cell',
      altPhoneLabel: 'Alternate Helpline',
      emailLabel: 'Official Email',
      formTitle: 'Send Us a Message',
      formSubtitle: 'We typically respond within 24 hours.',
      nameLabel: 'Full Name *',
      namePlaceholder: 'e.g. Ahmed Khan',
      emailInputLabel: 'Email Address *',
      emailPlaceholder: 'ahmed@example.com',
      phoneInputLabel: 'Phone / WhatsApp',
      phonePlaceholder: '+91 98750 81312',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Select a subject',
      subjects: {
        general: 'General Inquiry',
        donation: 'Donation & 80G Receipt',
        volunteer: 'Volunteering',
        medical: 'Medical Equipment / MEDIBANK Request',
        partnership: 'CSR / Organization Partnership',
        other: 'Other'
      },
      messageFieldLabel: 'Your Message *',
      messagePlaceholder: 'How can we assist you today?',
      sendMessage: 'Send Message',
      sendingMessage: 'Sending...',
      submitError: 'Unable to send your message. Please try again or message us on WhatsApp.',
      whatsAppButton: 'Message us on WhatsApp',
      whatsAppHint: 'Fastest way to reach us — tap to open WhatsApp.',
      messageSentTitle: 'Message sent!',
      messageSentText: 'Thank you for reaching out to HIF INDIA. We will reply shortly.',
      sendAnother: 'Send another message'
    },
    donateModal: {
      title: 'Donate to HIF INDIA',
      subtitle: 'Bank transfer & UPI payment details',
      forCause: 'For',
      generalFund: 'General Humanitarian Fund',
      presetAmounts: 'Quick Amounts',
      customAmount: 'Custom Amount',
      customAmountPlaceholder: 'Enter custom amount (₹)',
      tabScanQr: 'Scan & Pay',
      tabBankTransfer: 'Bank Transfer',
      fastestBadge: 'Fastest',
      beneficiaryName: 'Beneficiary Name',
      accountNumber: 'Account Number (Current Account)',
      ifscCode: 'IFSC Code',
      branch: 'Branch',
      branchValue: 'HDFC Bunder Branch, Mangalore',
      upiId: 'UPI ID',
      scanQr: 'Scan UPI QR Code to Pay',
      showQr: 'Show QR Code',
      hideQr: 'Hide QR Code',
      qrHelp: 'Scan with GPay, PhonePe, Paytm, or BHIM',
      qrSecurityTitle: 'Verify before you pay',
      qrSecurityNote:
        'After scanning, your UPI app must show the payee name as "HIF INDIA". If any other name appears, do not proceed — stop and contact us on WhatsApp immediately.',
      tax80GNote: '80G Tax Exemption applies. Please share payment receipt on WhatsApp for your certificate.',
      notifyWhatsapp: 'Notify on WhatsApp after payment',
      close: 'Close',
      copiedToast: 'Copied to clipboard'
    },
    footer: {
      aboutText:
        'A registered grassroots NGO in Mangaluru empowering families with permanent housing, orphan education, masjid revival, and free medical equipment.',
      zeroCommission: '100% direct, zero-commission grassroots disbursement',
      exploreTitle: 'Explore',
      programsTitle: 'Programs',
      supportUs: 'Support Us',
      bankAccount: 'HDFC Bank A/C',
      donateQr: 'Donate / UPI QR',
      allRightsReserved: 'Highland Islamic Forum (HIF INDIA). All rights reserved.',
      addressFull: 'Masjid Ehsaan Complex, Kankanady, Mangalore – 575002',
      slogan: 'Empowering Communities, Transforming Lives with Compassion & Dignity',
      developedBy: 'Developed by'
    },
    legal: {
      lastUpdated: 'Last updated: {date}',
      lastUpdatedDate: '28 September 2026',
      relatedNav: 'Related policies',
      orgRegisteredHq: 'Registered NGO under the Indian Trusts Act, headquartered in Mangaluru.',
      termsTitle: 'Terms and Conditions',
      termsDesc: 'How this website and donations to Highland Islamic Forum (HIF INDIA) work.',
      privacyTitle: 'Privacy Policy',
      privacyDesc: 'What personal information HIF INDIA collects, why we use it, and who we share it with.',
      refundTitle: 'Refund Policy',
      refundDesc: 'When a donation to HIF INDIA can be refunded, and how long that takes.',
      cancellationTitle: 'Cancellation Policy',
      cancellationDesc: 'When you can cancel a donation or a volunteer request to HIF INDIA.',
      terms: {
        aboutTitle: 'About these terms',
        aboutBody:
          'These terms apply to your use of the HIF INDIA website and to any donation you make to Highland Islamic Forum (HIF INDIA), a registered NGO under the Indian Trusts Act. By using the website or making a donation, you agree to these terms, our Privacy Policy, Refund Policy, and Cancellation Policy.',
        whatWeDoTitle: 'What we do',
        whatWeDoBody:
          'HIF INDIA is a grassroots humanitarian trust based in Mangaluru. The website describes our programmes and lets supporters contribute to them. We do not sell goods. A donation is a voluntary contribution, not a purchase of a product or service.',
        whatWeDoListIntro: 'Our main programmes are:',
        programAshiyana: 'Project Ashiyana — permanent housing for homeless and destitute families',
        programChitoor: 'HIF CHITOOR (D.U.R.J) — residential care, Hifz, and schooling for orphaned children',
        programMasjid: 'Masjid Development — restoration and upkeep of rural masjids',
        programMedical: 'HIF Medical Cell — free medical-equipment support and blood-donation coordination',
        donationsTitle: 'Donations and pricing',
        donationsBody1:
          'You choose the amount. Suggested amounts on a project page are guidance only. There is no minimum fee to browse the website, and we do not charge a subscription.',
        donationsBody2:
          'You may donate by bank transfer or UPI to the HIF INDIA account shown on the website, or by an online payment processed by our payment partner, Razorpay. Please confirm the beneficiary name is HIF INDIA before you pay.',
        donationsBody3:
          'Donations marked for a specific project are used for that project’s materials, labour, meals, or medical relief. HIF INDIA does not take an administrative commission on those gifts. A payment gateway may deduct its own processing charge before the amount reaches us.',
        donationsBody4:
          'Where applicable, donations are eligible for 80G tax exemption under the Income Tax Act. Share your payment receipt with us on WhatsApp or email and we will issue the certificate.',
        responsibilitiesTitle: 'Your responsibilities',
        responsibilitiesBody:
          'You must give accurate contact details when you ask for a receipt, and you must use funds you are allowed to give. Do not use the website to send false, harmful, or unlawful content, or to interfere with the site.',
        contentTitle: 'Website content',
        contentBody:
          'Project updates, photographs, and figures are published in good faith and may change as work in the field changes. Nothing on the site is a promise of a particular construction date or a personal benefit in return for a donation.',
        paymentsTitle: 'Payments',
        paymentsBody:
          'Online card, net-banking, and UPI payments are handled by Razorpay and your bank. We do not store your full card number or UPI PIN. A payment is complete only when we or our payment partner confirms it. Bank delays and failed UPI attempts are outside our control.',
        ipTitle: 'Intellectual property',
        ipBody:
          'The HIF INDIA name, logo, and website content belong to Highland Islamic Forum unless a credit says otherwise. You may share links to our pages. Please do not copy our photographs or logo for another organisation without written permission.',
        liabilityTitle: 'Liability',
        liabilityBody:
          'The website is provided as a public information and donation channel. We are not liable for loss caused by a payment-app error, a bank delay, or a temporary outage of this site, to the extent allowed by Indian law.',
        lawTitle: 'Governing law',
        lawBody:
          'These terms are governed by the laws of India. Courts in Mangaluru, Karnataka, have jurisdiction over disputes arising from this website or a donation to HIF INDIA.',
        changesTitle: 'Changes',
        changesBody:
          'We may update these terms when our programmes or payment methods change. The date at the top of this page is the latest version. Continued use of the website after an update means you accept the revised terms.'
      },
      privacy: {
        whoTitle: 'Who is responsible',
        whoBody:
          'Highland Islamic Forum (HIF INDIA) is responsible for personal information collected through this website and through our phone, email, and WhatsApp channels.',
        collectTitle: 'Information we collect',
        collectIntro: 'We collect only what we need to receive donations, answer enquiries, and run our programmes:',
        collectForm:
          'Details you send us: your name, phone number, city, and volunteer skills when you use the Get Involved form (it opens WhatsApp with the message you typed), and anything you later write to us by email, phone, or WhatsApp.',
        collectDonation:
          'Donation records: amount, date, project or cause if you named one, and a transaction reference (such as a UTR or payment id) so we can issue a receipt and, where applicable, an 80G certificate.',
        collectPayment:
          'Payment details entered on Razorpay’s page (card, net-banking, or UPI) are collected by Razorpay and your bank. We do not receive or store your full card number, CVV, or UPI PIN.',
        collectPrefs:
          'A language choice and a light/dark display preference saved in your browser (local storage). We do not run advertising trackers on this website.',
        useTitle: 'How we use it',
        useIntro: 'We use this information to:',
        useConfirm: 'Confirm and receipt your donation',
        use80g: 'Issue 80G certificates when you ask and the donation qualifies',
        useReply: 'Reply to volunteer, medical-equipment, and general enquiries',
        useBooks: 'Keep ordinary books of account required of a registered trust',
        useProtect: 'Protect the organisation against mistaken or unauthorised payments',
        useNoSell: 'We do not sell personal information, and we do not use it for third-party advertising.',
        shareTitle: 'Who we share it with',
        shareIntro: 'We share information only with:',
        shareRazorpay: 'Razorpay and your bank or UPI app, to complete a payment you start',
        shareBank: 'Our bankers (HDFC Bank) for donations received by transfer',
        shareAudit: 'Auditors and authorities when Indian law requires it',
        shareHost: 'A service provider who hosts email or this website, only to operate that service',
        shareProviders:
          'Razorpay processes payments under its own privacy policy. Firebase Hosting serves this website. Those providers see technical data such as IP address that is needed to deliver the page or the payment.',
        retainTitle: 'How long we keep it',
        retainBody:
          'Donation and receipt records are kept for as long as Indian tax and trust law requires. Enquiry messages are kept while we are corresponding with you and for a reasonable period afterwards. You can ask us to delete a volunteer enquiry if we no longer need it for a legal record.',
        choicesTitle: 'Your choices',
        choicesBody:
          'You may ask what donation or enquiry records we hold about you, ask us to correct them, or ask us to stop contacting you. Write to info@hif.org.in or call the numbers at the top of this page. We may need to keep a donation record even after a contact request, because receipts and accounts cannot be deleted.',
        childrenTitle: 'Children',
        childrenBody:
          'This website is for adult donors and volunteers. We do not knowingly collect personal information from children through the site. Programme information about children in our care is published only with the consent of the guardian or the institution, and without exposing private records.',
        changesTitle: 'Changes',
        changesBody: 'If we start collecting new kinds of information, we will update this page and change the date at the top.'
      },
      refund: {
        notRefundableTitle: 'Donations are generally not refundable',
        notRefundableBody:
          'A gift to Highland Islamic Forum (HIF INDIA) is a voluntary donation to a registered NGO, not a purchase of goods. HIF INDIA does not ship products and does not charge a delivery fee. Once a donation is successfully received, it is allocated to housing, orphan care, masjid work, medical relief, or the general humanitarian fund, and it is not refundable as a change of mind.',
        whenTitle: 'When we will refund',
        whenIntro: 'We will refund a donation in these cases:',
        whenDuplicate: 'You were charged twice for the same donation (a duplicate payment).',
        whenFailed: 'Money left your account but HIF INDIA did not receive it because of a technical failure.',
        whenMistake: 'You paid HIF INDIA by genuine mistake, and the amount has not yet been spent on a project.',
        whenUnauthorised:
          'The payment was unauthorised. We will follow up with the bank or Razorpay and refund what they confirm was unauthorised.',
        whenSpent:
          'A donation already spent on a named project — for example materials for a house, a student’s support, or medical aid — cannot be refunded.',
        howTitle: 'How to request a refund',
        howBody:
          'Email info@hif.org.in or message us on WhatsApp within 7 days of the transaction. Include your name, phone number, date, amount, the project if you chose one, and the UTR, UPI reference, or Razorpay payment id.',
        howReply: 'We will review the request and reply within 7 working days.',
        timelineTitle: 'Refund timeline',
        timelineBody:
          'If we approve the refund, we send it to the original payment method (the same card, UPI id, or bank account). We initiate the refund within 7 working days of approval. Banks, UPI apps, and Razorpay may take a further 5 to 7 working days to show the credit. We cannot refund in cash or to a different person’s account.',
        failedTitle: 'Failed payments',
        failedBody:
          'If a payment fails or you close the page before paying, no donation is taken and there is nothing to refund. If your bank shows a debit that never reached us, write to us with the reference number and we will trace it with the bank or Razorpay.'
      },
      cancellation: {
        beforeTitle: 'Before you pay',
        beforeBody:
          'You may cancel a donation at any time before payment is completed. Close the donation window, or do not finish the UPI, card, or net-banking step. If you do not pay, nothing is charged and no cancellation request is needed.',
        beforeNoSub: 'HIF INDIA does not set up automatic recurring debits. There is no subscription or membership fee to cancel.',
        afterTitle: 'After a successful payment',
        afterLead:
          'A completed donation cannot be cancelled as an order, because it is a voluntary gift and not a product purchase. If the payment was duplicated, failed on our side, or made by mistake, use the',
        afterTrail:
          '. Requests must reach us within 7 days of the transaction. Approved refunds are initiated within 7 working days and then follow your bank or Razorpay’s usual credit time of about 5 to 7 working days.',
        ifHifTitle: 'If HIF cancels an activity',
        ifHifBody:
          'If we cancel a drive or event for which you gave a specifically marked donation, and that amount has not been spent, we will contact you. You may ask us to move it to the nearest related programme, or to refund it under the Refund Policy.',
        volunteerTitle: 'Volunteer and enquiry requests',
        volunteerBody:
          'You may withdraw a volunteer signup or any other enquiry by emailing info@hif.org.in or messaging us on WhatsApp. Tell us the phone number you used. We will stop following up on that request. This does not cancel a donation already received.',
        shippingTitle: 'No shipping to cancel',
        shippingBody:
          'We do not sell or ship physical goods through this website. There is no shipping order and no shipping cancellation. Medical equipment, where provided by the Medical Cell, is a programme service arranged with the family directly, not an online store order.'
      }
    }
  },

  // ==========================================
  // KANNADA TRANSLATIONS (ಕನ್ನಡ)
  // ==========================================
  kn: {
    nav: {
      home: 'ಮುಖಪುಟ',
      about: 'ನಮ್ಮ ಬಗ್ಗೆ',
      projects: 'ಯೋಜನೆಗಳು',
      activities: 'ಸೇವೆಗಳು',
      gallery: 'ಚಿತ್ರಗಳು',
      getInvolved: 'ಸೇರಿ',
      contact: 'ಸಂಪರ್ಕ',
      donate: 'ದಾನ',
      donateNow: 'ಈಗ ದಾನ ಮಾಡಿ',
      menu: 'ಮೆನು',
      closeMenu: 'ಮೆನು ಮುಚ್ಚಿ',
      language: 'ಭಾಷೆ'
    },
    org: {
      name: 'HIF INDIA',
      fullName: 'ಹೈಲ್ಯಾಂಡ್ ಇಸ್ಲಾಮಿಕ್ ಫೋರಮ್ (HIF INDIA)',
      tagline: 'ಕರುಣೆ ಮತ್ತು ಗೌರವದಿಂದ ಜನರನ್ನು ಬಲಪಡಿಸಿ, ಜೀವನ ಬದಲಿಸಿ',
      shortTagline: 'ಜನರನ್ನು ಬಲಪಡಿಸಿ, ಜೀವನ ಬದಲಿಸಿ',
      established: 'ಮಂಗಳೂರಿನಲ್ಲಿ ನೋಂದಾಯಿತ ಎನ್‌ಜಿಒ ಸಂಸ್ಥೆ',
      regDetails: 'ಭಾರತೀಯ ಟ್ರಸ್ಟ್ ಕಾಯ್ದೆಯಡಿ ನೋಂದಾಯಿತ ಎನ್‌ಜಿಒ',
      slogan: 'ನೀಡಿದ ಹಣ 100% ನೇರವಾಗಿ ಜನರಿಗೆ. ಕಮಿಷನ್ ಇಲ್ಲ',
      sloganShort: '100% ನೇರ ಜನರ ನೆರವು',
      auditBadge: 'ಪರಿಶೀಲಿತ ಮತ್ತು ಸ್ಪಷ್ಟ ಲೆಕ್ಕ',
      addressLabel: 'ವಿಳಾಸ',
      hqLocation: 'ಮಸೀದಿ ಎಹ್ಸಾನ್ ಕಾಂಪ್ಲೆಕ್ಸ್, ಕಂಕನಾಡಿ, ಮಂಗಳೂರು – 575002',
      centralSecretariat: 'ಮುಖ್ಯ ಕಚೇರಿ',
      phoneLabel: 'ದೂರವಾಣಿ',
      emailLabel: 'ಇಮೇಲ್',
      websiteLabel: 'ವೆಬ್‌ಸೈಟ್',
      workingHours: 'ಕೆಲಸದ ಸಮಯ',
      workingHoursVal: 'ಬೆಳಗ್ಗೆ 9:00 – ಸಂಜೆ 7:00 (ಸೋಮ–ಶನಿ)'
    },
    common: {
      donateNow: 'ಈಗ ದಾನ ಮಾಡಿ',
      viewDetails: 'ವಿವರಗಳನ್ನು ನೋಡಿ',
      exploreProjects: 'ಯೋಜನೆಗಳನ್ನು ನೋಡಿ',
      exploreActivities: 'ಚಟುವಟಿಕೆಗಳನ್ನು ನೋಡಿ',
      learnMore: 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ',
      joinAsVolunteer: 'ಸ್ವಯಂಸೇವಕರಾಗಿ ಸೇರಿ',
      backToProjects: 'ಯೋಜನೆಗಳಿಗೆ ಹಿಂತಿರುಗಿ',
      backToActivities: 'ಚಟುವಟಿಕೆಗಳಿಗೆ ಹಿಂತಿರುಗಿ',
      backToHome: 'ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ',
      close: 'ಮುಚ್ಚಿ',
      submit: 'ಸಲ್ಲಿಸಿ',
      submitting: 'ಸಲ್ಲಿಸಲಾಗುತ್ತಿದೆ...',
      copy: 'ನಕಲಿಸಿ',
      copied: 'ನಕಲಿಸಲಾಗಿದೆ!',
      download: 'ಡೌನ್‌ಲೋಡ್',
      share: 'ಹಂಚಿಕೊಳ್ಳಿ',
      filterAll: 'ಎಲ್ಲವೂ',
      readMore: 'ಇನ್ನಷ್ಟು ಓದಿ',
      viewAll: 'ಎಲ್ಲವನ್ನೂ ನೋಡಿ',
      search: 'ಹುಡುಕಿ',
      send: 'ಸಂದೇಶ ಕಳುಹಿಸಿ',
      sending: 'ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ...',
      seeImpact: 'ನಮ್ಮ ಪ್ರಭಾವವನ್ನು ನೋಡಿ',
      pledgeNow: 'ಈಗಲೇ ವಾಗ್ದಾನ ಮಾಡಿ',
      transparent: '100% ಪಾರದರ್ಶಕ',
      zeroCommission: 'ಕಮಿಷನ್ ಇಲ್ಲ',
      verified: 'ಪರಿಶೀಲಿಸಿದ ನೇರ ಸಂಸ್ಥೆ',
      monthly: 'ಮಾಸಿಕ',
      oneTime: 'ಒಂದು ಬಾರಿ',
      all: 'ಎಲ್ಲವೂ',
      loading: 'ಲೋಡ್ ಆಗುತ್ತಿದೆ...',
      success: 'ಯಶಸ್ವಿಯಾಗಿದೆ',
      error: 'ದೋಷ',
      sendAnother: 'ಇನ್ನೊಂದು ಕಳುಹಿಸಿ',
      next: 'ಮುಂದೆ',
      prev: 'ಹಿಂದೆ',
      required: 'ಅಗತ್ಯವಿದೆ',
      optional: 'ಐಚ್ಛಿಕ',
      or: 'ಅಥವಾ',
      call: 'ಕರೆ',
      dayMode: 'ಹಗಲು ಬಣ್ಣ',
      nightMode: 'ರಾತ್ರಿ ಬಣ್ಣ',
      now: 'ಈಗ'
    },
    hero: {
      establishedBadge: 'ಮಂಗಳೂರಿನಲ್ಲಿ ನೋಂದಾಯಿತ ಎನ್‌ಜಿಒ ಸಂಸ್ಥೆ',
      title: 'ಕರ್ನಾಟಕದಾದ್ಯಂತ ಸಮುದಾಯಗಳಿಗೆ ಘನತೆ, ಆಸರೆ ಮತ್ತು ಭರವಸೆ.',
      subtitle:
        'HIF INDIA ನಿರಾಶ್ರಿತರಿಗೆ ಶಾಶ್ವತ ಮನೆಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತದೆ, ಅನಾಥ ಮಕ್ಕಳಿಗೆ ಪೋಷಣೆ ನೀಡುತ್ತದೆ, ಗ್ರಾಮೀಣ ಮಸೀದಿಗಳನ್ನು ಸರಿಪಡಿಸುತ್ತದೆ ಮತ್ತು ಉಚಿತ ವೈದ್ಯಕೀಯ ನೆರವನ್ನು ನೀಡುತ್ತದೆ — 100% ಪಾರದರ್ಶಕ ನೇರ ಪ್ರಭಾವದೊಂದಿಗೆ.',
      donateCta: 'ಈಗ ದಾನ ಮಾಡಿ',
      donateBannerTitle: 'ನಿಮ್ಮ ಸಹಾಯ ಮನೆಗಳು, ಭವಿಷ್ಯ ಮತ್ತು ಭರವಸೆ ನಿರ್ಮಿಸುತ್ತದೆ.',
      impactCta: 'ನಮ್ಮ ಪ್ರಭಾವವನ್ನು ನೋಡಿ',
      activeVolunteers: 'ಕರಾವಳಿ ಕರ್ನಾಟಕದಾದ್ಯಂತ ಸಕ್ರಿಯ ಸ್ವಯಂಸೇವಕರು',
      emergencyFundBanner: 'ತುರ್ತು ಪರಿಹಾರ ಕಾರ್ಯ ಸಕ್ರಿಯ: ಪ್ರವಾಹ, ವೈದ್ಯಕೀಯ ಮತ್ತು ಆಹಾರ ನೆರವು ಒದಗಿಸಲಾಗುತ್ತಿದೆ.',
      emergencyFundTitle: 'ತಕ್ಷಣದ ಮಾನವೀಯ ಸ್ಪಂದನೆ',
      emergencyFundDesc: 'ಸಂಕಷ್ಟದಲ್ಲಿರುವ ದುರ್ಬಲ ಕುಟುಂಬಗಳಿಗೆ ನೇರ ನೆರವು ಒದಗಿಸುವುದು.',
      liveCounters: 'ನೈಜ ಸಮಯದ ಪ್ರಭಾವದ ಅಂಕಿಅಂಶಗಳು'
    },
    about: {
      eyebrow: 'HIF INDIA ಬಗ್ಗೆ',
      title: 'ಸಮುದಾಯದ ನಂಬಿಕೆಯ ಮೇಲೆ ಕಟ್ಟಲಾದ ನೇರ ಟ್ರಸ್ಟ್.',
      description:
        'ಹೈಲ್ಯಾಂಡ್ ಇಸ್ಲಾಮಿಕ್ ಫೋರಮ್ (HIF INDIA) ಮಂಗಳೂರಿನಲ್ಲಿ ಪ್ರಧಾನ ಕಚೇರಿ ಹೊಂದಿರುವ, ಕರ್ನಾಟಕ ಮತ್ತು ಆಂಧ್ರಪ್ರದೇಶದಾದ್ಯಂತ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿರುವ ನೋಂದಾಯಿತ ಎನ್‌ಜಿಒ ಆಗಿದೆ.',
      whoWeAreBadge: 'ನಾವು ಯಾರು',
      whoWeAreTitle: 'ಹೈಲ್ಯಾಂಡ್ ಇಸ್ಲಾಮಿಕ್ ಫೋರಮ್ (HIF INDIA)',
      whoWeAreText1:
        'ಸಹಾನುಭೂತಿ ಮತ್ತು ಘನತೆಯೊಂದಿಗೆ ಸಮುದಾಯಗಳ ಬಲಪಡಿಸುವುದು, ಜೀವನ ಪರಿವರ್ತನೆ. ಸಂಸ್ಥೆಯ ಸ್ಥಾಪನೆಯಿಂದಲೂ, ನಾವು ನೇರ ಮತ್ತು ಅಳೆಯಬಹುದಾದ ಕಾರ್ಯಕ್ರಮಗಳ ಮೇಲೆ ಗಮನಹರಿಸಿದ್ದೇವೆ — ನಿರಾಶ್ರಿತರಿಗೆ ಶಾಶ್ವತ ಮನೆಗಳು, ಅನಾಥ ಬಾಲಕರಿಗೆ ಪ್ರೀತಿಯ ವಸತಿ ಆಶ್ರಯ, ಪಾಳುಬಿದ್ದ ಗ್ರಾಮೀಣ ಮಸೀದಿಗಳ ಜೀರ್ಣೋದ್ಧಾರ, ಉಚಿತ ವೈದ್ಯಕೀಯ ಉಪಕರಣಗಳ ಸಾಲ ಮತ್ತು ತುರ್ತು ರಕ್ತದಾನ ಸಮನ್ವಯ.',
      whoWeAreText2:
        'ಭಾರತೀಯ ಟ್ರಸ್ಟ್ ಕಾಯ್ದೆಯಡಿ ನೋಂದಾಯಿತ ಸಂಸ್ಥೆಯಾಗಿರುವ HIF INDIA ಕಮಿಷನ್ ಇಲ್ಲದ ನೀತಿಯಡಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ: ನಿರ್ದಿಷ್ಟ ಯೋಜನೆಗಾಗಿ ನೀಡಲಾದ ಪ್ರತಿಯೊಂದು ರೂಪಾಯಿಯೂ ನೇರವಾಗಿ ವಸ್ತುಗಳು, ಕಾರ್ಮಿಕ ವೆಚ್ಚ, ಆಹಾರ ಅಥವಾ ವೈದ್ಯಕೀಯ ಪರಿಹಾರಕ್ಕಾಗಿ ಫಲಾನುಭವಿಗಳಿಗೆ ತಲುಪುತ್ತದೆ.',
      teamBadge: 'ನಮ್ಮ ಸಮುದಾಯ',
      teamTitle: 'ಈ ಕಾರ್ಯದ ಹಿಂದಿನ ಜನರು',
      teamDesc:
        'HIF India ಅನ್ನು ನೂರಾರು ಸ್ವಯಂಸೇವಕರು, ಯುವ ನಾಯಕರು ಮತ್ತು ಸಮುದಾಯ ಸದಸ್ಯರು ಪ್ರತಿ ಕಾರ್ಯಕ್ರಮ, ಸಭೆ ಮತ್ತು ನೆರವು ಕಾರ್ಯದಲ್ಲಿ ಸಹಾನುಭೂತಿಯಿಂದ ಕೆಲಸ ಮಾಡುವ ಮೂಲಕ ನಡೆಸುತ್ತಾರೆ.',
      teamPhotoAlt: 'HIF India ತಂಡ ಮತ್ತು ಸಮುದಾಯ',
      viewPhoto: 'ಫೋಟೋ ನೋಡಿ',
      whoWeArePhotoAlt: 'HIF India ಕ್ಷೇತ್ರ ಕಾರ್ಯ ಮತ್ತು ಸಮುದಾಯ ಸೇವೆ',
      visionTitle: 'ನಮ್ಮ ಗುರಿ',
      visionText:
        'ಯಾವುದೇ ಕುಟುಂಬವು ಆಸರೆರಹಿತವಾಗಿ ಉಳಿಯದ, ಪ್ರತಿಯೊಬ್ಬ ಅನಾಥ ಮಗುವೂ ಪ್ರೀತಿ ಮತ್ತು ಬೆಳವಣಿಗೆಯ ಆಶ್ರಯ ಪಡೆಯುವ, ಗ್ರಾಮೀಣ ಆರಾಧನಾ ಸ್ಥಳಗಳು ಜ್ಞಾನದಿಂದ ಕಂಗೊಳಿಸುವ ಮತ್ತು ಸಾಮಾಜಿಕ-ಆರ್ಥಿಕ ಸ್ಥಿತಿಯನ್ನು ಲೆಕ್ಕಿಸದೆ ಎಲ್ಲರಿಗೂ ಆರೋಗ್ಯ ರಕ್ಷಣೆ ಸಿಗುವ ಧಾರ್ಮಿಕ, ಸ್ವಾವಲಂಬಿ ಮತ್ತು ಸಹಾನುಭೂತಿಯ ಸಮಾಜವನ್ನು ನಿರ್ಮಿಸುವುದು.',
      missionTitle: 'ನಮ್ಮ ಕೆಲಸ',
      missionText:
        'ಸಾರ್ವತ್ರಿಕ ಕರುಣೆ, ಘನತೆ ಮತ್ತು ಭ್ರಾತೃತ್ವದ ಇಸ್ಲಾಮಿಕ್ ನೈತಿಕ ಮೌಲ್ಯಗಳಲ್ಲಿ ಬೇರೂರಿರುವ ಪಾರದರ್ಶಕ, ಸಮುದಾಯ-ಚಾಲಿತ, ಸುಸ್ಥಿರ ಕಾರ್ಯಕ್ರಮಗಳ ಮೂಲಕ ಬಡತನ, ನಿರಾಶ್ರಿತತೆ ಮತ್ತು ಶೈಕ್ಷಣಿಕ ವಂಚನೆಯನ್ನು ವ್ಯವಸ್ಥಿತವಾಗಿ ನಿವಾರಿಸುವುದು.',
      coreValuesTitle: 'ನಮ್ಮ ಮೂಲ ಮೌಲ್ಯಗಳು',
      coreValuesSubtitle: 'ಪ್ರತಿಯೊಂದು ಉಪಕ್ರಮ ಮತ್ತು ನೇರ ಕಾರ್ಯಾಚರಣೆಯನ್ನು ಮುನ್ನಡೆಸುವ ಮಾರ್ಗದರ್ಶಿ ತತ್ವಗಳು.',
      values: {
        transparencyTitle: '100% ಪಾರದರ್ಶಕತೆ',
        transparencyDesc:
          'ಸ್ವೀಕರಿಸಿದ ಪ್ರತಿಯೊಂದು ರೂಪಾಯಿಗೂ ಸಾರ್ವಜನಿಕ ಲೆಕ್ಕಪತ್ರವಿದ್ದು, ಶೂನ್ಯ ಆಡಳಿತ ಕಡಿತದೊಂದಿಗೆ ನೇರವಾಗಿ ಯೋಜನೆಗೆ ತಲುಪಿಸಲಾಗುತ್ತದೆ.',
        compassionTitle: 'ಸಾರ್ವತ್ರಿಕ ಸಹಾನುಭೂತಿ',
        compassionDesc:
          'ಹಿನ್ನೆಲೆಯನ್ನು ಲೆಕ್ಕಿಸದೆ ಪ್ರತಿಯೊಬ್ಬ ಮಾನವನಿಗೂ ನೈಜ ಕಾಳಜಿ, ಅನುಭೂತಿ ಮತ್ತು ಬೇಷರತ್ ಭ್ರಾತೃತ್ವದೊಂದಿಗೆ ಸೇವೆ ಸಲ್ಲಿಸುವುದು.',
        dignityTitle: 'ಮಾನವ ಘನತೆಯ ರಕ್ಷಣೆ',
        dignityDesc:
          'ತಾತ್ಕಾಲಿಕ ಉಪಕಾರದ ಬದಲು ಶಾಶ್ವತ ಪರಿಹಾರಗಳು ಮತ್ತು ಗೌರವದ ಮೂಲಕ ಜನರನ್ನು ಬಲಪಡಿಸುತ್ತೇವೆ.',
        sustainabilityTitle: 'ಸುಸ್ಥಿರ ಪ್ರಭಾವ',
        sustainabilityDesc:
          'ವಸತಿ, ಶಿಕ್ಷಣ ಮತ್ತು ಸೌರಶಕ್ತಿ ಸೌಲಭ್ಯಗಳಲ್ಲಿ ತಲೆಮಾರುಗಳವರೆಗೆ ಬಾಳಿಕೆ ಬರುವ ದೀರ್ಘಕಾಲೀನ ಯೋಜನೆಗಳನ್ನು ರೂಪಿಸುವುದು.'
      },
      historyTitle: 'ನಮ್ಮ ಪಯಣ',
      historyText:
        'ಮಂಗಳೂರಿನಲ್ಲಿ ಸಣ್ಣ ಯುವಕರ ಒಕ್ಕೂಟವಾಗಿ ಪ್ರಾರಂಭವಾದ HIF, ಇಂದು ವಸತಿ, ಅನಾಥರ ಆರೈಕೆ ಮತ್ತು ಆರೋಗ್ಯ ರಕ್ಷಣೆಯ ಮೂಲಕ ಸಾವಿರಾರು ಜನರ ಜೀವನವನ್ನು ಮುಟ್ಟುವ ರಾಜ್ಯಮಟ್ಟದ ಮಾನವೀಯ ಸಂಸ್ಥೆಯಾಗಿ ಬೆಳೆದಿದೆ.',
      boardTitle: 'ಟ್ರಸ್ಟಿ ಮಂಡಳಿ ಮತ್ತು ನಾಯಕತ್ವ',
      boardSubtitle: 'ಅನುಭವಿ ಸಮುದಾಯ ಮುಖಂಡರು, ವಿದ್ವಾಂಸರು ಮತ್ತು ಸಮರ್ಪಿತ ಸಮಾಜ ಸೇವಕರ ಮಾರ್ಗದರ್ಶನ.',
      pillarsTitle: 'ನಮ್ಮ ನಾಲ್ಕು ಪ್ರಮುಖ ಸ್ತಂಭಗಳು',
      pillarsSubtitle: 'ಘನತೆಯುಕ್ತ ಜೀವನಕ್ಕೆ ಅಗತ್ಯವಾದ ಅಡಿಪಾಯಗಳನ್ನು ಒದಗಿಸುವ ಸಮಗ್ರ ಕಾರ್ಯಕ್ರಮಗಳು.',
      pillarsDesc: 'ನೀವು ನೀಡುವ ಪ್ರತಿ ರೂಪಾಯಿ ಈ ನಾಲ್ಕು ಕೆಲಸಗಳಲ್ಲಿ ಒಂದಕ್ಕೆ ನೇರವಾಗಿ ಹೋಗುತ್ತದೆ.',
      trustTitle: 'ಪಾರದರ್ಶಕತೆ ಮತ್ತು ನಂಬಿಕೆ',
      trustPoint1: 'ಕರ್ನಾಟಕದ ಮಂಗಳೂರಿನಲ್ಲಿ ಪ್ರಧಾನ ಕಚೇರಿ ಹೊಂದಿರುವ ನೋಂದಾಯಿತ ಎನ್‌ಜಿಒ.',
      trustPoint2: 'ನೀಡಿದ ಹಣ 100% ನೇರವಾಗಿ ಜನರಿಗೆ. ಕಮಿಷನ್ ಇಲ್ಲ.',
      trustPoint3: 'ವಿನಂತಿಯ ಮೇರೆಗೆ ದಾನಿಗಳಿಗೆ ಲಭ್ಯವಿರುವ ವಾರ್ಷಿಕ ಆರ್ಥಿಕ ಲೆಕ್ಕಪರಿಶೋಧನೆ.',
      trustPoint4: 'ಪ್ರತಿಯೊಂದು ಕೊಡುಗೆಗೂ ಬ್ಯಾಂಕ್ ರಸೀದಿ ಮತ್ತು 80G ತೆರಿಗೆ ವಿನಾಯಿತಿ ಪ್ರಮಾಣಪತ್ರ.',
      hqTitle: 'ಕೇಂದ್ರ ಕಚೇರಿ'
    },
    stats: {
      housesDelivered: 'ವಿತರಿಸಲಾದ ಮನೆಗಳು',
      housesSubtext: 'ಗುರಿ: ಪ್ರಾಜೆಕ್ಟ್ ಆಶಿಯಾನಾದಲ್ಲಿ 2030 ರ ವೇಳೆಗೆ 150 ಮನೆಗಳು',
      masjidsRevived: 'ಸರಿಪಡಿಸಿದ ಮಸೀದಿಗಳು',
      masjidsSubtext: 'ಕರ್ನಾಟಕ ಮತ್ತು ಆಂಧ್ರಪ್ರದೇಶದಾದ್ಯಂತ',
      orphansNurtured: 'ಪೋಷಿಸಲಾದ ಅನಾಥ ವಿದ್ಯಾರ್ಥಿಗಳು',
      orphansSubtext: 'ಸಮಗ್ರ ವಸತಿ, ಹಿಫ್ಜ್ ಮತ್ತು ಆಧುನಿಕ ಶಿಕ್ಷಣ',
      bloodUnits: 'ಸಂಗ್ರಹಿಸಿದ ರಕ್ತದ ಯೂನಿಟ್‌ಗಳು',
      bloodSubtext: 'ಜೀವ ಉಳಿಸುವ ತುರ್ತು ರಕ್ತ ನಿಧಿ ಯೂನಿಟ್‌ಗಳು',
      auditTransparency: 'ಲೆಕ್ಕ ಮತ್ತು ನಂಬಿಕೆ',
      auditSubtext: 'ನೇರ ಸಹಾಯ. ಕಮಿಷನ್ ಇಲ್ಲ'
    },
    pillars: {
      housingTitle: 'ವಸತಿ ಯೋಜನೆ',
      housingDesc: 'ನಿರ್ಗತಿಕ ಕುಟುಂಬಗಳಿಗೆ ಶಾಶ್ವತ ಆಶಿಯಾನಾ ಮನೆಗಳು',
      orphanCareTitle: 'ಅನಾಥರ ಪೋಷಣೆ',
      orphanCareDesc: 'ಚಿನ್ನಪಲ್ಲಿ, ಚಿತ್ತೂರಿನಲ್ಲಿ ಅನುಕೂಲವಂಚಿತರ ಆಶ್ರಯ',
      masjidRevivalTitle: 'ಮಸೀದಿ ಜೀರ್ಣೋದ್ಧಾರ',
      masjidRevivalDesc: '176 ಗ್ರಾಮೀಣ ಮಸೀದಿಗಳ ಪುನರಾರಂಭ ಮತ್ತು ಬೆಂಬಲ',
      healthcareTitle: 'ಆರೋಗ್ಯ ಸೇವೆ',
      healthcareDesc: 'ಉಚಿತ ಮೆಡಿಬ್ಯಾಂಕ್ ಉಪಕರಣಗಳು ಮತ್ತು ರಕ್ತದಾನಿಗಳ ಜಾಲ'
    },
    projects: {
      eyebrow: 'ನಮ್ಮ ಯೋಜನೆಗಳು',
      title: 'ಶಾಶ್ವತ ಬದಲಾವಣೆಗಾಗಿ ರೂಪಿಸಲಾದ ಪ್ರಮುಖ ಕಾರ್ಯಕ್ರಮಗಳು.',
      subtitle:
        'ದಕ್ಷಿಣ ಭಾರತದಾದ್ಯಂತ ವಸತಿ, ಅನಾಥರ ಆರೈಕೆ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಸಮುದಾಯ ಮೂಲಸೌಕರ್ಯವನ್ನು ಬಲಪಡಿಸುವ ಮೂರು ದೀರ್ಘಕಾಲೀನ ಯೋಜನೆಗಳು.',
      allProgramsBadge: 'ಎಲ್ಲಾ ಯೋಜನೆಗಳು',
      allProgramsTitle: 'ನಿಧಿಯಿಂದ ಹಿಡಿದು ಕಾರ್ಯಕ್ಷೇತ್ರದವರೆಗೆ ಪಾರದರ್ಶಕವಾಗಿ ದಾಖಲಿಸಲ್ಪಡುವ ಯೋಜನೆಗಳು.',
      viewAll: 'ಎಲ್ಲಾ ಯೋಜನೆಗಳನ್ನು ನೋಡಿ',
      achievementsTitle: 'ಮುಖ್ಯ ಸಾಧನೆಗಳು',
      futureGoalsTitle: 'ಮುಂದಿನ ಗುರಿ',
      tiersTitle: 'ಸಹಾಯದ ಮೊತ್ತ',
      beforeAfterTitle: 'ಮೊದಲು ಮತ್ತು ನಂತರ',
      beforeLabel: 'ಮೊದಲು',
      afterLabel: 'ನಂತರ',
      afterComingSoon: 'ಪೂರ್ಣಗೊಂಡ ಮನೆಗಳು ಮುಂದೆ ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತವೆ.',
      ashiyana: {
        title: 'ಪ್ರಾಜೆಕ್ಟ್ ಆಶಿಯಾನಾ',
        subtitle: 'ನಿರಾಶ್ರಿತ ಮತ್ತು ನಿರ್ಗತಿಕ ಕುಟುಂಬಗಳಿಗೆ ಘನತೆಯ ಆಸರೆ',
        badge: 'ವಸತಿ ಮಿಷನ್',
        overview:
          'ಶಿಥಿಲಾವಸ್ಥೆಯ ಗುಡಿಸಲುಗಳಲ್ಲಿ ವಾಸಿಸುತ್ತಿರುವ ವಿಧವಾ ತಾಯಂದಿರು, ಬಡ ಗ್ರಾಮೀಣ ಕುಟುಂಬಗಳು ಮತ್ತು ವಿಕಲಚೇತನರಿಗೆ ಪ್ರಾಜೆಕ್ಟ್ ಆಶಿಯಾನಾ ಗಟ್ಟಿಮುಟ್ಟಾದ ಶಾಶ್ವತ ಮನೆಗಳನ್ನು ನಿರ್ಮಿಸಿಕೊಡುತ್ತದೆ.',
        statHomesBuilt: '36 ನಿರ್ಮಿಸಿದ ಮನೆಗಳು',
        statTarget: 'ಗುರಿ: 2030 ರ ವೇಳೆಗೆ 150 ಮನೆಗಳು',
        statAvgCost: 'ಸರಾಸರಿ ವೆಚ್ಚ ₹7.5 – ₹10 ಲಕ್ಷ'
      },
      chittor: {
        title: 'HIF ಚಿತ್ತೂರು – D.U.R.J',
        subtitle: 'ಅನುಕೂಲವಂಚಿತರಿಗೆ ಆಶ್ರಯ',
        badge: 'ಅನುಕೂಲವಂಚಿತರಿಗೆ ಆಶ್ರಯ',
        overview:
          'ಹಳೆಯ ಕಟ್ಟಡದಿಂದ ಅಭಿವೃದ್ಧಿ ಹೊಂದಿದ ಆವರಣ — ಚಿನ್ನಪಲ್ಲಿ, ಚಿತ್ತೂರು ಜಿಲ್ಲೆ, ಆಂಧ್ರಪ್ರದೇಶದಲ್ಲಿ 2.5 ಎಕರೆಯ ಅನುಕೂಲವಂಚಿತರ ಆಶ್ರಯ.',
        statBoys: '2.5 ಎಕರೆ ಆವರಣ',
        statCampus: '20,000 ಚ.ಅಡಿ ಕಟ್ಟಡ',
        statCurriculum: 'ಚಿನ್ನಪಲ್ಲಿ, ಚಿತ್ತೂರು ಜಿಲ್ಲೆ'
      },
      masjid: {
        title: 'ಮಸೀದಿ ಅಭಿವೃದ್ಧಿ ಯೋಜನೆ',
        subtitle: 'ಸಮುದಾಯ + ಬೆಂಬಲ + ಸುಸ್ಥಿರತೆ',
        badge: 'ಆಧ್ಯಾತ್ಮಿಕ ಸಮುದಾಯ',
        overview:
          'ಚಿಂತಾಮಣಿ ಬಳಿ ಮುಚ್ಚಿದ್ದ ಒಂದು ಮಸೀದಿಯಿಂದ ಶುರುವಾಗಿ, ಈಗ 176 ಮಸೀದಿಗಳನ್ನು ಪುನರಾರಂಭಿಸಿ ಬೆಂಬಲಿಸುವ ಚಳುವಳಿಯಾಗಿದೆ, ಅಲ್ಹಮ್ದುಲಿಲ್ಲಾಹ್.',
        statReopened: '176 ಮಸೀದಿಗಳಿಗೆ ಬೆಂಬಲ',
        statNewBuilt: '1 ಮಸೀದಿಯಿಂದ ಆರಂಭ',
        statReach: 'ಕರ್ನಾಟಕ ಮತ್ತು ಆಂಧ್ರಪ್ರದೇಶ'
      },
      educationCity: {
        title: 'HIF ಎಜುಕೇಶನ್ ಸಿಟಿ',
        subtitle: 'ಮಂಗಳೂರಿನ ಅಸೈಗೋಳಿಯಲ್ಲಿ ತಲೆಯೆತ್ತುತ್ತಿರುವ 3.82 ಎಕರೆಯ ಅರೇಬಿಕ್ ಅಕಾಡೆಮಿ',
        badge: 'ಇಸ್ಲಾಮಿಕ್ ಶಿಕ್ಷಣ ಮೂಲಸೌಕರ್ಯ',
        overview:
          'ಮಂಗಳೂರಿನ ಅಸೈಗೋಳಿಯಲ್ಲಿ 3.82 ಎಕರೆ ಆವರಣದಲ್ಲಿ ತಲೆಯೆತ್ತುತ್ತಿರುವ ಅತ್ಯಾಧುನಿಕ ಅರೇಬಿಕ್ ಅಕಾಡೆಮಿ, ಮುಂದಿನ ಪೀಳಿಗೆಯ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಇಸ್ಲಾಮಿಕ್ ಶಿಕ್ಷಣವನ್ನು ಪರಿವರ್ತಿಸುವ ಗುರಿಯನ್ನು ಹೊಂದಿದೆ.'
      },
      boondh: {
        title: 'ಪ್ರಾಜೆಕ್ಟ್ ಬೂಂದ್',
        subtitle: 'ಸೌಲಭ್ಯವಂಚಿತ ಸಮುದಾಯಗಳಿಗೆ ಸುರಕ್ಷಿತ ಕುಡಿಯುವ ನೀರು',
        badge: 'ನೀರಿನ ಭದ್ರತೆ',
        overview:
          'ಪ್ರಾಜೆಕ್ಟ್ ಬೂಂದ್ ಬೋರ್‌ವೆಲ್, ನೀರಿನ ಟ್ಯಾಂಕರ್ ಮತ್ತು ಶುದ್ಧೀಕರಣ ಮೂಲಸೌಕರ್ಯದ ಮೂಲಕ ಸೌಲಭ್ಯವಂಚಿತ ಸಮುದಾಯಗಳಿಗೆ ಶುದ್ಧ ಮತ್ತು ಸುರಕ್ಷಿತ ಕುಡಿಯುವ ನೀರನ್ನು ಒದಗಿಸುತ್ತದೆ.'
      },
      libaas: {
        title: 'ಪ್ರಾಜೆಕ್ಟ್ ಲಿಬಾಸ್',
        subtitle: 'ಸೌಲಭ್ಯವಂಚಿತ ವಧು-ವರರಿಗೆ ಘನತೆಯ ಆಚರಣೆ',
        badge: 'ಘನತೆ ಮತ್ತು ಆಚರಣೆ',
        overview:
          'ಪ್ರಾಜೆಕ್ಟ್ ಲಿಬಾಸ್ ಸೌಲಭ್ಯವಂಚಿತ ಕುಟುಂಬಗಳ ವಧು-ವರರಿಗೆ ಮದುವೆ ಉಡುಪುಗಳನ್ನು ಒದಗಿಸಿ, ಅವರ ವಿಶೇಷ ದಿನವನ್ನು ಘನತೆಯಿಂದ ಆಚರಿಸಲು ನೆರವಾಗುತ್ತದೆ. ಒಳ್ಳೆಯ ಸ್ಥಿತಿಯ ವಧು ಬಟ್ಟೆಗಳನ್ನೂ ಸ್ವೀಕರಿಸುತ್ತೇವೆ.'
      }
    },
    activities: {
      eyebrow: 'ಚಟುವಟಿಕೆಗಳು ಮತ್ತು ವಿಭಾಗಗಳು',
      title: 'ವಿಶೇಷ ಸಮುದಾಯ ಪ್ರಭಾವಕ್ಕಾಗಿ ಪ್ರತ್ಯೇಕ ಘಟಕಗಳು.',
      subtitle:
        'ತುರ್ತು ವೈದ್ಯಕೀಯ ಉಪಕರಣಗಳಿಂದ ಹಿಡಿದು ಯುವಜನತೆಯ ಕೌಶಲ್ಯ ವಿಕಸನ ಮತ್ತು ಶೈಕ್ಷಣಿಕ ನೆರವಿನವರೆಗೆ ನಮ್ಮ ವಿಭಾಗಗಳು ನಿರಂತರ ನೇರ ಸೇವೆ ನೀಡುತ್ತವೆ.',
      wingsBadge: 'ನಮ್ಮ ವಿಭಾಗಗಳು',
      wingsTitle: 'ಆರೋಗ್ಯ, ಶಿಕ್ಷಣ ಮತ್ತು ಯುವಜನತೆಯಲ್ಲಿ ನಿರಂತರ ಸಮುದಾಯ ಸೇವೆ.',
      featuresTitle: 'ನಾವು ಮಾಡುವುದು',
      impactTitle: 'ಇಲ್ಲಿಯವರೆಗಿನ ಸಹಾಯ',
      medical: {
        title: 'HIF ವೈದ್ಯಕೀಯ ವಿಭಾಗ & ಮೆಡಿಬ್ಯಾಂಕ್',
        subtitle: 'ಉಚಿತ ವೈದ್ಯಕೀಯ ಉಪಕರಣಗಳ ಸಾಲ ಮತ್ತು ಜೀವ ಉಳಿಸುವ ಆರೋಗ್ಯ ಸೇವೆ',
        badge: 'ಆರೋಗ್ಯ ಮತ್ತು ಪರಿಹಾರ',
        overview:
          'ಆಸ್ಪತ್ರೆ ಬೆಡ್‌ಗಳು, ಆಕ್ಸಿಜನ್ ಕಾನ್ಸನ್‌ಟ್ರೇಟರ್‌ಗಳು, ವ್ಹೀಲ್‌ಚೇರ್‌ಗಳಂತಹ ದುಬಾರಿ ಉಪಕರಣಗಳನ್ನು ಉಚಿತವಾಗಿ ನೀಡುವುದು ಮತ್ತು ತುರ್ತು ರಕ್ತದಾನ ಹಾಗೂ ಡಯಾಲಿಸಿಸ್ ಸಹಾಯಧನ ಒದಗಿಸುವುದು.',
        statBlood: '1,500+ ಯೂನಿಟ್ ರಕ್ತದಾನ',
        statEquipment: '200+ ಉಪಕರಣಗಳ ಭಂಡಾರ',
        statHelpline: '24/7 ಸಹಾಯವಾಣಿ'
      },
      education: {
        title: 'HIF ಶಿಕ್ಷಣ ವಿಭಾಗ',
        subtitle: 'ಶೈಕ್ಷಣಿಕ ಉತ್ಕೃಷ್ಟತೆ, ಡಿಜಿಟಲ್ ಕೌಶಲ್ಯ ಮತ್ತು ಮೌಲ್ಯಾಧಾರಿತ ಶಿಕ್ಷಣ',
        badge: 'ಶೈಕ್ಷಣಿಕ ಬಲಪಡಿಸುವುದು',
        overview:
          'ಪ್ರತಿಭಾವಂತ ಬಡ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ವಿದ್ಯಾರ್ಥಿವೇತನ, ಉಚಿತ ಬ್ಯಾಗ್ ಮತ್ತು ಪುಸ್ತಕ ವಿತರಣೆ, ಕಂಪ್ಯೂಟರ್ ಶಿಕ್ಷಣ ಹಾಗೂ ಬೇಸಿಗೆ ನಾಯಕತ್ವ ಶಿಬಿರಗಳನ್ನು ನಡೆಸುವುದು.',
        statStudents: '2,500+ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ನೆರವು',
        statScholarships: '₹40L+ ವಿದ್ಯಾರ್ಥಿವೇತನ ವಿತರಣೆ',
        statCamps: '45+ ಶಿಬಿರಗಳು'
      },
      youth: {
        title: 'HIF ಯುವ ಘಟಕ ಶಿಕ್ಷಣ ಕೋಶ',
        subtitle: 'ಕೌಶಲ್ಯ, ಇಂಗ್ಲಿಷ್ ಮತ್ತು ಸಮುದಾಯ ಸೇವೆಯೊಂದಿಗೆ ಮುಂದಿನ ಪೀಳಿಗೆಯ ನಾಯಕರನ್ನು ಪ್ರೇರೇಪಿಸುವುದು',
        badge: 'ಯುವ ನಾಯಕತ್ವ',
        overview:
          'ಸ್ಪೋಕನ್ ಇಂಗ್ಲಿಷ್ ತರಬೇತಿ, ಡಿಜಿಟಲ್ ಸಾಕ್ಷರತೆ, ಪ್ರವಾಹ ಪರಿಹಾರ ಕಾರ್ಯಾಚರಣೆ ಮತ್ತು ನೈತಿಕ ಮಾರ್ಗದರ್ಶನದ ಮೂಲಕ ಯುವಕರನ್ನು ಸಮಾಜ ಪರಿವರ್ತಕರನ್ನಾಗಿ ರೂಪಿಸುವುದು.',
        statVolunteers: '300+ ಸಕ್ರಿಯ ಯುವ ಸ್ವಯಂಸೇವಕರು',
        statWorkshops: '60+ ಕೌಶಲ್ಯ ಕಾರ್ಯಾಗಾರಗಳು',
        statDrives: '120+ ಸಮುದಾಯ ಅಭಿಯಾನಗಳು'
      },
      womenSkill: {
        title: 'ಮಹಿಳಾ ಕೌಶಲ್ಯ ಮತ್ತು ಜೀವನೋಪಾಯ ಕೇಂದ್ರ',
        subtitle: 'ಹೊಲಿಗೆ, ಕರಕುಶಲ ತರಬೇತಿ ಮತ್ತು ಕಿರು ಉದ್ಯಮ ಬೆಂಬಲ',
        badge: 'ಸ್ವಾವಲಂಬನೆ',
        overview:
          'ವಿಧವೆಯರು ಮತ್ತು ಕಡಿಮೆ ಆದಾಯದ ಮಹಿಳೆಯರಿಗೆ ಹೊಲಿಗೆ ಯಂತ್ರ ವಿತರಣೆ, ಕಸೂತಿ ತರಬೇತಿ ಮತ್ತು ಸ್ವಾವಲಂಬಿ ಗೃಹ ಉದ್ಯಮಗಳಿಗೆ ಪ್ರೋತ್ಸಾಹ ನೀಡುವುದು.'
      },
      disasterRelief: {
        title: 'ವಿಪತ್ತು ಪರಿಹಾರ ಮತ್ತು ತ್ವರಿತ ಕಾರ್ಯಾಚರಣೆ',
        subtitle: 'ಪ್ರವಾಹ ಪರಿಹಾರ, ಪಡಿತರ ಕಿಟ್‌ಗಳು ಮತ್ತು ತುರ್ತು ಪುನರ್ವಸತಿ',
        badge: 'ತುರ್ತು ನೆರವು',
        overview:
          'ಮಳೆಗಾಲದ ಪ್ರವಾಹ ಮತ್ತು ಪ್ರಾಕೃತಿಕ ವಿಕೋಪಗಳ ಸಂದರ್ಭದಲ್ಲಿ ತುರ್ತು ರಕ್ಷಣಾ ತಂಡಗಳು, ಕುಡಿಯುವ ನೀರು, ಆಹಾರ ಕಿಟ್‌ಗಳು ಮತ್ತು ಮನೆ ದುರಸ್ತಿ ಸಾಮಗ್ರಿಗಳನ್ನು ತಲುಪಿಸುವುದು.'
      }
    },
    gallery: {
      eyebrow: 'ಚಿತ್ರಗಳು',
      title: 'ಕಾರ್ಯಕ್ಷೇತ್ರದಲ್ಲಿ ಬದಲಾವಣೆಯ ನೈಜ ಕ್ಷಣಗಳು.',
      subtitle:
        'ಮನೆಗಳ ಹಸ್ತಾಂತರ, ವಿದ್ಯಾರ್ಥಿಗಳ ಕಲಿಕೆ, ಮಸೀದಿಗಳ ಜೀರ್ಣೋದ್ಧಾರ ಮತ್ತು ಸಾಂತ್ವನ ಪಡೆದ ಜನರ ಮುಖಗಳ ದೃಶ್ಯ ದಾಖಲೆ.',
      filters: {
        all: 'ಎಲ್ಲವೂ',
        housing: 'ವಸತಿ',
        orphanage: 'ಅನಾಥಾಲಯ',
        masjid: 'ಮಸೀದಿ',
        healthcare: 'ಆರೋಗ್ಯ ಸೇವೆ',
        education: 'ಶಿಕ್ಷಣ',
        community: 'ಸಮುದಾಯ',
        youth: 'ಯುವಜನತೆ'
      },
      emptyMessage: 'ಈ ವರ್ಗದಲ್ಲಿ ಯಾವುದೇ ಫೋಟೋಗಳು ಕಂಡುಬಂದಿಲ್ಲ.'
    },
    reels: {
      eyebrow: 'ನಮ್ಮ ರೀಲ್‌ಗಳು',
      title: 'ಕಾರ್ಯಕ್ಷೇತ್ರದಿಂದ ನೇರವಾಗಿ, ನೋಡಲೇಬೇಕಾದ ಕಥೆಗಳು',
      subtitle:
        'ಮನೆ ಹಸ್ತಾಂತರ, ತರಗತಿಯ ದಿನಗಳು ಮತ್ತು ಪರಿಹಾರ ಕಾರ್ಯಗಳ ಹಿಂದಿನ ಕ್ಷಣಗಳನ್ನು ಕಿರು ರೀಲ್‌ಗಳ ಮೂಲಕ ಹತ್ತಿರದಿಂದ ನೋಡಿ.',
      previous: 'ಹಿಂದಿನ ರೀಲ್',
      next: 'ಮುಂದಿನ ರೀಲ್',
      viewReel: 'ರೀಲ್ ನೋಡಿ',
      followUs: 'ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ @hif_india ಅನ್ನು ಫಾಲೋ ಮಾಡಿ',
      mute: 'ಮ್ಯೂಟ್',
      unmute: 'ಅನ್‌ಮ್ಯೂಟ್'
    },
    featureVideos: {
      eyebrow: 'ಕಾರ್ಯಕ್ಷೇತ್ರದಲ್ಲಿ',
      title: 'ನೆನಪಿನಲ್ಲಿ ಉಳಿಯುವ ಕ್ಷಣಗಳು',
      subtitle:
        'ಕ್ಷೇತ್ರದಿಂದ ದೀರ್ಘ ಕಥೆಗಳು — ನಮ್ಮ ಧ್ಯೇಯವನ್ನು ವ್ಯಾಖ್ಯಾನಿಸುವ ಜನರು, ಸ್ಥಳಗಳು ಮತ್ತು ದಿನಗಳು.',
      previous: 'ಹಿಂದಿನ ವೀಡಿಯೊ',
      next: 'ಮುಂದಿನ ವೀಡಿಯೊ',
      viewVideo: 'ವೀಡಿಯೊ ನೋಡಿ',
      mute: 'ಮ್ಯೂಟ್',
      unmute: 'ಅನ್‌ಮ್ಯೂಟ್'
    },
    getInvolved: {
      eyebrow: 'ಭಾಗವಹಿಸಿ',
      title: 'ಸಮಾಜ ಬದಲಾವಣೆಯಲ್ಲಿ ಪ್ರತಿಯೊಬ್ಬರಿಗೂ ಪಾತ್ರವಿದೆ.',
      description:
        'ನಿಮ್ಮ ಪ್ರಭಾವವನ್ನು ಲೆಕ್ಕಹಾಕಿ, ಸ್ವಯಂಸೇವಕರಾಗಿ ನೋಂದಾಯಿಸಿ ಅಥವಾ ನೇರವಾಗಿ ದಾನ ಮಾಡಿ — ಪ್ರತಿಯೊಂದು ಮಾರ್ಗವೂ ನೇರಲ್ಲಿ ಸಕಾರಾತ್ಮಕ ಬದಲಾವಣೆಗೆ ಕಾರಣವಾಗುತ್ತದೆ.',
      calculatorBadge: 'ಪ್ರಭಾವ ಕ್ಯಾಲ್ಕುಲೇಟರ್',
      calculatorTitle: 'ನಿಮ್ಮ ದೇಣಿಗೆ ಎಂತಹ ಬದಲಾವಣೆ ತರುತ್ತದೆ ನೋಡಿ',
      calculatorSubtitle: 'ನೀವು ತರಬಹುದಾದ ನೈಜ ಬದಲಾವಣೆಯನ್ನು ನೋಡಲು ಮೊತ್ತವನ್ನು ಆಯ್ಕೆಮಾಡಿ.',
      volunteerBadge: 'ನಮ್ಮೊಂದಿಗೆ ಕೈಜೋಡಿಸಿ',
      volunteerTitle: 'HIF ಸ್ವಯಂಸೇವಕರಾಗಿ',
      volunteerSubtitle: 'ಸಮುದಾಯದ ಶಾಶ್ವತ ಪರಿವರ್ತನೆಗಾಗಿ ನಿಮ್ಮ ಕೌಶಲ್ಯ ಮತ್ತು ಸಮಯವನ್ನು ವಿನಿಯೋಗಿಸಿ.',
      form: {
        fullName: 'ಪೂರ್ಣ ಹೆಸರು *',
        fullNamePlaceholder: 'ಉದಾ: ಮೊಹಮ್ಮದ್ ಫಾರೂಕ್',
        email: 'ಇಮೇಲ್ ವಿಳಾಸ *',
        emailPlaceholder: 'you@example.com',
        phone: 'ದೂರವಾಣಿ / WhatsApp *',
        phonePlaceholder: '+91 98750 81312',
        city: 'ನಗರ / ಸ್ಥಳ *',
        cityPlaceholder: 'ಉದಾ: ಮಂಗಳೂರು, ಉಡುಪಿ, ಬೆಂಗಳೂರು',
        skillsLabel: 'ನೀವು ಹೇಗೆ ಕೊಡುಗೆ ನೀಡಲು ಬಯಸುತ್ತೀರಿ? (ಕೌಶಲ್ಯಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ)',
        availableHours: 'ಲಭ್ಯವಿರುವ ಸಮಯ / ವಾರಕ್ಕೆ',
        availableHoursPlaceholder: 'ಉದಾ: ವಾರಾಂತ್ಯದಲ್ಲಿ 4-6 ಗಂಟೆಗಳು',
        notes: 'ಸಂಕ್ಷಿಪ್ತ ಪರಿಚಯ / ಹಿಂದಿನ ಅನುಭವ',
        notesPlaceholder: 'ನಿಮ್ಮ ಹಿನ್ನೆಲೆ, ಆಸಕ್ತಿಗಳು ಅಥವಾ ಸ್ವಯಂಸೇವಕರಾಗಲು ಕಾರಣಗಳನ್ನು ತಿಳಿಸಿ...',
        submitButton: 'ಸ್ವಯಂಸೇವಕರಾಗಿ ನೋಂದಾಯಿಸಿ',
        submittingButton: 'ಸಲ್ಲಿಸಲಾಗುತ್ತಿದೆ...',
        submitError: 'ಅರ್ಜಿ ಸಲ್ಲಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ ಅಥವಾ WhatsApp ನಲ್ಲಿ ಸಂದೇಶ ಕಳುಹಿಸಿ.',
        whatsAppButton: 'WhatsApp ನಲ್ಲಿ ಸಂದೇಶ ಕಳುಹಿಸಿ',
        successTitle: 'ನೋಂದಣಿಗೆ ಧನ್ಯವಾದಗಳು!',
        successMessage: 'ನಮ್ಮ ಸ್ವಯಂಸೇವಕ ಸಂಯೋಜಕರು ಶೀಘ್ರದಲ್ಲೇ WhatsApp ಅಥವಾ ಫೋನ್ ಮೂಲಕ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತಾರೆ.',
        submitAnother: 'ಇನ್ನೊಂದು ಅರ್ಜಿ ಸಲ್ಲಿಸಿ'
      },
      skills: {
        bloodDonation: 'ರಕ್ತದಾನ / ವೈದ್ಯಕೀಯ ಸಮನ್ವಯ',
        teaching: 'ಓದಿಸುವುದು / ಸ್ಪೋಕನ್ ಇಂಗ್ಲಿಷ್',
        disasterResponse: 'ವಿಪತ್ತು ಮತ್ತು ಪ್ರವಾಹ ತುರ್ತು ಸ್ಪಂದನೆ',
        mediaDesign: 'ಗ್ರಾಫಿಕ್ ವಿನ್ಯಾಸ, ವೀಡಿಯೊ ಮತ್ತು ಸೋಷಿಯಲ್ ಮೀಡಿಯಾ',
        fieldVerification: 'ಆಶಿಯಾನಾ ಕ್ಷೇತ್ರ ಪರಿಶೀಲನೆ & ಪರಿಹಾರ',
        eventLogistics: 'ಕಾರ್ಯಕ್ರಮ ಸಂಘಟನೆ ಮತ್ತು ಲಾಜಿಸ್ಟಿಕ್ಸ್'
      },
      bankCard: {
        title: 'ನೇರ ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆ',
        subtitle: 'ಯಾವುದೇ ಸಂಸ್ಕರಣಾ ಶುಲ್ಕವಿಲ್ಲದೆ ನೇರವಾಗಿ ನಮ್ಮ ಖಾತೆಗೆ ಜಮಾ ಮಾಡಿ',
        accountName: 'ಫಲಾನುಭವಿಯ ಹೆಸರು',
        accountNumber: 'ಖಾತೆ ಸಂಖ್ಯೆ',
        ifsc: 'IFSC ಕೋಡ್',
        branch: 'ಶಾಖೆ',
        upiId: 'UPI ID',
        taxNote: 'ಎಲ್ಲಾ ದೇಣಿಗೆಗಳಿಗೆ 80G ತೆರಿಗೆ ವಿನಾಯಿತಿ ಸೌಲಭ್ಯ ಅನ್ವಯಿಸುತ್ತದೆ.',
        copyDetails: 'ಎಲ್ಲಾ ಬ್ಯಾಂಕ್ ವಿವರ ನಕಲಿಸಿ'
      },
      faqTitle: 'ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು',
      faqSubtitle: 'ದಾನ, ಲೆಕ್ಕಪರಿಶೋಧನೆ ಮತ್ತು ಯೋಜನೆಗಳ ಬಗ್ಗೆ ಸರಳ ಉತ್ತರಗಳು.',
      faqs: {
        q1: 'HIF India ದೇಣಿಗೆಗಳಿಗೆ 80G ತೆರಿಗೆ ವಿನಾಯಿತಿ ಲಭ್ಯವಿದೆಯೇ?',
        a1: 'ಹೌದು, ಭಾರತೀಯ ಆದಾಯ ತೆರಿಗೆ ಕಾಯ್ದೆಯಡಿ HIF INDIA ಗೆ ನೀಡುವ ದೇಣಿಗೆಗಳಿಗೆ 80G ತೆರಿಗೆ ವಿನಾಯಿತಿ ಅನ್ವಯಿಸುತ್ತದೆ. ಅಧಿಕೃತ ರಸೀದಿಗಳನ್ನು ನೀಡಲಾಗುತ್ತದೆ.',
        q2: 'ನನ್ನ ದೇಣಿಗೆಯ ಎಷ್ಟು ಭಾಗ ನೇರವಾಗಿ ಫಲಾನುಭವಿಗಳಿಗೆ ತಲುಪುತ್ತದೆ?',
        a2: 'ಯೋಜನೆಗಾಗಿ ನೀಡಲಾದ ದೇಣಿಗೆಯ 100% ಭಾಗವು ಯಾವುದೇ ಆಡಳಿತಾತ್ಮಕ ಕಡಿತವಿಲ್ಲದೆ ನೇರವಾಗಿ ಸಾಮಗ್ರಿಗಳು, ಆಹಾರ ಅಥವಾ ವೈದ್ಯಕೀಯ ನೆರವಿಗೆ ಬಳಕೆಯಾಗುತ್ತದೆ.',
        q3: 'ನಾನು ಸಂಪೂರ್ಣ ಆಶಿಯಾನಾ ಮನೆ ಅಥವಾ ಅನಾಥ ವಿದ್ಯಾರ್ಥಿಯನ್ನು ಪ್ರಾಯೋಜಿಸಬಹುದೇ?',
        a3: 'ಖಂಡಿತವಾಗಿ! ನೀವು ಸಂಪೂರ್ಣ ಮನೆ ನಿರ್ಮಾಣವನ್ನು (₹7.5 ಲಕ್ಷ) ಅಥವಾ ಅನಾಥ ವಿದ್ಯಾರ್ಥಿಯ ವಾರ್ಷಿಕ ಶಿಕ್ಷಣವನ್ನು (₹15,000/ವರ್ಷ) ಸಂಪೂರ್ಣ ವರದಿಯೊಂದಿಗೆ ಪ್ರಾಯೋಜಿಸಬಹುದು.',
        q4: 'ನಾನು ಮಂಗಳೂರಿನ ಹೊರಗಿದ್ದರೆ ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಸ್ವಯಂಸೇವಕನಾಗಬಹುದೇ?',
        a4: 'ಖಂಡಿತ. ಡಿಜಿಟಲ್ ವಿನ್ಯಾಸ, ಅನುವಾದ, ವೆಬ್ ಅಭಿವೃದ್ಧಿ ಮತ್ತು ಸೋಷಿಯಲ್ ಮೀಡಿಯಾ ಪ್ರಚಾರಕ್ಕಾಗಿ ಆನ್‌ಲೈನ್ ಸ್ವಯಂಸೇವಕರನ್ನು ನಾವು ಸ್ವಾಗತಿಸುತ್ತೇವೆ.'
      }
    },
    contact: {
      eyebrow: 'ಸಂಪರ್ಕಿಸಿ',
      title: 'ನಮ್ಮೊಂದಿಗೆ ಮಾತನಾಡಿ.',
      description:
        'ದೇಣಿಗೆಗಳು, ಪ್ರಾಯೋಜಕತ್ವಗಳು, ವೈದ್ಯಕೀಯ ಉಪಕರಣಗಳ ವಿನಂತಿ ಅಥವಾ ಸ್ವಯಂಸೇವಕರಾಗಲು ನಮ್ಮ ಮಂಗಳೂರು ಕೇಂದ್ರ ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ.',
      centralSecretariat: 'ಕೇಂದ್ರ ಕಾರ್ಯಾಲಯ',
      hours: 'ಕೆಲಸದ ಸಮಯ',
      hoursValue: 'ಬೆಳಗ್ಗೆ 9:00 – ಸಂಜೆ 7:00 (ಸೋಮ–ಶನಿ)',
      primaryPhoneLabel: 'ಮುಖ್ಯ ಕಚೇರಿ & ವೈದ್ಯಕೀಯ ವಿಭಾಗ',
      altPhoneLabel: 'ಪರ್ಯಾಯ ಸಹಾಯವಾಣಿ',
      emailLabel: 'ಅಧಿಕೃತ ಇಮೇಲ್',
      formTitle: 'ನಮಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿ',
      formSubtitle: 'ನಾವು ಸಾಮಾನ್ಯವಾಗಿ 24 ಗಂಟೆಗಳ ಒಳಗೆ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತೇವೆ.',
      nameLabel: 'ಪೂರ್ಣ ಹೆಸರು *',
      namePlaceholder: 'ಉದಾ: ಅಹ್ಮದ್ ಖಾನ್',
      emailInputLabel: 'ಇಮೇಲ್ ವಿಳಾಸ *',
      emailPlaceholder: 'ahmed@example.com',
      phoneInputLabel: 'ದೂರವಾಣಿ / WhatsApp',
      phonePlaceholder: '+91 98750 81312',
      subjectLabel: 'ವಿಷಯ',
      subjectPlaceholder: 'ವಿಷಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
      subjects: {
        general: 'ಸಾಮಾನ್ಯ ವಿಚಾರಣೆ',
        donation: 'ದೇಣಿಗೆ ಮತ್ತು 80G ರಸೀದಿ',
        volunteer: 'ಸ್ವಯಂಸೇವಕ ಸೇವೆ',
        medical: 'ವೈದ್ಯಕೀಯ ಉಪಕರಣ / ಮೆಡಿಬ್ಯಾಂಕ್ ವಿನಂತಿ',
        partnership: 'ಸಂಸ್ಥೆ / ಸಿಎಸ್‌ಆರ್ ಪಾಲುದಾರಿಕೆ',
        other: 'ಇತರೆ'
      },
      messageFieldLabel: 'ನಿಮ್ಮ ಸಂದೇಶ *',
      messagePlaceholder: 'ನಾವು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?',
      sendMessage: 'ಸಂದೇಶ ಕಳುಹಿಸಿ',
      sendingMessage: 'ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ...',
      submitError: 'ಸಂದೇಶ ಕಳುಹಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ ಅಥವಾ WhatsApp ನಲ್ಲಿ ಸಂದೇಶ ಕಳುಹಿಸಿ.',
      whatsAppButton: 'WhatsApp ನಲ್ಲಿ ಸಂದೇಶ ಕಳುಹಿಸಿ',
      whatsAppHint: 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಲು ಅತಿ ವೇಗದ ಮಾರ್ಗ — WhatsApp ತೆರೆಯಲು ಟ್ಯಾಪ್ ಮಾಡಿ.',
      messageSentTitle: 'ಸಂದೇಶ ಕಳುಹಿಸಲಾಗಿದೆ!',
      messageSentText: 'HIF INDIA ಅನ್ನು ಸಂಪರ್ಕಿಸಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು. ನಾವು ಶೀಘ್ರದಲ್ಲೇ ಉತ್ತರಿಸುತ್ತೇವೆ.',
      sendAnother: 'ಇನ್ನೊಂದು ಸಂದೇಶ ಕಳುಹಿಸಿ'
    },
    donateModal: {
      title: 'HIF INDIA ಗೆ ದಾನ ಮಾಡಿ',
      subtitle: 'ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆ ಮತ್ತು UPI ಪಾವತಿ ವಿವರಗಳು',
      forCause: 'ಯೋಜನೆ',
      generalFund: 'ಸಾಮಾನ್ಯ ಮಾನವೀಯ ನಿಧಿ',
      presetAmounts: 'ತ್ವರಿತ ಮೊತ್ತಗಳು',
      customAmount: 'ಇತರ ಮೊತ್ತ',
      customAmountPlaceholder: 'ಮೊತ್ತ ನಮೂದಿಸಿ (₹)',
      tabScanQr: 'ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಪಾವತಿಸಿ',
      tabBankTransfer: 'ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆ',
      fastestBadge: 'ವೇಗದ',
      beneficiaryName: 'ಫಲಾನುಭವಿಯ ಹೆಸರು (ಖಾತೆ)',
      accountNumber: 'ಖಾತೆ ಸಂಖ್ಯೆ (ಚಾಲ್ತಿ ಖಾತೆ)',
      ifscCode: 'IFSC ಕೋಡ್',
      branch: 'ಶಾಖೆ',
      branchValue: 'HDFC ಬಂದರ್ ಶಾಖೆ, ಮಂಗಳೂರು',
      upiId: 'UPI ID',
      scanQr: 'ಪಾವತಿಸಲು UPI QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ',
      showQr: 'QR ಕೋಡ್ ತೋರಿಸಿ',
      hideQr: 'QR ಕೋಡ್ ಮರೆಮಾಡಿ',
      qrHelp: 'GPay, PhonePe, Paytm, ಅಥವಾ BHIM ಮೂಲಕ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ',
      qrSecurityTitle: 'ಪಾವತಿಸುವ ಮೊದಲು ಪರಿಶೀಲಿಸಿ',
      qrSecurityNote:
        'ಸ್ಕ್ಯಾನ್ ಮಾಡಿದ ನಂತರ, ನಿಮ್ಮ UPI ಅಪ್ಲಿಕೇಶನ್‌ನಲ್ಲಿ ಪಡೆಯುವವರ ಹೆಸರು "HIF INDIA" ಎಂದು ತೋರಿಸಬೇಕು. ಬೇರೆ ಯಾವುದೇ ಹೆಸರು ಕಂಡುಬಂದರೆ, ಪಾವತಿ ಮುಂದುವರಿಸಬೇಡಿ — ಕೂಡಲೇ WhatsApp ನಲ್ಲಿ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.',
      tax80GNote: '80G ಆದಾಯ ತೆರಿಗೆ ವಿನಾಯಿತಿ ಅನ್ವಯಿಸುತ್ತದೆ. ರಸೀದಿಗಾಗಿ ಪಾವತಿಯ ವಿವರವನ್ನು WhatsApp ನಲ್ಲಿ ಕಳುಹಿಸಿ.',
      notifyWhatsapp: 'ಪಾವತಿಯ ನಂತರ WhatsApp ನಲ್ಲಿ ತಿಳಿಸಿ',
      close: 'ಮುಚ್ಚಿ',
      copiedToast: 'ಕ್ಲಿಪ್‌ಬೋರ್ಡ್‌ಗೆ ನಕಲಿಸಲಾಗಿದೆ'
    },
    footer: {
      aboutText:
        'ಮಂಗಳೂರಿನ ನೋಂದಾಯಿತ ಸಂಸ್ಥೆ. ಮನೆ, ಅನಾಥರ ಶಿಕ್ಷಣ, ಮಸೀದಿ ದುರಸ್ತಿ ಮತ್ತು ಉಚಿತ ವೈದ್ಯಕೀಯ ಉಪಕರಣಗಳ ಮೂಲಕ ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.',
      zeroCommission: 'ನೀಡಿದ ಹಣ 100% ನೇರವಾಗಿ ಜನರಿಗೆ. ಕಮಿಷನ್ ಇಲ್ಲ',
      exploreTitle: 'ನೋಡಿ',
      programsTitle: 'ಕಾರ್ಯಕ್ರಮಗಳು',
      supportUs: 'ಬೆಂಬಲಿಸಿ',
      bankAccount: 'HDFC ಬ್ಯಾಂಕ್ ಖಾತೆ',
      donateQr: 'ದೇಣಿಗೆ / UPI QR',
      allRightsReserved: 'ಹೈಲ್ಯಾಂಡ್ ಇಸ್ಲಾಮಿಕ್ ಫೋರಮ್ (HIF INDIA). ಸರ್ವ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
      addressFull: 'ಮಸೀದಿ ಎಹ್ಸಾನ್ ಕಾಂಪ್ಲೆಕ್ಸ್, ಕಂಕನಾಡಿ, ಮಂಗಳೂರು – 575002',
      slogan: 'ಕರುಣೆ ಮತ್ತು ಗೌರವದಿಂದ ಜನರನ್ನು ಬಲಪಡಿಸಿ, ಜೀವನ ಬದಲಿಸಿ',
      developedBy: 'ಅಭಿವೃದ್ಧಿಪಡಿಸಿದ್ದು'
    },
    legal: {
      lastUpdated: 'ಕೊನೆಯ ಬದಲಾವಣೆ: {date}',
      lastUpdatedDate: '28 ಸೆಪ್ಟೆಂಬರ್ 2026',
      relatedNav: 'ಸಂಬಂಧಿತ ನೀತಿಗಳು',
      orgRegisteredHq: 'ಭಾರತೀಯ ಟ್ರಸ್ಟ್ ಕಾಯ್ದೆಯಡಿ ನೋಂದಾಯಿತ ಎನ್‌ಜಿಒ. ಮುಖ್ಯ ಕಚೇರಿ ಮಂಗಳೂರು.',
      termsTitle: 'ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು',
      termsDesc: 'ಈ ವೆಬ್‌ಸೈಟ್ ಮತ್ತು ಹೈಲ್ಯಾಂಡ್ ಇಸ್ಲಾಮಿಕ್ ಫೋರಮ್ (HIF INDIA) ಗೆ ನೀಡುವ ದೇಣಿಗೆ ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ.',
      privacyTitle: 'ಗೌಪ್ಯತಾ ನೀತಿ',
      privacyDesc: 'HIF INDIA ಯಾವ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ ಸಂಗ್ರಹಿಸುತ್ತದೆ, ಏಕೆ ಬಳಸುತ್ತದೆ, ಮತ್ತು ಯಾರೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳುತ್ತದೆ.',
      refundTitle: 'ಮರುಪಾವತಿ ನೀತಿ',
      refundDesc: 'HIF INDIA ಗೆ ನೀಡಿದ ದೇಣಿಗೆಯನ್ನು ಯಾವಾಗ ಮರುಪಾವತಿ ಮಾಡಬಹುದು, ಮತ್ತು ಅದಕ್ಕೆ ಎಷ್ಟು ಸಮಯ ಬೇಕು.',
      cancellationTitle: 'ರದ್ದುಪಡಿಸುವ ನೀತಿ',
      cancellationDesc: 'HIF INDIA ಗೆ ದೇಣಿಗೆ ಅಥವಾ ಸ್ವಯಂಸೇವಾ ವಿನಂತಿಯನ್ನು ಯಾವಾಗ ರದ್ದು ಮಾಡಬಹುದು.',
      terms: {
        aboutTitle: 'ಈ ನಿಯಮಗಳ ಬಗ್ಗೆ',
        aboutBody:
          'ಈ ನಿಯಮಗಳು HIF INDIA ವೆಬ್‌ಸೈಟ್ ಬಳಕೆ ಮತ್ತು ಹೈಲ್ಯಾಂಡ್ ಇಸ್ಲಾಮಿಕ್ ಫೋರಮ್ (HIF INDIA) — ಭಾರತೀಯ ಟ್ರಸ್ಟ್ ಕಾಯ್ದೆಯಡಿ ನೋಂದಾಯಿತ ಎನ್‌ಜಿಒ — ಗೆ ನೀಡುವ ಯಾವುದೇ ದೇಣಿಗೆಗೆ ಅನ್ವಯಿಸುತ್ತವೆ. ವೆಬ್‌ಸೈಟ್ ಬಳಸಿದರೆ ಅಥವಾ ದೇಣಿಗೆ ನೀಡಿದರೆ, ಈ ನಿಯಮಗಳು, ನಮ್ಮ ಗೌಪ್ಯತಾ ನೀತಿ, ಮರುಪಾವತಿ ನೀತಿ ಮತ್ತು ರದ್ದುಪಡಿಸುವ ನೀತಿಗೆ ನೀವು ಒಪ್ಪುತ್ತೀರಿ.',
        whatWeDoTitle: 'ನಾವು ಏನು ಮಾಡುತ್ತೇವೆ',
        whatWeDoBody:
          'HIF INDIA ಮಂಗಳೂರಿನ ಜನರ ನೆರವಿನ ಟ್ರಸ್ಟ್. ವೆಬ್‌ಸೈಟ್ ನಮ್ಮ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ವಿವರಿಸುತ್ತದೆ ಮತ್ತು ಬೆಂಬಲಿಗರು ದೇಣಿಗೆ ನೀಡಲು ಅನುವು ಮಾಡುತ್ತದೆ. ನಾವು ಸರಕು ಮಾರಾಟ ಮಾಡುವುದಿಲ್ಲ. ದೇಣಿಗೆ ಸ್ವಯಂಪ್ರೇರಿತ ಕೊಡುಗೆ; ಉತ್ಪನ್ನ ಅಥವಾ ಸೇವೆಯ ಖರೀದಿ ಅಲ್ಲ.',
        whatWeDoListIntro: 'ನಮ್ಮ ಮುಖ್ಯ ಕಾರ್ಯಕ್ರಮಗಳು:',
        programAshiyana: 'Project Ashiyana — ನಿರಾಶ್ರಿತ ಮತ್ತು ಬಡ ಕುಟುಂಬಗಳಿಗೆ ಶಾಶ್ವತ ಮನೆ',
        programChitoor: 'HIF CHITOOR (D.U.R.J) — ಅನಾಥ ಮಕ್ಕಳಿಗೆ ವಸತಿ, ಹಿಫ್ಜ್ ಮತ್ತು ಶಾಲಾ ಶಿಕ್ಷಣ',
        programMasjid: 'ಮಸೀದಿ ಅಭಿವೃದ್ಧಿ — ಗ್ರಾಮೀಣ ಮಸೀದಿಗಳ ದುರಸ್ತಿ ಮತ್ತು ನಿರ್ವಹಣೆ',
        programMedical: 'HIF Medical Cell — ಉಚಿತ ವೈದ್ಯಕೀಯ ಉಪಕರಣ ಮತ್ತು ರಕ್ತದಾನ ಸಂಯೋಜನೆ',
        donationsTitle: 'ದೇಣಿಗೆ ಮತ್ತು ಮೊತ್ತ',
        donationsBody1:
          'ಮೊತ್ತವನ್ನು ನೀವು ಆರಿಸುತ್ತೀರಿ. ಯೋಜನೆ ಪುಟದ ಸೂಚಿತ ಮೊತ್ತಗಳು ಮಾರ್ಗದರ್ಶನ ಮಾತ್ರ. ವೆಬ್‌ಸೈಟ್ ನೋಡಲು ಕನಿಷ್ಠ ಶುಲ್ಕವಿಲ್ಲ, ಚಂದಾ ಶುಲ್ಕವೂ ಇಲ್ಲ.',
        donationsBody2:
          'ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ತೋರಿಸಿರುವ HIF INDIA ಖಾತೆಗೆ ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆ ಅಥವಾ UPI ಮೂಲಕ, ಅಥವಾ ನಮ್ಮ ಪಾವತಿ ಪಾಲುದಾರ Razorpay ಮೂಲಕ ಆನ್‌ಲೈನ್ ಪಾವತಿ ಮಾಡಬಹುದು. ಪಾವತಿಸುವ ಮುನ್ನ ಲಾಭಾರ್ಥಿ ಹೆಸರು HIF INDIA ಎಂದು ದೃಢಪಡಿಸಿ.',
        donationsBody3:
          'ನಿರ್ದಿಷ್ಟ ಯೋಜನೆಗೆ ಗುರುತು ಮಾಡಿದ ದೇಣಿಗೆಯನ್ನು ಆ ಯೋಜನೆಯ ಸಾಮಗ್ರಿ, ಕೂಲಿ, ಊಟ ಅಥವಾ ವೈದ್ಯಕೀಯ ನೆರವಿಗೆ ಬಳಸಲಾಗುತ್ತದೆ. HIF INDIA ಆ ದೇಣಿಗೆಯ ಮೇಲೆ ಆಡಳಿತ ಕಮಿಷನ್ ತೆಗೆದುಕೊಳ್ಳುವುದಿಲ್ಲ. ಪಾವತಿ ಗೇಟ್‌ವೇ ತನ್ನ ಪ್ರಕ್ರಿಯಾ ಶುಲ್ಕವನ್ನು ಕಡಿತಗೊಳಿಸಬಹುದು.',
        donationsBody4:
          'ಅನ್ವಯವಾಗುವಲ್ಲಿ, ದೇಣಿಗೆಗಳಿಗೆ ಆದಾಯ ತೆರಿಗೆ ಕಾಯ್ದೆಯ 80G ವಿನಾಯಿತಿ ಸಿಗುತ್ತದೆ. ಪಾವತಿ ರಸೀದಿಯನ್ನು WhatsApp ಅಥವಾ ಇಮೇಲ್‌ನಲ್ಲಿ ಹಂಚಿ; ನಾವು ಪ್ರಮಾಣಪತ್ರ ನೀಡುತ್ತೇವೆ.',
        responsibilitiesTitle: 'ನಿಮ್ಮ ಜವಾಬ್ದಾರಿಗಳು',
        responsibilitiesBody:
          'ರಸೀದಿ ಕೇಳುವಾಗ ಸರಿಯಾದ ಸಂಪರ್ಕ ವಿವರ ನೀಡಿ, ಮತ್ತು ನೀವು ಕೊಡಲು ಅನುಮತಿ ಇರುವ ಹಣವನ್ನು ಮಾತ್ರ ಬಳಸಿ. ಸುಳ್ಳು, ಹಾನಿಕಾರಕ ಅಥವಾ ಕಾನೂನುಬಾಹಿರ ವಿಷಯ ಕಳುಹಿಸಬೇಡಿ, ಸೈಟ್‌ಗೆ ಅಡ್ಡಿ ಮಾಡಬೇಡಿ.',
        contentTitle: 'ವೆಬ್‌ಸೈಟ್ ವಿಷಯ',
        contentBody:
          'ಯೋಜನೆ ನವೀಕರಣಗಳು, ಛಾಯಾಚಿತ್ರಗಳು ಮತ್ತು ಅಂಕಿಗಳನ್ನು ಒಳ್ಳೆಯ ನಂಬಿಕೆಯಿಂದ ಪ್ರಕಟಿಸಲಾಗುತ್ತದೆ; ಕ್ಷೇತ್ರದ ಕೆಲಸ ಬದಲಾದಂತೆ ಇವು ಬದಲಾಗಬಹುದು. ನಿರ್ದಿಷ್ಟ ನಿರ್ಮಾಣ ದಿನಾಂಕ ಅಥವಾ ದೇಣಿಗೆಗೆ ವೈಯಕ್ತಿಕ ಲಾಭದ ಭರವಸೆ ಇಲ್ಲ.',
        paymentsTitle: 'ಪಾವತಿಗಳು',
        paymentsBody:
          'ಆನ್‌ಲೈನ್ ಕಾರ್ಡ್, ನೆಟ್-ಬ್ಯಾಂಕಿಂಗ್ ಮತ್ತು UPI ಪಾವತಿಗಳನ್ನು Razorpay ಮತ್ತು ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ನಿರ್ವಹಿಸುತ್ತವೆ. ನಿಮ್ಮ ಪೂರ್ಣ ಕಾರ್ಡ್ ಸಂಖ್ಯೆ ಅಥವಾ UPI PIN ನಾವು ಇಡುವುದಿಲ್ಲ. ನಾವು ಅಥವಾ ಪಾವತಿ ಪಾಲುದಾರ ದೃಢಪಡಿಸಿದಾಗ ಮಾತ್ರ ಪಾವತಿ ಪೂರ್ಣ. ಬ್ಯಾಂಕ್ ವಿಳಂಬ ಮತ್ತು ವಿಫಲ UPI ನಮ್ಮ ನಿಯಂತ್ರಣದ ಹೊರಗೆ.',
        ipTitle: 'ಬೌದ್ಧಿಕ ಆಸ್ತಿ',
        ipBody:
          'HIF INDIA ಹೆಸರು, ಲೋಗೋ ಮತ್ತು ವೆಬ್‌ಸೈಟ್ ವಿಷಯ ಹೈಲ್ಯಾಂಡ್ ಇಸ್ಲಾಮಿಕ್ ಫೋರಮ್‌ಗೆ ಸೇರಿದವು, ಕ್ರೆಡಿಟ್ ಬೇರೆ ಹೇಳದ ಹೊರತು. ನಮ್ಮ ಪುಟಗಳ ಲಿಂಕ್ ಹಂಚಬಹುದು. ಬೇರೆ ಸಂಸ್ಥೆಗಾಗಿ ನಮ್ಮ ಛಾಯಾಚಿತ್ರ ಅಥವಾ ಲೋಗೋವನ್ನು ಲಿಖಿತ ಅನುಮತಿ ಇಲ್ಲದೆ ನಕಲಿಸಬೇಡಿ.',
        liabilityTitle: 'ಹೊಣೆಗಾರಿಕೆ',
        liabilityBody:
          'ಈ ವೆಬ್‌ಸೈಟ್ ಸಾರ್ವಜನಿಕ ಮಾಹಿತಿ ಮತ್ತು ದೇಣಿಗೆ ಮಾರ್ಗ. ಪಾವತಿ ಆಪ್ ದೋಷ, ಬ್ಯಾಂಕ್ ವಿಳಂಬ ಅಥವಾ ತಾತ್ಕಾಲಿಕ ಸೈಟ್ ನಿಲುಗಡೆಯಿಂದಾಗುವ ನಷ್ಟಕ್ಕೆ, ಭಾರತೀಯ ಕಾನೂನು ಅನುಮತಿಸುವ ಮಟ್ಟಿಗೆ, ನಾವು ಹೊಣೆಯಲ್ಲ.',
        lawTitle: 'ಅನ್ವಯಿಸುವ ಕಾನೂನು',
        lawBody:
          'ಈ ನಿಯಮಗಳಿಗೆ ಭಾರತದ ಕಾನೂನು ಅನ್ವಯಿಸುತ್ತದೆ. ಈ ವೆಬ್‌ಸೈಟ್ ಅಥವಾ HIF INDIA ಗೆ ದೇಣಿಗೆಯಿಂದ ಉಂಟಾಗುವ ವಿವಾದಗಳಿಗೆ ಮಂಗಳೂರು, ಕರ್ನಾಟಕ ನ್ಯಾಯಾಲಯಗಳು ಅಧಿಕಾರ ಹೊಂದಿವೆ.',
        changesTitle: 'ಬದಲಾವಣೆಗಳು',
        changesBody:
          'ಕಾರ್ಯಕ್ರಮಗಳು ಅಥವಾ ಪಾವತಿ ವಿಧಾನ ಬದಲಾದಾಗ ಈ ನಿಯಮಗಳನ್ನು ನವೀಕರಿಸಬಹುದು. ಈ ಪುಟದ ಮೇಲಿನ ದಿನಾಂಕ ಇತ್ತೀಚಿನ ಆವೃತ್ತಿ. ನವೀಕರಣದ ನಂತರ ವೆಬ್‌ಸೈಟ್ ಬಳಸುವುದು ತಿದ್ದುಪಡಿ ನಿಯಮಗಳ ಒಪ್ಪಿಗೆ.'
      },
      privacy: {
        whoTitle: 'ಯಾರು ಜವಾಬ್ದಾರಿ',
        whoBody:
          'ಈ ವೆಬ್‌ಸೈಟ್ ಮತ್ತು ನಮ್ಮ ದೂರವಾಣಿ, ಇಮೇಲ್, WhatsApp ಮಾರ್ಗಗಳ ಮೂಲಕ ಸಂಗ್ರಹಿಸಿದ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿಗೆ ಹೈಲ್ಯಾಂಡ್ ಇಸ್ಲಾಮಿಕ್ ಫೋರಮ್ (HIF INDIA) ಜವಾಬ್ದಾರಿ.',
        collectTitle: 'ನಾವು ಸಂಗ್ರಹಿಸುವ ಮಾಹಿತಿ',
        collectIntro: 'ದೇಣಿಗೆ ಸ್ವೀಕರಿಸಲು, ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಲು ಮತ್ತು ಕಾರ್ಯಕ್ರಮ ನಡೆಸಲು ಬೇಕಾದಷ್ಟು ಮಾತ್ರ ಸಂಗ್ರಹಿಸುತ್ತೇವೆ:',
        collectForm:
          'ನೀವು ಕಳುಹಿಸುವ ವಿವರ: Get Involved ಫಾರ್ಮ್‌ನಲ್ಲಿ ಹೆಸರು, ದೂರವಾಣಿ, ನಗರ, ಸ್ವಯಂಸೇವಾ ಕೌಶಲ್ಯ (ಇದು ನೀವು ಟೈಪ್ ಮಾಡಿದ ಸಂದೇಶದೊಂದಿಗೆ WhatsApp ತೆರೆಯುತ್ತದೆ), ಮತ್ತು ನಂತರ ಇಮೇಲ್, ದೂರವಾಣಿ ಅಥವಾ WhatsApp ನಲ್ಲಿ ಬರೆಯುವುದು.',
        collectDonation:
          'ದೇಣಿಗೆ ದಾಖಲೆ: ಮೊತ್ತ, ದಿನಾಂಕ, ನೀವು ಹೆಸರಿಸಿದ ಯೋಜನೆ ಅಥವಾ ಉದ್ದೇಶ, ಮತ್ತು ವಹಿವಾಟು ಉಲ್ಲೇಖ (UTR ಅಥವಾ ಪಾವತಿ id) — ರಸೀದಿ ಮತ್ತು ಅನ್ವಯವಾಗುವಲ್ಲಿ 80G ಪ್ರಮಾಣಪತ್ರಕ್ಕಾಗಿ.',
        collectPayment:
          'Razorpay ಪುಟದಲ್ಲಿ ನಮೂದಿಸುವ ಪಾವತಿ ವಿವರ (ಕಾರ್ಡ್, ನೆಟ್-ಬ್ಯಾಂಕಿಂಗ್, ಅಥವಾ UPI) Razorpay ಮತ್ತು ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಸಂಗ್ರಹಿಸುತ್ತವೆ. ಪೂರ್ಣ ಕಾರ್ಡ್ ಸಂಖ್ಯೆ, CVV ಅಥವಾ UPI PIN ನಾವು ಪಡೆಯುವುದಿಲ್ಲ ಅಥವಾ ಇಡುವುದಿಲ್ಲ.',
        collectPrefs:
          'ಭಾಷೆ ಆಯ್ಕೆ ಮತ್ತು ತಿಳಿ/ಕತ್ತಲೆ ಪ್ರದರ್ಶನ ಆದ್ಯತೆ ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ (local storage) ಉಳಿಯುತ್ತದೆ. ಈ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಜಾಹೀರಾತು ಟ್ರಾಕರ್‌ಗಳಿಲ್ಲ.',
        useTitle: 'ನಾವು ಹೇಗೆ ಬಳಸುತ್ತೇವೆ',
        useIntro: 'ಈ ಮಾಹಿತಿಯನ್ನು ನಾವು ಬಳಸುವುದು:',
        useConfirm: 'ದೇಣಿಗೆಯನ್ನು ದೃಢಪಡಿಸಿ ರಸೀದಿ ನೀಡಲು',
        use80g: 'ನೀವು ಕೇಳಿದಾಗ ಮತ್ತು ದೇಣಿಗೆ ಅರ್ಹವಾದಾಗ 80G ಪ್ರಮಾಣಪತ್ರ ನೀಡಲು',
        useReply: 'ಸ್ವಯಂಸೇವೆ, ವೈದ್ಯಕೀಯ ಉಪಕರಣ ಮತ್ತು ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಲು',
        useBooks: 'ನೋಂದಾಯಿತ ಟ್ರಸ್ಟ್‌ಗೆ ಬೇಕಾದ ಸಾಮಾನ್ಯ ಲೆಕ್ಕಪತ್ರ ಇಡಲು',
        useProtect: 'ತಪ್ಪು ಅಥವಾ ಅನಧಿಕೃತ ಪಾವತಿಗಳಿಂದ ಸಂಸ್ಥೆಯನ್ನು ರಕ್ಷಿಸಲು',
        useNoSell: 'ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ ಮಾರಾಟ ಮಾಡುವುದಿಲ್ಲ, ಮೂರನೇ ವ್ಯಕ್ತಿಯ ಜಾಹೀರಾತಿಗೆ ಬಳಸುವುದಿಲ್ಲ.',
        shareTitle: 'ಯಾರೊಂದಿಗೆ ಹಂಚುತ್ತೇವೆ',
        shareIntro: 'ಮಾಹಿತಿ ಹಂಚುವುದು ಇವರೊಂದಿಗೆ ಮಾತ್ರ:',
        shareRazorpay: 'ನೀವು ಪ್ರಾರಂಭಿಸಿದ ಪಾವತಿ ಪೂರೈಸಲು Razorpay ಮತ್ತು ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಅಥವಾ UPI ಆಪ್',
        shareBank: 'ವರ್ಗಾವಣೆಯಿಂದ ಬಂದ ದೇಣಿಗೆಗಾಗಿ ನಮ್ಮ ಬ್ಯಾಂಕರ್‌ಗಳು (HDFC Bank)',
        shareAudit: 'ಭಾರತೀಯ ಕಾನೂನು ಬೇಡಿದಾಗ ಲೆಕ್ಕಪರಿಶೋಧಕರು ಮತ್ತು ಅಧಿಕಾರಿಗಳು',
        shareHost: 'ಇಮೇಲ್ ಅಥವಾ ಈ ವೆಬ್‌ಸೈಟ್ ಹೋಸ್ಟ್ ಮಾಡುವ ಸೇವಾ ಪೂರೈಕೆದಾರ, ಆ ಸೇವೆ ನಡೆಸಲು ಮಾತ್ರ',
        shareProviders:
          'Razorpay ತನ್ನ ಗೌಪ್ಯತಾ ನೀತಿಯಡಿ ಪಾವತಿ ಪ್ರಕ್ರಿಯೆ ಮಾಡುತ್ತದೆ. ಈ ವೆಬ್‌ಸೈಟ್ Firebase Hosting ನಿಂದ ನೀಡಲಾಗುತ್ತದೆ. ಪುಟ ಅಥವಾ ಪಾವತಿ ತಲುಪಿಸಲು ಬೇಕಾದ IP ವಿಳಾಸದಂತಹ ತಾಂತ್ರಿಕ ದತ್ತಾಂಶ ಅವರಿಗೆ ಕಾಣುತ್ತದೆ.',
        retainTitle: 'ಎಷ್ಟು ಕಾಲ ಇಡುತ್ತೇವೆ',
        retainBody:
          'ದೇಣಿಗೆ ಮತ್ತು ರಸೀದಿ ದಾಖಲೆಗಳನ್ನು ಭಾರತೀಯ ತೆರಿಗೆ ಮತ್ತು ಟ್ರಸ್ಟ್ ಕಾನೂನು ಬೇಡುವವರೆಗೆ ಇಡಲಾಗುತ್ತದೆ. ಪತ್ರವ್ಯವಹಾರ ನಡೆಯುವಾಗ ಮತ್ತು ನಂತರ ಸಮಂಜಸ ಅವಧಿ ಪ್ರಶ್ನೆ ಸಂದೇಶಗಳನ್ನು ಇಡುತ್ತೇವೆ. ಕಾನೂನು ದಾಖಲೆಗೆ ಬೇಕಿಲ್ಲದ ಸ್ವಯಂಸೇವಾ ಪ್ರಶ್ನೆಯನ್ನು ಅಳಿಸಲು ಕೇಳಬಹುದು.',
        choicesTitle: 'ನಿಮ್ಮ ಆಯ್ಕೆಗಳು',
        choicesBody:
          'ನಿಮ್ಮ ಬಗ್ಗೆ ಇರುವ ದೇಣಿಗೆ ಅಥವಾ ಪ್ರಶ್ನೆ ದಾಖಲೆ ಏನು ಎಂದು ಕೇಳಬಹುದು, ತಿದ್ದುಪಡಿ ಕೇಳಬಹುದು, ಅಥವಾ ಸಂಪರ್ಕ ನಿಲ್ಲಿಸಲು ಕೇಳಬಹುದು. info@hif.org.in ಗೆ ಬರೆಯಿರಿ ಅಥವಾ ಈ ಪುಟದ ಮೇಲಿನ ಸಂಖ್ಯೆಗೆ ಕರೆ ಮಾಡಿ. ರಸೀದಿ ಮತ್ತು ಲೆಕ್ಕ ಅಳಿಸಲಾಗದುದರಿಂದ, ಸಂಪರ್ಕ ವಿನಂತಿಯ ನಂತರವೂ ದೇಣಿಗೆ ದಾಖಲೆ ಇಡಬೇಕಾಗಬಹುದು.',
        childrenTitle: 'ಮಕ್ಕಳು',
        childrenBody:
          'ಈ ವೆಬ್‌ಸೈಟ್ ವಯಸ್ಕ ದಾನಿಗಳು ಮತ್ತು ಸ್ವಯಂಸೇವಕರಿಗಾಗಿ. ಸೈಟ್ ಮೂಲಕ ಮಕ್ಕಳ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಸಂಗ್ರಹಿಸುವುದಿಲ್ಲ. ನಮ್ಮ ಆರೈಕೆಯಲ್ಲಿರುವ ಮಕ್ಕಳ ಕಾರ್ಯಕ್ರಮ ಮಾಹಿತಿ ಪೋಷಕ ಅಥವಾ ಸಂಸ್ಥೆಯ ಒಪ್ಪಿಗೆಯೊಂದಿಗೆ ಮಾತ್ರ, ಖಾಸಗಿ ದಾಖಲೆ ಬಹಿರಂಗಪಡಿಸದೆ ಪ್ರಕಟಿಸಲಾಗುತ್ತದೆ.',
        changesTitle: 'ಬದಲಾವಣೆಗಳು',
        changesBody: 'ಹೊಸ ರೀತಿಯ ಮಾಹಿತಿ ಸಂಗ್ರಹಿಸಲು ಪ್ರಾರಂಭಿಸಿದರೆ ಈ ಪುಟ ನವೀಕರಿಸಿ ಮೇಲಿನ ದಿನಾಂಕ ಬದಲಾಯಿಸುತ್ತೇವೆ.'
      },
      refund: {
        notRefundableTitle: 'ದೇಣಿಗೆ ಸಾಮಾನ್ಯವಾಗಿ ಮರುಪಾವತಿ ಆಗುವುದಿಲ್ಲ',
        notRefundableBody:
          'ಹೈಲ್ಯಾಂಡ್ ಇಸ್ಲಾಮಿಕ್ ಫೋರಮ್ (HIF INDIA) ಗೆ ನೀಡುವುದು ನೋಂದಾಯಿತ ಎನ್‌ಜಿಒಗೆ ಸ್ವಯಂಪ್ರೇರಿತ ದೇಣಿಗೆ, ಸರಕು ಖರೀದಿ ಅಲ್ಲ. HIF INDIA ಉತ್ಪನ್ನ ಕಳುಹಿಸುವುದಿಲ್ಲ, ಡೆಲಿವರಿ ಶುಲ್ಕ ವಿಧಿಸುವುದಿಲ್ಲ. ದೇಣಿಗೆ ಯಶಸ್ವಿಯಾಗಿ ಬಂದ ನಂತರ ಅದನ್ನು ವಸತಿ, ಅನಾಥ ಆರೈಕೆ, ಮಸೀದಿ ಕೆಲಸ, ವೈದ್ಯಕೀಯ ನೆರವು ಅಥವಾ ಸಾಮಾನ್ಯ ಮಾನವೀಯ ನಿಧಿಗೆ ನಿಯೋಜಿಸಲಾಗುತ್ತದೆ; ಮನಸ್ಸು ಬದಲಾದುದಕ್ಕೆ ಮರುಪಾವತಿ ಇಲ್ಲ.',
        whenTitle: 'ಯಾವಾಗ ಮರುಪಾವತಿ ಮಾಡುತ್ತೇವೆ',
        whenIntro: 'ಈ ಸಂದರ್ಭಗಳಲ್ಲಿ ದೇಣಿಗೆ ಮರುಪಾವತಿ ಮಾಡುತ್ತೇವೆ:',
        whenDuplicate: 'ಅದೇ ದೇಣಿಗೆಗೆ ಎರಡು ಬಾರಿ ಹಣ ಕಡಿತವಾಯಿತು (ಎರಡು ಬಾರಿ ಪಾವತಿ).',
        whenFailed: 'ನಿಮ್ಮ ಖಾತೆಯಿಂದ ಹಣ ಹೊರಟಿತು ಆದರೆ ತಾಂತ್ರಿಕ ವೈಫಲ್ಯದಿಂದ HIF INDIA ಗೆ ಬರಲಿಲ್ಲ.',
        whenMistake: 'ನಿಜವಾದ ತಪ್ಪಿನಿಂದ HIF INDIA ಗೆ ಪಾವತಿಸಿದಿರಿ, ಮತ್ತು ಆ ಮೊತ್ತ ಇನ್ನೂ ಯೋಜನೆಗೆ ಖರ್ಚಾಗಿಲ್ಲ.',
        whenUnauthorised:
          'ಪಾವತಿ ಅನಧಿಕೃತವಾಗಿತ್ತು. ಬ್ಯಾಂಕ್ ಅಥವಾ Razorpay ಜೊತೆ ಪರಿಶೀಲಿಸಿ, ಅವರು ಅನಧಿಕೃತ ಎಂದು ದೃಢಪಡಿಸಿದ ಮೊತ್ತವನ್ನು ಮರುಪಾವತಿ ಮಾಡುತ್ತೇವೆ.',
        whenSpent:
          'ಹೆಸರಿಸಿದ ಯೋಜನೆಗೆ ಈಗಾಗಲೇ ಖರ್ಚಾದ ದೇಣಿಗೆ — ಉದಾಹರಣೆಗೆ ಮನೆಯ ಸಾಮಗ್ರಿ, ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ, ಅಥವಾ ವೈದ್ಯಕೀಯ ನೆರವು — ಮರುಪಾವತಿ ಆಗುವುದಿಲ್ಲ.',
        howTitle: 'ಮರುಪಾವತಿ ಹೇಗೆ ಕೇಳುವುದು',
        howBody:
          'ವಹಿವಾಟಿನ 7 ದಿನಗಳೊಳಗೆ info@hif.org.in ಗೆ ಇಮೇಲ್ ಮಾಡಿ ಅಥವಾ WhatsApp ನಲ್ಲಿ ಸಂದೇಶ ಕಳುಹಿಸಿ. ಹೆಸರು, ದೂರವಾಣಿ, ದಿನಾಂಕ, ಮೊತ್ತ, ಆಯ್ದ ಯೋಜನೆ, ಮತ್ತು UTR, UPI ಉಲ್ಲೇಖ ಅಥವಾ Razorpay ಪಾವತಿ id ಸೇರಿಸಿ.',
        howReply: 'ವಿನಂತಿ ಪರಿಶೀಲಿಸಿ 7 ಕೆಲಸದ ದಿನಗಳೊಳಗೆ ಉತ್ತರಿಸುತ್ತೇವೆ.',
        timelineTitle: 'ಮರುಪಾವತಿ ಅವಧಿ',
        timelineBody:
          'ಮರುಪಾವತಿ ಅನುಮೋದಿಸಿದರೆ, ಮೂಲ ಪಾವತಿ ವಿಧಾನಕ್ಕೆ (ಅದೇ ಕಾರ್ಡ್, UPI id, ಅಥವಾ ಬ್ಯಾಂಕ್ ಖಾತೆ) ಕಳುಹಿಸುತ್ತೇವೆ. ಅನುಮೋದನೆಯ 7 ಕೆಲಸದ ದಿನಗಳೊಳಗೆ ಮರುಪಾವತಿ ಪ್ರಾರಂಭಿಸುತ್ತೇವೆ. ಬ್ಯಾಂಕ್, UPI ಆಪ್ ಮತ್ತು Razorpay ಕ್ರೆಡಿಟ್ ತೋರಿಸಲು ಇನ್ನೂ 5 ರಿಂದ 7 ಕೆಲಸದ ದಿನ ತೆಗೆದುಕೊಳ್ಳಬಹುದು. ನಗದು ಅಥವಾ ಬೇರೆ ವ್ಯಕ್ತಿಯ ಖಾತೆಗೆ ಮರುಪಾವತಿ ಮಾಡಲಾಗುವುದಿಲ್ಲ.',
        failedTitle: 'ವಿಫಲ ಪಾವತಿಗಳು',
        failedBody:
          'ಪಾವತಿ ವಿಫಲವಾದರೆ ಅಥವಾ ಪಾವತಿಸುವ ಮುನ್ನ ಪುಟ ಮುಚ್ಚಿದರೆ, ದೇಣಿಗೆ ತೆಗೆದುಕೊಳ್ಳುವುದಿಲ್ಲ; ಮರುಪಾವತಿ ಬೇಕಾಗಿಲ್ಲ. ಬ್ಯಾಂಕ್ ಡೆಬಿಟ್ ತೋರಿಸಿದರೂ ನಮಗೆ ಹಣ ಬರದಿದ್ದರೆ, ಉಲ್ಲೇಖ ಸಂಖ್ಯೆಯೊಂದಿಗೆ ಬರೆಯಿರಿ; ಬ್ಯಾಂಕ್ ಅಥವಾ Razorpay ಜೊತೆ ಹುಡುಕುತ್ತೇವೆ.'
      },
      cancellation: {
        beforeTitle: 'ಪಾವತಿಸುವ ಮುನ್ನ',
        beforeBody:
          'ಪಾವತಿ ಪೂರ್ಣವಾಗುವ ಮುನ್ನ ಯಾವಾಗ ಬೇಕಾದರೂ ದೇಣಿಗೆ ರದ್ದು ಮಾಡಬಹುದು. ದೇಣಿಗೆ ವಿಂಡೋ ಮುಚ್ಚಿ, ಅಥವಾ UPI, ಕಾರ್ಡ್, ನೆಟ್-ಬ್ಯಾಂಕಿಂಗ್ ಹಂತ ಮುಗಿಸಬೇಡಿ. ಪಾವತಿಸದಿದ್ದರೆ ಹಣ ಕಡಿತವಿಲ್ಲ; ರದ್ದು ವಿನಂತಿ ಬೇಕಿಲ್ಲ.',
        beforeNoSub: 'HIF INDIA ಸ್ವಯಂಚಾಲಿತ ಪುನರಾವರ್ತಿತ ಡೆಬಿಟ್ ಹಾಕುವುದಿಲ್ಲ. ರದ್ದು ಮಾಡಬೇಕಾದ ಚಂದಾ ಅಥವಾ ಸದಸ್ಯತ್ವ ಶುಲ್ಕವಿಲ್ಲ.',
        afterTitle: 'ಯಶಸ್ವಿ ಪಾವತಿಯ ನಂತರ',
        afterLead:
          'ಪೂರ್ಣವಾದ ದೇಣಿಗೆಯನ್ನು ಆರ್ಡರ್ ಎಂದು ರದ್ದು ಮಾಡಲಾಗುವುದಿಲ್ಲ, ಏಕೆಂದರೆ ಅದು ಸ್ವಯಂಪ್ರೇರಿತ ಕೊಡುಗೆ, ಉತ್ಪನ್ನ ಖರೀದಿ ಅಲ್ಲ. ಪಾವತಿ ಎರಡು ಬಾರಿ ಆಗಿದ್ದರೆ, ನಮ್ಮ ಬದಿಯಲ್ಲಿ ವಿಫಲವಾಗಿದ್ದರೆ, ಅಥವಾ ತಪ್ಪಾಗಿ ಆಗಿದ್ದರೆ, ನೋಡಿ',
        afterTrail:
          '. ವಿನಂತಿ ವಹಿವಾಟಿನ 7 ದಿನಗಳೊಳಗೆ ನಮಗೆ ತಲುಪಬೇಕು. ಅನುಮೋದಿತ ಮರುಪಾವತಿಯನ್ನು 7 ಕೆಲಸದ ದಿನಗಳೊಳಗೆ ಪ್ರಾರಂಭಿಸಿ, ನಂತರ ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಅಥವಾ Razorpay ನ ಸಾಮಾನ್ಯ 5 ರಿಂದ 7 ಕೆಲಸದ ದಿನಗಳ ಕ್ರೆಡಿಟ್ ಸಮಯ ಅನುಸರಿಸುತ್ತದೆ.',
        ifHifTitle: 'HIF ಚಟುವಟಿಕೆ ರದ್ದು ಮಾಡಿದರೆ',
        ifHifBody:
          'ನಿರ್ದಿಷ್ಟ ಗುರುತು ಮಾಡಿದ ದೇಣಿಗೆ ನೀಡಿದ ಡ್ರೈವ್ ಅಥವಾ ಕಾರ್ಯಕ್ರಮವನ್ನು ನಾವು ರದ್ದು ಮಾಡಿದರೆ, ಮತ್ತು ಆ ಮೊತ್ತ ಖರ್ಚಾಗಿಲ್ಲದಿದ್ದರೆ, ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತೇವೆ. ಹತ್ತಿರದ ಸಂಬಂಧಿತ ಕಾರ್ಯಕ್ರಮಕ್ಕೆ ವರ್ಗಾಯಿಸಲು ಅಥವಾ ಮರುಪಾವತಿ ನೀತಿಯಡಿ ಮರುಪಾವತಿ ಕೇಳಬಹುದು.',
        volunteerTitle: 'ಸ್ವಯಂಸೇವೆ ಮತ್ತು ಪ್ರಶ್ನೆ ವಿನಂತಿಗಳು',
        volunteerBody:
          'ಸ್ವಯಂಸೇವಾ ನೋಂದಣಿ ಅಥವಾ ಇತರ ಪ್ರಶ್ನೆಯನ್ನು info@hif.org.in ಗೆ ಇಮೇಲ್ ಮಾಡಿ ಅಥವಾ WhatsApp ನಲ್ಲಿ ಸಂದೇಶ ಕಳುಹಿಸಿ ಹಿಂತೆಗೆದುಕೊಳ್ಳಬಹುದು. ನೀವು ಬಳಸಿದ ದೂರವಾಣಿ ಹೇಳಿ. ಆ ವಿನಂತಿಯ ಮೇಲೆ ಹಿಂಬಾಲಿಸುವುದನ್ನು ನಿಲ್ಲಿಸುತ್ತೇವೆ. ಈಗಾಗಲೇ ಬಂದ ದೇಣಿಗೆ ರದ್ದಾಗುವುದಿಲ್ಲ.',
        shippingTitle: 'ರದ್ದು ಮಾಡುವ ಶಿಪ್ಪಿಂಗ್ ಇಲ್ಲ',
        shippingBody:
          'ಈ ವೆಬ್‌ಸೈಟ್ ಮೂಲಕ ಭೌತಿಕ ಸರಕು ಮಾರಾಟ ಅಥವಾ ಕಳುಹಿಸುವುದಿಲ್ಲ. ಶಿಪ್ಪಿಂಗ್ ಆರ್ಡರ್ ಇಲ್ಲ, ಶಿಪ್ಪಿಂಗ್ ರದ್ದು ಇಲ್ಲ. Medical Cell ನೀಡುವ ವೈದ್ಯಕೀಯ ಉಪಕರಣ ಕುಟುಂಬದೊಂದಿಗೆ ನೇರವಾಗಿ ಏರ್ಪಡಿಸುವ ಕಾರ್ಯಕ್ರಮ ಸೇವೆ, ಆನ್‌ಲೈನ್ ಅಂಗಡಿ ಆರ್ಡರ್ ಅಲ್ಲ.'
      }
    }
  },

  // ==========================================
  // HINDI TRANSLATIONS (हिन्दी)
  // ==========================================
  hi: {
    nav: {
      home: 'होम',
      about: 'हमारे बारे में',
      projects: 'योजनाएं',
      activities: 'सेवाएं',
      gallery: 'तस्वीरें',
      getInvolved: 'जुड़ें',
      contact: 'संपर्क',
      donate: 'दान',
      donateNow: 'अभी दान करें',
      menu: 'मेनू',
      closeMenu: 'मेनू बंद करें',
      language: 'भाषा'
    },
    org: {
      name: 'HIF INDIA',
      fullName: 'हाइलैंड इस्लामिक फोरम (HIF INDIA)',
      tagline: 'दया और इज्जत के साथ लोगों को मजबूत बनाना',
      shortTagline: 'लोगों को मजबूत बनाना, जिंदगी बदलना',
      established: 'मंगलुरु में पंजीकृत गैर-सरकारी संगठन (NGO)',
      regDetails: 'भारतीय ट्रस्ट अधिनियम के तहत पंजीकृत एनजीओ',
      slogan: 'दिया गया पैसा 100% सीधे लोगों तक। कोई कमीशन नहीं',
      sloganShort: '100% सीधी जमीनी राहत',
      auditBadge: 'ऑडिटेड व पारदर्शी',
      addressLabel: 'पता',
      hqLocation: 'मस्जिद एहसान कॉम्प्लेक्स, कंकनाडी, मंगलुरु – 575002',
      centralSecretariat: 'केंद्रीय सचिवालय',
      phoneLabel: 'फ़ोन',
      emailLabel: 'ईमेल',
      websiteLabel: 'वेबसाइट',
      workingHours: 'कार्य समय',
      workingHoursVal: 'सुबह 9:00 – शाम 7:00 (सोम–शनि)'
    },
    common: {
      donateNow: 'अभी दान करें',
      viewDetails: 'विवरण देखें',
      exploreProjects: 'योजनाएं देखें',
      exploreActivities: 'गतिविधियां देखें',
      learnMore: 'और जानें',
      joinAsVolunteer: 'स्वयंसेवक बनें',
      backToProjects: 'योजनाओं पर वापस जाएं',
      backToActivities: 'गतिविधियों पर वापस जाएं',
      backToHome: 'होम पर वापस जाएं',
      close: 'बंद करें',
      submit: 'जमा करें',
      submitting: 'जमा हो रहा है...',
      copy: 'कॉपी करें',
      copied: 'कॉपी हो गया!',
      download: 'डाउनलोड',
      share: 'साझा करें',
      filterAll: 'सभी',
      readMore: 'और पढ़ें',
      viewAll: 'सभी देखें',
      search: 'खोजें',
      send: 'संदेश भेजें',
      sending: 'भेजा जा रहा है...',
      seeImpact: 'हमारा प्रभाव देखें',
      pledgeNow: 'प्रतिज्ञा करें',
      transparent: '100% पारदर्शी',
      zeroCommission: 'बिना कमीशन',
      verified: 'सत्यापित जमीनी संगठन',
      monthly: 'मासिक',
      oneTime: 'एक बार',
      all: 'सभी',
      loading: 'लोड हो रहा है...',
      success: 'सफल',
      error: 'त्रुटि',
      sendAnother: 'एक और भेजें',
      next: 'आगे',
      prev: 'पीछे',
      required: 'आवश्यक',
      optional: 'वैकल्पिक',
      or: 'या',
      call: 'कॉल',
      dayMode: 'दिन का रंग',
      nightMode: 'रात का रंग',
      now: 'अब'
    },
    hero: {
      establishedBadge: 'मंगलुरु में पंजीकृत गैर-सरकारी संगठन',
      title: 'कर्नाटक भर के समुदायों के लिए गरिमा, आश्रय और उम्मीद।',
      subtitle:
        'HIF INDIA बेघरों के लिए पक्के मकान बनाता है, अनाथ बच्चों का पालन-पोषण करता है, ग्रामीण मस्जिदों को पुनर्जीवित करता है और निःशुल्क चिकित्सा राहत प्रदान करता है — 100% प्रत्यक्ष, पारदर्शी जमीनी प्रभाव के साथ।',
      donateCta: 'अभी दान करें',
      donateBannerTitle: 'आपका सहयोग घर, भविष्य और उम्मीद बनाता है।',
      impactCta: 'हमारा प्रभाव देखें',
      activeVolunteers: 'तटीय कर्नाटक में सक्रिय स्वयंसेवक',
      emergencyFundBanner: 'आपातकालीन राहत सक्रिय: बाढ़, चिकित्सा और भोजन सहायता प्रदान की जा रही है।',
      emergencyFundTitle: 'त्वरित मानवीय सहायता',
      emergencyFundDesc: 'संकटग्रस्त जरूरतमंद परिवारों को सीधी सहायता पहुंचाना।',
      liveCounters: 'अभी तक की मदद के आंकड़े'
    },
    about: {
      eyebrow: 'HIF INDIA के बारे में',
      title: 'सामुदायिक विश्वास पर आधारित एक जमीनी ट्रस्ट।',
      description:
        'हाइलैंड इस्लामिक फोरम (HIF INDIA) मंगलुरु में मुख्यालय वाला एक पंजीकृत एनजीओ है, जो कर्नाटक और आंध्र प्रदेश में कार्यरत है।',
      whoWeAreBadge: 'हम कौन हैं',
      whoWeAreTitle: 'हाइलैंड इस्लामिक फोरम (HIF INDIA)',
      whoWeAreText1:
        'सहानुभूति और गरिमा के साथ समुदायों को मजबूत बनाना, जीवन में बदलाव। अपनी स्थापना के बाद से, हमने ठोस और प्रत्यक्ष पहलों पर ध्यान केंद्रित किया है — बेघरों के लिए स्थायी पक्के घर, अनाथ बालकों के लिए प्रेमपूर्ण आवासीय आश्रम, वीरान ग्रामीण मस्जिदों का जीर्णोद्धार, निःशुल्क चिकित्सा उपकरण ऋण और आपातकालीन रक्तदान समन्वय।',
      whoWeAreText2:
        'भारतीय ट्रस्ट अधिनियम के तहत पंजीकृत संगठन के रूप में, HIF INDIA बिना कमीशन की सख्त नीति पर काम करता है: किसी विशिष्ट योजना के लिए दान किया गया प्रत्येक रुपया सीधे लाभार्थियों के लिए सामग्री, श्रम, भोजन या चिकित्सा राहत में लगाया जाता है।',
      teamBadge: 'हमारा समुदाय',
      teamTitle: 'इस मिशन के पीछे के लोग',
      teamDesc:
        'HIF India सैकड़ों स्वयंसेवकों, युवा नेताओं और समुदाय के सदस्यों द्वारा संचालित है, जो हर कार्यक्रम, सत्र और राहत अभियान में सहानुभूति के साथ मैदान में उतरते हैं।',
      teamPhotoAlt: 'HIF India टीम और समुदाय',
      viewPhoto: 'फ़ोटो देखें',
      whoWeArePhotoAlt: 'HIF India का मैदानी कार्य और सामुदायिक सेवा',
      visionTitle: 'हमारा लक्ष्य',
      visionText:
        'एक धर्मपरायण, आत्मनिर्भर और करुणामय समाज का निर्माण करना जहाँ कोई भी परिवार बेघर न रहे, हर अनाथ बच्चे को प्यार और विकास का आश्रय मिले, ग्रामीण इबादतगाह ज्ञान से रोशन हों और सामाजिक-आर्थिक स्थिति की परवाह किए बिना स्वास्थ्य सेवा सभी के लिए सुलभ हो।',
      missionTitle: 'हमारा काम',
      missionText:
        'सार्वभौमिक दया, गरिमा और भाईचारे के इस्लामी नैतिक मूल्यों पर आधारित पारदर्शी, समुदाय-संचालित, टिकाऊ कार्यक्रमों के माध्यम से गरीबी, बेघरपन और शैक्षिक अभाव को व्यवस्थित रूप से दूर करना।',
      coreValuesTitle: 'हमारे मूल मूल्य',
      coreValuesSubtitle: 'वे मार्गदर्शक सिद्धांत जो हमारी हर पहल और जमीनी सेवा को दिशा देते हैं।',
      values: {
        transparencyTitle: '100% पारदर्शिता',
        transparencyDesc:
          'प्राप्त प्रत्येक रुपये का सार्वजनिक हिसाब रखा जाता है और बिना किसी प्रशासनिक कटौती के सीधे कार्यक्षेत्र में उपयोग किया जाता है।',
        compassionTitle: 'सार्वभौमिक सहानुभूति',
        compassionDesc:
          'बिना किसी भेदभाव के हर इंसान की सच्ची देखभाल, संवेदना और निस्वार्थ सेवा करना।',
        dignityTitle: 'मानवीय गरिमा का सम्मान',
        dignityDesc:
          'अस्थायी दान के बजाय स्थायी समाधानों और सम्मान के माध्यम से लोगों को आत्मनिर्भर बनाना।',
        sustainabilityTitle: 'टिकाऊ प्रभाव',
        sustainabilityDesc:
          'आवास, शिक्षा और सौर ऊर्जा जैसी सुविधाओं में दीर्घकालिक योजनाएं बनाना जो पीढ़ियों तक लाभ पहुंचाएं।'
      },
      historyTitle: 'हमारा सफर',
      historyText:
        'मंगलुरु में युवाओं के एक छोटे समूह के रूप में शुरू होकर, HIF आज राज्यव्यापी मानवीय संस्था बन चुका है जो आवास, अनाथ सेवा और स्वास्थ्य के माध्यम से हजारों जिंदगियों को संवार रहा है।',
      boardTitle: 'ट्रस्टी बोर्ड और नेतृत्व',
      boardSubtitle: 'अनुभवी सामाजिक कार्यकर्ताओं, विद्वानों और समुदाय के मार्गदर्शकों का कुशल नेतृत्व।',
      pillarsTitle: 'हमारे चार प्रमुख स्तंभ',
      pillarsSubtitle: 'गरिमामय जीवन के लिए आवश्यक बुनियादी आवश्यकताओं को पूरा करने वाले कार्यक्रम।',
      pillarsDesc: 'आपका हर रुपया इन चार कामों में से एक में सीधे लगता है।',
      trustTitle: 'पारदर्शिता और विश्वास',
      trustPoint1: 'मंगलुरु, कर्नाटक में पंजीकृत भारतीय ट्रस्ट एनजीओ।',
      trustPoint2: 'जमीनी लाभार्थियों को 100% प्रत्यक्ष, बिना कमीशन वितरण।',
      trustPoint3: 'दाताओं के लिए उपलब्ध वार्षिक वित्तीय ऑडिट रिपोर्ट।',
      trustPoint4: 'हर दान के लिए आधिकारिक रसीद और 80G आयकर छूट प्रमाण पत्र।',
      hqTitle: 'केंद्रीय मुख्यालय'
    },
    stats: {
      housesDelivered: 'सौंपे गए मकान',
      housesSubtext: 'लक्ष्य: प्रोजेक्ट आशियाना में 2030 तक 150 मकान',
      masjidsRevived: 'पुनर्जीवित व प्रबंधित मस्जिदें',
      masjidsSubtext: 'कर्नाटक और आंध्र प्रदेश भर में',
      orphansNurtured: 'संवारे गए अनाथ छात्र',
      orphansSubtext: 'समग्र आवास, हिफ्ज़ और आधुनिक स्कूली शिक्षा',
      bloodUnits: 'एकत्रित रक्त इकाइयां',
      bloodSubtext: 'जीवन रक्षक आपातकालीन ब्लड सेल यूनिट्स',
      auditTransparency: 'ऑडिट और पारदर्शिता',
      auditSubtext: 'प्रत्यक्ष बिना कमीशन जमीनी वितरण'
    },
    pillars: {
      housingTitle: 'आवास मिशन',
      housingDesc: 'जरूरतमंद परिवारों के लिए स्थायी आशियाना घर',
      orphanCareTitle: 'अनाथ संरक्षण',
      orphanCareDesc: 'चिन्नपल्ली, चित्तूर में वंचितों के लिए आश्रय',
      masjidRevivalTitle: 'मस्जिद जीर्णोद्धार',
      masjidRevivalDesc: '176 ग्रामीण मस्जिदों का पुनरारंभ और समर्थन',
      healthcareTitle: 'स्वास्थ्य सेवा',
      healthcareDesc: 'निःशुल्क मेडीबैंक उपकरण और रक्तदाताओं का नेटवर्क'
    },
    projects: {
      eyebrow: 'हमारी योजनाएं',
      title: 'स्थायी बदलाव के लिए बनाई गई प्रमुख योजनाएं।',
      subtitle:
        'दक्षिण भारत भर में आवास, अनाथ संरक्षण और आध्यात्मिक बुनियादी ढांचे को मजबूत करने वाली तीन प्रमुख दीर्घकालिक पहल।',
      allProgramsBadge: 'सभी कार्यक्रम',
      allProgramsTitle: 'दान से लेकर मैदान तक, हर योजना का पारदर्शी रिकॉर्ड।',
      viewAll: 'सभी योजनाएं देखें',
      achievementsTitle: 'मुख्य काम',
      futureGoalsTitle: 'आगे का लक्ष्य',
      tiersTitle: 'मदद की राशि',
      beforeAfterTitle: 'पहले और बाद में',
      beforeLabel: 'पहले',
      afterLabel: 'बाद में',
      afterComingSoon: 'पूर्ण घर आगे यहाँ दिखेंगे।',
      ashiyana: {
        title: 'प्रोजेक्ट आशियाना',
        subtitle: 'बेघर और जरूरतमंद परिवारों के लिए गरिमामय आश्रय',
        badge: 'आवास मिशन',
        overview:
          'कच्ची झोपड़ियों में रहने वाली विधवा माताओं, निर्धन ग्रामीण परिवारों और दिव्यांगजनों के लिए प्रोजेक्ट आशियाना मजबूत, स्थायी पक्के मकान बनाता है।',
        statHomesBuilt: '36 निर्मित मकान',
        statTarget: 'लक्ष्य: 2030 तक 150 मकान',
        statAvgCost: 'औसत लागत ₹7.5 – ₹10 लाख'
      },
      chittor: {
        title: 'HIF चित्तूर – D.U.R.J',
        subtitle: 'वंचितों के लिए आश्रय',
        badge: 'वंचितों के लिए आश्रय',
        overview:
          'पुरानी इमारत से समृद्ध परिसर तक — चिन्नपल्ली, चित्तूर ज़िला, आंध्र प्रदेश में 2.5 एकड़ का वंचितों के लिए आश्रय।',
        statBoys: '2.5 एकड़ परिसर',
        statCampus: '20,000 वर्ग फुट भवन',
        statCurriculum: 'चिन्नपल्ली, चित्तूर ज़िला'
      },
      masjid: {
        title: 'मस्जिद विकास परियोजना',
        subtitle: 'समुदाय + समर्थन + स्थिरता',
        badge: 'आध्यात्मिक समुदाय',
        overview:
          'चिंतमणि के पास बंद एक मस्जिद से शुरू होकर, यह अब 176 मस्जिदों को फिर से खोलने और समर्थन देने वाला आंदोलन बन गया है, अल्हम्दुलिल्लाह।',
        statReopened: '176 मस्जिदों का समर्थन',
        statNewBuilt: '1 मस्जिद से आरंभ',
        statReach: 'कर्नाटक और आंध्र प्रदेश'
      },
      educationCity: {
        title: 'HIF एजुकेशन सिटी',
        subtitle: 'मंगलुरु के असैगोली में तैयार हो रहा 3.82 एकड़ का अरबी अकादमी परिसर',
        badge: 'इस्लामिक शिक्षा बुनियादी ढांचा',
        overview:
          'मंगलुरु के असैगोली में 3.82 एकड़ परिसर पर तैयार हो रही अत्याधुनिक अरबी अकादमी, जो आने वाली पीढ़ियों के विद्यार्थियों के लिए इस्लामिक शिक्षा को नया रूप देगी।'
      },
      boondh: {
        title: 'प्रोजेक्ट बूंद',
        subtitle: 'वंचित समुदायों के लिए सुरक्षित पेयजल',
        badge: 'जल सुरक्षा',
        overview:
          'प्रोजेक्ट बूंद बोरवेल, पानी के टैंकर और फिल्ट्रेशन बुनियादी ढांचे के माध्यम से वंचित समुदायों को स्वच्छ और सुरक्षित पेयजल उपलब्ध कराता है।'
      },
      libaas: {
        title: 'प्रोजेक्ट लिबास',
        subtitle: 'वंचित दूल्हा-दुल्हन के लिए गरिमामय उत्सव',
        badge: 'गरिमा और उत्सव',
        overview:
          'प्रोजेक्ट लिबास वंचित परिवारों के दूल्हा-दुल्हन के लिए शादी के कपड़े उपलब्ध कराकर उन्हें अपने खास दिन को गरिमा के साथ मनाने में मदद करता है। अच्छी हालत वाली दुल्हन की पोशाकें भी स्वीकार करते हैं।'
      }
    },
    activities: {
      eyebrow: 'गतिविधियां और विंग',
      title: 'विशिष्ट सामुदायिक प्रभाव के लिए समर्पित विभाग।',
      subtitle:
        'आपातकालीन चिकित्सा उपकरणों से लेकर युवा विकास और शैक्षणिक सहायता तक, हमारे विंग निरंतर सीधे लोगों तक सेवा दे रहे हैं।',
      wingsBadge: 'हमारे विंग्स',
      wingsTitle: 'स्वास्थ्य, शिक्षा और युवा मजबूत बनाना में निरंतर सेवाएं।',
      featuresTitle: 'हम क्या करते हैं',
      impactTitle: 'अब तक की मदद',
      medical: {
        title: 'HIF मेडिकल सेल और मेडीबैंक',
        subtitle: 'निःशुल्क चिकित्सा उपकरण ऋण और जीवन रक्षक स्वास्थ्य सहायता',
        badge: 'स्वास्थ्य और राहत',
        overview:
          'अस्पताल के बेड, ऑक्सीजन कंसंट्रेटर, व्हीलचेयर जैसे महंगे उपकरण मुफ्त उधार देना तथा आपातकालीन रक्तदान व डायलिसिस सब्सिडी प्रदान करना।',
        statBlood: '1,500+ यूनिट रक्तदान',
        statEquipment: '200+ उपकरणों का बैंक',
        statHelpline: '24/7 हेल्पलाइन सहायता'
      },
      education: {
        title: 'HIF शिक्षा विंग',
        subtitle: 'शैक्षणिक उत्कृष्टता, डिजिटल कौशल और मूल्यपरक शिक्षा',
        badge: 'शैक्षणिक मजबूत बनाना',
        overview:
          'जरूरतमंद मेधावी छात्रों को छात्रवृत्ति, मुफ्त स्कूल बैग व किताबें, कंप्यूटर शिक्षा और ग्रीष्मकालीन व्यक्तित्व विकास शिविर आयोजित करना।',
        statStudents: '2,500+ छात्रों को सहायता',
        statScholarships: '₹40L+ छात्रवृत्ति वितरित',
        statCamps: '45+ शिविर आयोजित'
      },
      youth: {
        title: 'HIF यूथ विंग एजुकेशन सेल',
        subtitle: 'कौशल, अंग्रेजी और समाज सेवा से नई पीढ़ी के नेताओं को प्रेरित करना',
        badge: 'युवा नेतृत्व',
        overview:
          'स्पोकन इंग्लिश कोर्स, डिजिटल साक्षरता, बाढ़ राहत कार्य और नैतिक मार्गदर्शन के माध्यम से युवाओं को सामाजिक बदलाव का संवाहक बनाना।',
        statVolunteers: '300+ सक्रिय युवा स्वयंसेवक',
        statWorkshops: '60+ कौशल कार्यशालाएं',
        statDrives: '120+ सामुदायिक अभियान'
      },
      womenSkill: {
        title: 'महिला कौशल एवं आजीविका केंद्र',
        subtitle: 'सिलाई, हस्तशिल्प प्रशिक्षण और स्वरोजगार सहायता',
        badge: 'आत्मनिर्भरता',
        overview:
          'विधवा और निम्न आय वर्ग की महिलाओं को सिलाई मशीनें, कढ़ाई प्रशिक्षण और घरेलू उद्यम स्थापित करने में सहयोग देना।'
      },
      disasterRelief: {
        title: 'आपदा राहत एवं त्वरित प्रतिक्रिया',
        subtitle: 'बाढ़ राहत, राशन किट और आपातकालीन पुनर्वास',
        badge: 'आपातकालीन राहत',
        overview:
          'प्राकृतिक आपदाओं और बाढ़ के दौरान त्वरित बचाव दल, स्वच्छ पेयजल, सूखा राशन किट और मकान मरम्मत सामग्री पहुंचाना।'
      }
    },
    gallery: {
      eyebrow: 'चित्र वीथिका',
      title: 'सीधे लोगों तक बदलाव के जीवंत दृश्य।',
      subtitle:
        'सौंपे गए मकान, पढ़ते हुए बच्चे, पुनर्जीवित मस्जिदें और संवरती जिंदगियों का सचित्र प्रमाण।',
      filters: {
        all: 'सभी',
        housing: 'आवास',
        orphanage: 'अनाथालय',
        masjid: 'मस्जिद',
        healthcare: 'स्वास्थ्य सेवा',
        education: 'शिक्षा',
        community: 'समुदाय',
        youth: 'युवा'
      },
      emptyMessage: 'इस श्रेणी में कोई तस्वीर नहीं मिली।'
    },
    reels: {
      eyebrow: 'हमारी रील्स',
      title: 'मैदान से सीधे, देखने लायक कहानियाँ',
      subtitle:
        'घर सौंपने, कक्षा के दिन और राहत अभियानों के पीछे के पलों को छोटी रील्स के ज़रिए करीब से देखें।',
      previous: 'पिछली रील',
      next: 'अगली रील',
      viewReel: 'रील देखें',
      followUs: 'अधिक के लिए @hif_india को फॉलो करें',
      mute: 'म्यूट',
      unmute: 'अनम्यूट'
    },
    featureVideos: {
      eyebrow: 'ज़मीन पर',
      title: 'पल जो हमारे साथ रहते हैं',
      subtitle:
        'मैदान से लंबी कहानियाँ — वे लोग, जगहें और दिन जो हमारे मिशन को परिभाषित करते हैं।',
      previous: 'पिछला वीडियो',
      next: 'अगला वीडियो',
      viewVideo: 'वीडियो देखें',
      mute: 'म्यूट',
      unmute: 'अनम्यूट'
    },
    getInvolved: {
      eyebrow: 'हमसे जुड़ें',
      title: 'समाज सेवा में हर किसी की भूमिका है।',
      description:
        'अपने प्रभाव का आकलन करें, स्वयंसेवक बनें या सीधे दान करें — हर प्रयास से जमीन पर वास्तविक बदलाव आता है।',
      calculatorBadge: 'प्रभाव कैलकुलेटर',
      calculatorTitle: 'देखें आपका दान क्या बदलाव ला सकता है',
      calculatorSubtitle: 'अपनी दान राशि चुनें और देखें कि इससे कितने लोगों की मदद होगी।',
      volunteerBadge: 'हमारे साथ जुड़ें',
      volunteerTitle: 'HIF स्वयंसेवक बनें',
      volunteerSubtitle: 'समाज में स्थायी बदलाव लाने के लिए अपने कौशल और समय का सदुपयोग करें।',
      form: {
        fullName: 'पूरा नाम *',
        fullNamePlaceholder: 'उदा: मोहम्मद फारूक',
        email: 'ईमेल पता *',
        emailPlaceholder: 'you@example.com',
        phone: 'फ़ोन / WhatsApp *',
        phonePlaceholder: '+91 98750 81312',
        city: 'शहर / स्थान *',
        cityPlaceholder: 'उदा: मंगलुरु, उडुपी, बेंगलुरु',
        skillsLabel: 'आप किस प्रकार योगदान देना चाहते हैं? (कौशल चुनें)',
        availableHours: 'उपलब्ध समय / प्रति सप्ताह',
        availableHoursPlaceholder: 'उदा: सप्ताहांत में 4-6 घंटे',
        notes: 'संक्षिप्त परिचय / अनुभव',
        notesPlaceholder: 'अपनी पृष्ठभूमि, रुचियां या स्वयंसेवक बनने की प्रेरणा साझा करें...',
        submitButton: 'स्वयंसेवक के रूप में पंजीकरण करें',
        submittingButton: 'जमा हो रहा है...',
        submitError: 'आवेदन जमा नहीं हो सका। कृपया पुनः प्रयास करें या WhatsApp पर संदेश भेजें।',
        whatsAppButton: 'WhatsApp पर संदेश भेजें',
        successTitle: 'पंजीकरण के लिए धन्यवाद!',
        successMessage: 'हमारे स्वयंसेवक समन्वयक जल्द ही WhatsApp या फ़ोन के माध्यम से आपसे संपर्क करेंगे।',
        submitAnother: 'एक और आवेदन जमा करें'
      },
      skills: {
        bloodDonation: 'रक्तदान / चिकित्सा समन्वय',
        teaching: 'अध्यापन / स्पोकन इंग्लिश / ट्यूशन',
        disasterResponse: 'आपदा एवं बाढ़ राहत प्रतिक्रिया',
        mediaDesign: 'ग्राफिक डिजाइन, वीडियो व सोशल मीडिया',
        fieldVerification: 'आशियाना फील्ड सत्यापन व राहत',
        eventLogistics: 'कार्यक्रम आयोजन एवं व्यवस्था'
      },
      bankCard: {
        title: 'सीधा बैंक ट्रांसफर',
        subtitle: 'बिना किसी अतिरिक्त शुल्क के सीधे हमारे बैंक खाते में दान करें',
        accountName: 'लाभार्थी का नाम',
        accountNumber: 'खाता संख्या',
        ifsc: 'IFSC कोड',
        branch: 'शाखा',
        upiId: 'UPI ID',
        taxNote: 'सभी दान 80G आयकर छूट के पात्र हैं।',
        copyDetails: 'सभी बैंक विवरण कॉपी करें'
      },
      faqTitle: 'अक्सर पूछे जाने वाले प्रश्न',
      faqSubtitle: 'दान, ऑडिट और योजनाओं के प्रबंधन से जुड़े स्पष्ट उत्तर।',
      faqs: {
        q1: 'क्या HIF India को दिए गए दान पर 80G छूट मिलती है?',
        a1: 'हाँ, भारतीय आयकर अधिनियम के तहत HIF INDIA को दिए गए दान पर 80G कर छूट लागू है। आधिकारिक रसीद प्रदान की जाती है।',
        q2: 'मेरे दान का कितना हिस्सा सीधे लाभार्थियों तक पहुंचता है?',
        a2: 'योजना के लिए दिए गए दान का 100% हिस्सा बिना किसी प्रशासनिक कटौती के सीधे सामग्री, भोजन या दवाओं में उपयोग होता है।',
        q3: 'क्या मैं पूरा आशियाना घर या किसी अनाथ छात्र को प्रायोजित कर सकता हूँ?',
        a3: 'बिल्कुल! आप एक पूरे घर का निर्माण (₹7.5 लाख) या एक अनाथ छात्र की वार्षिक शिक्षा (₹15,000/वर्ष) प्रायोजित कर सकते हैं।',
        q4: 'यदि मैं मंगलुरु से बाहर रहता हूँ तो क्या मैं ऑनलाइन स्वयंसेवा कर सकता हूँ?',
        a4: 'हाँ! डिजिटल डिजाइन, अनुवाद, वेब डेवलपमेंट और सोशल मीडिया आउटरीच के लिए ऑनलाइन स्वयंसेवकों का स्वागत है।'
      }
    },
    contact: {
      eyebrow: 'संपर्क करें',
      title: 'हमसे संपर्क करें।',
      description:
        'दान, प्रायोजन, चिकित्सा उपकरण अनुरोध या स्वयंसेवा के लिए हमारे मंगलुरु मुख्यालय से संपर्क करें।',
      centralSecretariat: 'केंद्रीय सचिवालय',
      hours: 'कार्य समय',
      hoursValue: 'सुबह 9:00 – शाम 7:00 (सोम–शनि)',
      primaryPhoneLabel: 'मुख्य कार्यालय एवं मेडिकल सेल',
      altPhoneLabel: 'वैकल्पिक हेल्पलाइन',
      emailLabel: 'आधिकारिक ईमेल',
      formTitle: 'हमें संदेश भेजें',
      formSubtitle: 'हम आमतौर पर 24 घंटे के भीतर जवाब देते हैं।',
      nameLabel: 'पूरा नाम *',
      namePlaceholder: 'उदा: अहमद खान',
      emailInputLabel: 'ईमेल पता *',
      emailPlaceholder: 'ahmed@example.com',
      phoneInputLabel: 'फ़ोन / WhatsApp',
      phonePlaceholder: '+91 98750 81312',
      subjectLabel: 'विषय',
      subjectPlaceholder: 'विषय चुनें',
      subjects: {
        general: 'सामान्य पूछताछ',
        donation: 'दान एवं 80G रसीद',
        volunteer: 'स्वयंसेवा',
        medical: 'चिकित्सा उपकरण / मेडीबैंक अनुरोध',
        partnership: 'सीएसआर / संस्थागत साझेदारी',
        other: 'अन्य'
      },
      messageFieldLabel: 'आपका संदेश *',
      messagePlaceholder: 'हम आपकी किस प्रकार सहायता कर सकते हैं?',
      sendMessage: 'संदेश भेजें',
      sendingMessage: 'भेजा जा रहा है...',
      submitError: 'संदेश नहीं भेजा जा सका। कृपया पुनः प्रयास करें या WhatsApp पर संदेश भेजें।',
      whatsAppButton: 'WhatsApp पर संदेश भेजें',
      whatsAppHint: 'हमसे संपर्क करने का सबसे तेज़ तरीका — WhatsApp खोलने के लिए टैप करें।',
      messageSentTitle: 'संदेश भेजा गया!',
      messageSentText: 'HIF INDIA से संपर्क करने के लिए धन्यवाद। हम जल्द ही आपसे संपर्क करेंगे।',
      sendAnother: 'एक और संदेश भेजें'
    },
    donateModal: {
      title: 'HIF INDIA को दान करें',
      subtitle: 'बैंक ट्रांसफर और UPI भुगतान विवरण',
      forCause: 'इसके लिए',
      generalFund: 'सामान्य मानवीय राहत कोष',
      presetAmounts: 'सुझाई गई राशि',
      customAmount: 'अन्य राशि',
      customAmountPlaceholder: 'राशि दर्ज करें (₹)',
      tabScanQr: 'स्कैन करें और भुगतान करें',
      tabBankTransfer: 'बैंक ट्रांसफर',
      fastestBadge: 'सबसे तेज़',
      beneficiaryName: 'लाभार्थी का नाम (खाताधारक)',
      accountNumber: 'खाता संख्या (चालू खाता)',
      ifscCode: 'IFSC कोड',
      branch: 'शाखा',
      branchValue: 'HDFC बंदर शाखा, मंगलुरु',
      upiId: 'UPI ID',
      scanQr: 'भुगतान के लिए UPI QR कोड स्कैन करें',
      showQr: 'QR कोड देखें',
      hideQr: 'QR कोड छुपाएं',
      qrHelp: 'GPay, PhonePe, Paytm या BHIM ऐप से स्कैन करें',
      qrSecurityTitle: 'भुगतान से पहले जांच लें',
      qrSecurityNote:
        'स्कैन करने के बाद, आपके UPI ऐप में प्राप्तकर्ता का नाम "HIF INDIA" दिखना चाहिए। यदि कोई अन्य नाम दिखे, तो भुगतान न करें — तुरंत WhatsApp पर हमसे संपर्क करें।',
      tax80GNote: '80G आयकर छूट लागू। दान प्रमाण पत्र के लिए रसीद WhatsApp पर साझा करें।',
      notifyWhatsapp: 'भुगतान के बाद WhatsApp पर सूचित करें',
      close: 'बंद करें',
      copiedToast: 'क्लिपबोर्ड पर कॉपी हो गया'
    },
    footer: {
      aboutText:
        'मंगलुरु में पंजीकृत एक जमीनी गैर-सरकारी संगठन जो स्थायी आवास, अनाथ शिक्षा, मस्जिद जीर्णोद्धार और निःशुल्क चिकित्सा उपकरणों के माध्यम से लोगों की मदद करता है।',
      zeroCommission: 'दिया गया पैसा 100% सीधे लोगों तक। कोई कमीशन नहीं',
      exploreTitle: 'देखें',
      programsTitle: 'कार्यक्रम',
      supportUs: 'सहयोग करें',
      bankAccount: 'HDFC बैंक खाता',
      donateQr: 'दान करें / UPI QR',
      allRightsReserved: 'हाइलैंड इस्लामिक फोरम (HIF INDIA)। सर्वाधिकार सुरक्षित।',
      addressFull: 'मस्जिद एहसान कॉम्प्लेक्स, कंकनाडी, मंगलुरु – 575002',
      slogan: 'सहानुभूति और गरिमा के साथ समुदायों को मजबूत बनाना, जीवन में बदलाव',
      developedBy: 'द्वारा विकसित'
    },
    legal: {
      lastUpdated: 'अंतिम अद्यतन: {date}',
      lastUpdatedDate: '28 सितंबर 2026',
      relatedNav: 'संबंधित नीतियां',
      orgRegisteredHq: 'भारतीय ट्रस्ट अधिनियम के तहत पंजीकृत एनजीओ, मुख्यालय मंगलुरु।',
      termsTitle: 'नियम और शर्तें',
      termsDesc: 'यह वेबसाइट और हाइलैंड इस्लामिक फोरम (HIF INDIA) को दिए जाने वाले दान कैसे काम करते हैं।',
      privacyTitle: 'गोपनीयता नीति',
      privacyDesc: 'HIF INDIA कौन-सी व्यक्तिगत जानकारी एकत्र करता है, उसका उपयोग क्यों करता है, और उसे किसके साथ साझा करता है।',
      refundTitle: 'धनवापसी नीति',
      refundDesc: 'HIF INDIA को दिए गए दान की धनवापसी कब हो सकती है, और उसमें कितना समय लगता है।',
      cancellationTitle: 'रद्दीकरण नीति',
      cancellationDesc: 'HIF INDIA को दान या स्वयंसेवा अनुरोध कब रद्द कर सकते हैं।',
      terms: {
        aboutTitle: 'इन नियमों के बारे में',
        aboutBody:
          'ये नियम HIF INDIA वेबसाइट के उपयोग और हाइलैंड इस्लामिक फोरम (HIF INDIA) — भारतीय ट्रस्ट अधिनियम के तहत पंजीकृत एनजीओ — को दिए गए किसी भी दान पर लागू होते हैं। वेबसाइट इस्तेमाल करने या दान देने से आप इन नियमों, हमारी गोपनीयता नीति, धनवापसी नीति और रद्दीकरण नीति से सहमत होते हैं।',
        whatWeDoTitle: 'हम क्या करते हैं',
        whatWeDoBody:
          'HIF INDIA मंगलुरु स्थित जमीनी मानवीय ट्रस्ट है। वेबसाइट हमारे कार्यक्रम बताती है और समर्थकों को योगदान देने देती है। हम सामान नहीं बेचते। दान स्वैच्छिक योगदान है, किसी उत्पाद या सेवा की खरीद नहीं।',
        whatWeDoListIntro: 'हमारे मुख्य कार्यक्रम हैं:',
        programAshiyana: 'Project Ashiyana — बेघर और जरूरतमंद परिवारों के लिए स्थायी आवास',
        programChitoor: 'HIF CHITOOR (D.U.R.J) — अनाथ बच्चों के लिए आवासीय देखभाल, हिफ्ज और स्कूली शिक्षा',
        programMasjid: 'मस्जिद विकास — ग्रामीण मस्जिदों की मरम्मत और रखरखाव',
        programMedical: 'HIF Medical Cell — निःशुल्क चिकित्सा उपकरण सहायता और रक्तदान समन्वय',
        donationsTitle: 'दान और राशि',
        donationsBody1:
          'राशि आप चुनते हैं। परियोजना पृष्ठ पर सुझाई गई राशि केवल मार्गदर्शन है। वेबसाइट देखने के लिए कोई न्यूनतम शुल्क नहीं है, और कोई सदस्यता शुल्क भी नहीं है।',
        donationsBody2:
          'वेबसाइट पर दिखाए गए HIF INDIA खाते में बैंक ट्रांसफर या UPI से, या हमारे भुगतान साझेदार Razorpay से ऑनलाइन भुगतान कर सकते हैं। भुगतान से पहले लाभार्थी का नाम HIF INDIA सुनिश्चित करें।',
        donationsBody3:
          'किसी खास परियोजना के लिए चिह्नित दान उसी परियोजना की सामग्री, मजदूरी, भोजन या चिकित्सा राहत पर लगता है। HIF INDIA उन उपहारों पर प्रशासनिक कमीशन नहीं लेता। भुगतान गेटवे अपना प्रसंस्करण शुल्क काट सकता है।',
        donationsBody4:
          'जहां लागू हो, दान आयकर अधिनियम के तहत 80G छूट के पात्र हैं। भुगतान रसीद WhatsApp या ईमेल पर साझा करें; हम प्रमाण पत्र जारी करेंगे।',
        responsibilitiesTitle: 'आपकी जिम्मेदारियां',
        responsibilitiesBody:
          'रसीद मांगते समय सही संपर्क विवरण दें, और वही धन दें जिसकी आपको अनुमति है। वेबसाइट से झूठी, हानिकारक या अवैध सामग्री न भेजें, और साइट में बाधा न डालें।',
        contentTitle: 'वेबसाइट सामग्री',
        contentBody:
          'परियोजना अपडेट, तस्वीरें और आंकड़े सद्भाव से प्रकाशित होते हैं और मैदानी काम बदलने पर बदल सकते हैं। साइट पर कोई खास निर्माण तिथि या दान के बदले व्यक्तिगत लाभ का वादा नहीं है।',
        paymentsTitle: 'भुगतान',
        paymentsBody:
          'ऑनलाइन कार्ड, नेट-बैंकिंग और UPI भुगतान Razorpay और आपके बैंक संभालते हैं। हम आपका पूरा कार्ड नंबर या UPI PIN नहीं रखते। भुगतान तभी पूरा होता है जब हम या हमारा भुगतान साझेदार पुष्टि करे। बैंक विलंब और असफल UPI हमारे नियंत्रण से बाहर हैं।',
        ipTitle: 'बौद्धिक संपदा',
        ipBody:
          'HIF INDIA नाम, लोगो और वेबसाइट सामग्री हाइलैंड इस्लामिक फोरम की है, जब तक क्रेडिट कुछ और न कहे। आप हमारे पृष्ठों के लिंक साझा कर सकते हैं। लिखित अनुमति के बिना हमारी तस्वीरें या लोगो दूसरी संस्था के लिए न कॉपी करें।',
        liabilityTitle: 'दायित्व',
        liabilityBody:
          'वेबसाइट सार्वजनिक जानकारी और दान का माध्यम है। भुगतान ऐप की गलती, बैंक विलंब या साइट के अस्थायी बंद से हुई हानि के लिए, भारतीय कानून जितनी अनुमति दे, हम जिम्मेदार नहीं हैं।',
        lawTitle: 'लागू कानून',
        lawBody:
          'इन नियमों पर भारत के कानून लागू होते हैं। इस वेबसाइट या HIF INDIA को दान से जुड़े विवादों पर मंगलुरु, कर्नाटक की अदालतों का क्षेत्राधिकार है।',
        changesTitle: 'परिवर्तन',
        changesBody:
          'कार्यक्रम या भुगतान तरीके बदलने पर हम ये नियम अपडेट कर सकते हैं। इस पृष्ठ के शीर्ष की तिथि नवीनतम संस्करण है। अपडेट के बाद वेबसाइट का उपयोग संशोधित नियमों की स्वीकृति है।'
      },
      privacy: {
        whoTitle: 'कौन जिम्मेदार है',
        whoBody:
          'इस वेबसाइट तथा हमारे फोन, ईमेल और WhatsApp माध्यमों से एकत्र व्यक्तिगत जानकारी के लिए हाइलैंड इस्लामिक फोरम (HIF INDIA) जिम्मेदार है।',
        collectTitle: 'हम कौन-सी जानकारी एकत्र करते हैं',
        collectIntro: 'दान लेने, पूछताछ का जवाब देने और कार्यक्रम चलाने के लिए जितनी जरूरत है, उतनी ही एकत्र करते हैं:',
        collectForm:
          'आप जो विवरण भेजते हैं: Get Involved फॉर्म पर नाम, फोन नंबर, शहर और स्वयंसेवा कौशल (यह आपके टाइप किए संदेश के साथ WhatsApp खोलता है), और बाद में ईमेल, फोन या WhatsApp पर लिखा गया कुछ भी।',
        collectDonation:
          'दान रिकॉर्ड: राशि, तिथि, यदि आपने कोई परियोजना या कारण बताया हो, और लेनदेन संदर्भ (जैसे UTR या भुगतान id) ताकि रसीद और जहां लागू हो 80G प्रमाण पत्र जारी कर सकें।',
        collectPayment:
          'Razorpay पृष्ठ पर दर्ज भुगतान विवरण (कार्ड, नेट-बैंकिंग या UPI) Razorpay और आपका बैंक एकत्र करते हैं। पूरा कार्ड नंबर, CVV या UPI PIN हमें नहीं मिलता और हम उसे नहीं रखते।',
        collectPrefs:
          'भाषा चयन और हल्का/गहरा प्रदर्शन वरीयता आपके ब्राउज़र में (local storage) सहेजी जाती है। इस वेबसाइट पर विज्ञापन ट्रैकर नहीं चलते।',
        useTitle: 'हम इसका उपयोग कैसे करते हैं',
        useIntro: 'हम इस जानकारी का उपयोग करते हैं:',
        useConfirm: 'आपके दान की पुष्टि और रसीद देने के लिए',
        use80g: 'आपके अनुरोध पर और दान पात्र होने पर 80G प्रमाण पत्र जारी करने के लिए',
        useReply: 'स्वयंसेवा, चिकित्सा उपकरण और सामान्य पूछताछ का जवाब देने के लिए',
        useBooks: 'पंजीकृत ट्रस्ट के लिए आवश्यक सामान्य खाते रखने के लिए',
        useProtect: 'गलत या अनधिकृत भुगतान से संस्था की रक्षा के लिए',
        useNoSell: 'हम व्यक्तिगत जानकारी नहीं बेचते, और तीसरे पक्ष के विज्ञापन के लिए उसका उपयोग नहीं करते।',
        shareTitle: 'हम इसे किसके साथ साझा करते हैं',
        shareIntro: 'जानकारी केवल इनके साथ साझा होती है:',
        shareRazorpay: 'आपके शुरू किए भुगतान को पूरा करने के लिए Razorpay और आपका बैंक या UPI ऐप',
        shareBank: 'ट्रांसफर से आए दान के लिए हमारे बैंकर (HDFC Bank)',
        shareAudit: 'जब भारतीय कानून मांगे, लेखा परीक्षक और अधिकारी',
        shareHost: 'ईमेल या इस वेबसाइट को होस्ट करने वाला सेवा प्रदाता, केवल वह सेवा चलाने के लिए',
        shareProviders:
          'Razorpay अपनी गोपनीयता नीति के तहत भुगतान संसाधित करता है। यह वेबसाइट Firebase Hosting से चलती है। पृष्ठ या भुगतान पहुंचाने के लिए जरूरी IP पते जैसे तकनीकी डेटा उन्हें दिखता है।',
        retainTitle: 'हम इसे कितने समय रखते हैं',
        retainBody:
          'दान और रसीद रिकॉर्ड भारतीय कर और ट्रस्ट कानून जितने समय मांगता है, उतने समय रखे जाते हैं। पूछताछ संदेश पत्राचार के दौरान और उसके बाद उचित अवधि तक रखे जाते हैं। यदि कानूनी रिकॉर्ड के लिए अब जरूरत न हो, स्वयंसेवा पूछताछ हटाने को कह सकते हैं।',
        choicesTitle: 'आपके विकल्प',
        choicesBody:
          'आप पूछ सकते हैं कि आपके बारे में कौन से दान या पूछताछ रिकॉर्ड हैं, उन्हें सही करने को कह सकते हैं, या संपर्क बंद करने को कह सकते हैं। info@hif.org.in पर लिखें या इस पृष्ठ के शीर्ष पर दिए नंबर पर कॉल करें। रसीद और खाते मिटाए नहीं जा सकते, इसलिए संपर्क अनुरोध के बाद भी दान रिकॉर्ड रखना पड़ सकता है।',
        childrenTitle: 'बच्चे',
        childrenBody:
          'यह वेबसाइट वयस्क दानदाताओं और स्वयंसेवकों के लिए है। हम जानबूझकर साइट से बच्चों की व्यक्तिगत जानकारी नहीं लेते। हमारी देखभाल में बच्चों की कार्यक्रम जानकारी अभिभावक या संस्था की सहमति से ही, निजी रिकॉर्ड उजागर किए बिना प्रकाशित होती है।',
        changesTitle: 'परिवर्तन',
        changesBody: 'यदि हम नई तरह की जानकारी एकत्र करने लगें, तो यह पृष्ठ अपडेट कर शीर्ष की तिथि बदलेंगे।'
      },
      refund: {
        notRefundableTitle: 'दान सामान्यतः वापस नहीं होता',
        notRefundableBody:
          'हाइलैंड इस्लामिक फोरम (HIF INDIA) को दिया गया उपहार पंजीकृत एनजीओ को स्वैच्छिक दान है, सामान की खरीद नहीं। HIF INDIA उत्पाद नहीं भेजता और डिलीवरी शुल्क नहीं लेता। दान सफलतापूर्वक मिलने के बाद उसे आवास, अनाथ देखभाल, मस्जिद कार्य, चिकित्सा राहत या सामान्य मानवीय कोष में लगाया जाता है; मन बदलने पर वापसी नहीं होती।',
        whenTitle: 'हम कब धनवापसी करेंगे',
        whenIntro: 'इन स्थितियों में हम दान वापस करेंगे:',
        whenDuplicate: 'एक ही दान के लिए दो बार शुल्क लगा (डुप्लिकेट भुगतान)।',
        whenFailed: 'पैसे आपके खाते से निकले पर तकनीकी खराबी से HIF INDIA तक नहीं पहुंचे।',
        whenMistake: 'आपने वास्तविक गलती से HIF INDIA को भुगतान किया, और वह राशि अभी किसी परियोजना पर खर्च नहीं हुई।',
        whenUnauthorised:
          'भुगतान अनधिकृत था। हम बैंक या Razorpay से जांच कर वही राशि वापस करेंगे जिसे वे अनधिकृत पुष्टि करें।',
        whenSpent:
          'नामित परियोजना पर पहले ही खर्च हो चुका दान — जैसे घर की सामग्री, छात्र सहायता, या चिकित्सा मदद — वापस नहीं हो सकता।',
        howTitle: 'धनवापसी कैसे मांगें',
        howBody:
          'लेनदेन के 7 दिनों के भीतर info@hif.org.in पर ईमेल करें या WhatsApp पर संदेश भेजें। नाम, फोन नंबर, तिथि, राशि, चुनी परियोजना, और UTR, UPI संदर्भ या Razorpay भुगतान id शामिल करें।',
        howReply: 'हम अनुरोध की समीक्षा कर 7 कार्य दिवसों में जवाब देंगे।',
        timelineTitle: 'धनवापसी की समयसीमा',
        timelineBody:
          'यदि हम धनवापसी स्वीकृत करें, तो उसे मूल भुगतान विधि (वही कार्ड, UPI id, या बैंक खाता) पर भेजते हैं। स्वीकृति के 7 कार्य दिवसों में धनवापसी शुरू करते हैं। बैंक, UPI ऐप और Razorpay क्रेडिट दिखाने में और 5 से 7 कार्य दिवस ले सकते हैं। नकद या किसी अन्य व्यक्ति के खाते में वापसी नहीं हो सकती।',
        failedTitle: 'असफल भुगतान',
        failedBody:
          'यदि भुगतान असफल हो या भुगतान से पहले पृष्ठ बंद कर दें, तो कोई दान नहीं लिया जाता और वापस करने को कुछ नहीं। यदि बैंक डेबिट दिखाए जो हमें न मिला हो, संदर्भ संख्या लिखें; हम बैंक या Razorpay से पता करेंगे।'
      },
      cancellation: {
        beforeTitle: 'भुगतान से पहले',
        beforeBody:
          'भुगतान पूरा होने से पहले आप कभी भी दान रद्द कर सकते हैं। दान विंडो बंद करें, या UPI, कार्ड या नेट-बैंकिंग चरण पूरा न करें। यदि आप भुगतान नहीं करते, तो कोई शुल्क नहीं लगता और रद्दीकरण अनुरोध की जरूरत नहीं।',
        beforeNoSub: 'HIF INDIA स्वचालित आवर्ती डेबिट नहीं लगाता। रद्द करने के लिए कोई सदस्यता या शुल्क नहीं है।',
        afterTitle: 'सफल भुगतान के बाद',
        afterLead:
          'पूरा हुआ दान ऑर्डर की तरह रद्द नहीं हो सकता, क्योंकि यह स्वैच्छिक उपहार है, उत्पाद खरीद नहीं। यदि भुगतान डुप्लिकेट था, हमारी ओर से असफल था, या गलती से हुआ था, तो देखें',
        afterTrail:
          '। अनुरोध लेनदेन के 7 दिनों के भीतर हमें पहुंचने चाहिए। स्वीकृत धनवापसी 7 कार्य दिवसों में शुरू होती है, फिर आपके बैंक या Razorpay का सामान्य लगभग 5 से 7 कार्य दिवस का क्रेडिट समय लगता है।',
        ifHifTitle: 'यदि HIF कोई गतिविधि रद्द करे',
        ifHifBody:
          'यदि हम कोई अभियान या कार्यक्रम रद्द करें जिसके लिए आपने खास चिह्नित दान दिया हो, और वह राशि खर्च न हुई हो, तो हम आपसे संपर्क करेंगे। आप उसे निकटतम संबंधित कार्यक्रम में लगाने को कह सकते हैं, या धनवापसी नीति के तहत वापस मांग सकते हैं।',
        volunteerTitle: 'स्वयंसेवा और पूछताछ अनुरोध',
        volunteerBody:
          'स्वयंसेवा पंजीकरण या कोई अन्य पूछताछ info@hif.org.in पर ईमेल कर या WhatsApp पर संदेश भेजकर वापस ले सकते हैं। जो फोन नंबर इस्तेमाल किया बताएं। हम उस अनुरोध पर फॉलो-अप बंद कर देंगे। इससे पहले से प्राप्त दान रद्द नहीं होता।',
        shippingTitle: 'रद्द करने के लिए शिपिंग नहीं',
        shippingBody:
          'हम इस वेबसाइट से भौतिक सामान नहीं बेचते और नहीं भेजते। कोई शिपिंग ऑर्डर नहीं, कोई शिपिंग रद्दीकरण नहीं। Medical Cell द्वारा दिया गया चिकित्सा उपकरण परिवार के साथ सीधे व्यवस्थित कार्यक्रम सेवा है, ऑनलाइन स्टोर ऑर्डर नहीं।'
      }
    }
  }
}
