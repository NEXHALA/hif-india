/** Shared PhilSof ERP donation page (receipt + Razorpay). */
export const GENERAL_DONATE_URL = 'https://erp.hif.org.in/user/Donate/index?id=1'

export function erpProjectDonateUrl(projectId: number): string {
  return `https://erp.hif.org.in/user/Donate/Project?id=1&ProjectId=${projectId}`
}

/** Live ERP project donate URLs. Sequential ProjectId matches 20122600NN. */
export const PROJECT_DONATE = {
  ashiyana: {
    fullHome: erpProjectDonateUrl(1),
    roof: erpProjectDonateUrl(2),
    water: erpProjectDonateUrl(3),
    brickShare: erpProjectDonateUrl(4),
    general: erpProjectDonateUrl(37),
  },
  chitoor: {
    studentCare: erpProjectDonateUrl(5),
    specialFood: erpProjectDonateUrl(6),
    normalFood: erpProjectDonateUrl(7),
    clothing: erpProjectDonateUrl(8),
    expansionLand: erpProjectDonateUrl(9),
    general: erpProjectDonateUrl(17),
  },
  mdp: {
    imamPay: erpProjectDonateUrl(10),
    newMasjid: erpProjectDonateUrl(11),
    halfPayment: erpProjectDonateUrl(12),
    solarWudhu: erpProjectDonateUrl(13),
    wudhuKhana: erpProjectDonateUrl(14),
    mayyath: erpProjectDonateUrl(15),
    water: erpProjectDonateUrl(16),
    general: erpProjectDonateUrl(18),
  },
  educationCity: {
    foundingPatron: erpProjectDonateUrl(19),
    classroomShare: erpProjectDonateUrl(20),
    buildingFund: erpProjectDonateUrl(21),
    brickCement: erpProjectDonateUrl(22),
    general: erpProjectDonateUrl(23),
  },
  boondh: {
    fullWater: erpProjectDonateUrl(24),
    borewell: erpProjectDonateUrl(25),
    well: erpProjectDonateUrl(26),
    dispenser: erpProjectDonateUrl(27),
    filtration: erpProjectDonateUrl(28),
    general: erpProjectDonateUrl(29),
  },
  libaas: {
    fullWedding: erpProjectDonateUrl(30),
    bridalDress: erpProjectDonateUrl(31),
    clothSet: erpProjectDonateUrl(32),
    groomAttire: erpProjectDonateUrl(33),
    quranSet: erpProjectDonateUrl(34),
    sandal: erpProjectDonateUrl(35),
    general: erpProjectDonateUrl(36),
  },
} as const
