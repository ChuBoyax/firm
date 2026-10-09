export const WEBMASTER = 'mailto:webmaster@lodesterre.com?subject=Broken%20Link';
export const HOME = './';
export const CREDENTIALS = 'credentials.html';
export const CONTACT_PAGE = 'contact.html';

export const PHONE = '518-437-1840';
export const PHONE_HREF = 'tel:+15184371840';
export const ADDRESS = ['PO Box 752 (21 Greeley Brook Rd)', 'Oxford, ME 04270'];
export const DIRECTIONS = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('21 Greeley Brook Rd, Oxford, ME 04270');

/* Credentials page: grouped from the original list */
export const CREDENTIAL_GROUPS = [
  { id: 'pro', icon: 'badge', label: 'Professional', items: ['Resume', 'Business Cards', 'Certified Maine Assessor Certificate', 'Massachusetts Assessor Certificate', 'National Background Check'] },
  { id: 'edu', icon: 'cap', label: 'Education', items: ['College Diploma', 'High School Diploma', 'Elementary Diploma'] },
  { id: 'mil', icon: 'shield', label: 'Military', items: ['US Army Honorable Discharge', 'US Army Achievement', 'Military Identification'] },
  { id: 'awards', icon: 'award', label: 'Awards & certifications', items: ['Hunter Safety', 'Wrestling Award', 'Tennis Award'] },
];
export const TAX_ALERT = 'https://www.lodesterre.com/tax_alert!!.htm';
export const AMENDED = 'https://www.irs.gov/filing/wheres-my-amended-return';
export const WITHHOLDING = 'https://www.irs.gov/individuals/irs-withholding-calculator';

export const SERVE = ['Single individuals', 'Families', 'Small to large businesses', 'Partnerships', 'Corporations', 'Estates and trusts'];

/** Site name shown under each link, e.g. "irs.gov" */
export const host = href => {
  const parts = new URL(href).hostname.replace(/^www\d*\./, '').split('.');
  // Keep state subdomains like tax.ny.gov, otherwise just the domain
  const keep = parts.at(-2).length === 2 ? 3 : 2;
  return parts.slice(-keep).join('.');
};

/* Links from the original home page, grouped into header menus */
export const STATE_REFUNDS = [
  ['New York', 'https://www8.tax.ny.gov/PRIS/prisStart'],
  ['Maine', 'https://portal.maine.gov/refundstatus/'],
  ['Mass', 'https://www.mass.gov/how-to/check-the-status-of-your-tax-refund'],
  ['Vermont', 'https://secure.vermont.gov/TAX/refund/'],
  ['Connecticut', 'http://www.ct.gov/drs/cwp/view.asp?a=1462&q=266274'],
  ['North Carolina', 'https://eservices.dor.nc.gov/wheresmyrefund/SelectionServlet'],
  ['California', 'https://www.ftb.ca.gov/refund/index.asp'],
];

export const MENUS = [
  {
    id: 'refunds',
    icon: 'refunds',
    label: 'Refunds & accounts',
    links: [
      ['Amended Status', AMENDED],
      ['Create My Account', 'https://www.irs.gov/payments/view-your-tax-account'],
      ['Create My New York State Account', 'https://www8.tax.ny.gov/OSIN/osinHome'],
      ['Estimate my Federal withholding', WITHHOLDING],
    ],
    states: STATE_REFUNDS,
  },
  {
    id: 'calc',
    icon: 'calc',
    label: 'Calculators',
    links: [
      ['Financial Calculators', 'http://www.dinkytown.net/'],
      ['Cost to Build', 'http://wsip-184-185-152-244.sd.sd.cox.net/CornersType.asp'],
      ['$ to Bld Shell', 'https://www.costtobuild.net/est_garage.html'],
    ],
  },
  {
    id: 'links',
    icon: 'links',
    label: 'Links',
    links: [
      ['The Times Union', 'http://www.timesunion.com/'],
      ['Superpages', 'https://www.superpages.com/'],
      ['Weather.Com', 'https://weather.com/'],
      ['Nationwide Real Estate Listings', 'http://www.realtor.com'],
    ],
  },
];
