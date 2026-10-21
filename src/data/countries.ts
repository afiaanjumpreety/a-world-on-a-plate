import type { CountryCode } from './types';

export type Region =
  | 'South Asia'
  | 'Southeast Asia'
  | 'East Asia'
  | 'Central Asia'
  | 'West Asia'
  | 'North Africa'
  | 'Sub-Saharan Africa'
  | 'Europe'
  | 'North America'
  | 'Latin America'
  | 'Caribbean'
  | 'Oceania';

export const REGIONS: Region[] = [
  'South Asia',
  'Southeast Asia',
  'East Asia',
  'Central Asia',
  'West Asia',
  'North Africa',
  'Sub-Saharan Africa',
  'Europe',
  'North America',
  'Latin America',
  'Caribbean',
  'Oceania',
];

export interface Country {
  code: CountryCode;
  /** ISO 3166-1 numeric, zero-padded — the feature id in world-atlas. */
  numeric: string;
  name: string;
  region: Region;
}

// [alpha-3, numeric, display name, region]
const TABLE: [string, string, string, Region][] = [
  ['AFG', '004', 'Afghanistan', 'Central Asia'],
  ['ALB', '008', 'Albania', 'Europe'],
  ['DZA', '012', 'Algeria', 'North Africa'],
  ['AGO', '024', 'Angola', 'Sub-Saharan Africa'],
  ['ARG', '032', 'Argentina', 'Latin America'],
  ['ARM', '051', 'Armenia', 'West Asia'],
  ['AUS', '036', 'Australia', 'Oceania'],
  ['AUT', '040', 'Austria', 'Europe'],
  ['AZE', '031', 'Azerbaijan', 'West Asia'],
  ['BHR', '048', 'Bahrain', 'West Asia'],
  ['BGD', '050', 'Bangladesh', 'South Asia'],
  ['BRB', '052', 'Barbados', 'Caribbean'],
  ['BLR', '112', 'Belarus', 'Europe'],
  ['BEL', '056', 'Belgium', 'Europe'],
  ['BLZ', '084', 'Belize', 'Latin America'],
  ['BTN', '064', 'Bhutan', 'South Asia'],
  ['BOL', '068', 'Bolivia', 'Latin America'],
  ['BIH', '070', 'Bosnia and Herzegovina', 'Europe'],
  ['BRA', '076', 'Brazil', 'Latin America'],
  ['BRN', '096', 'Brunei', 'Southeast Asia'],
  ['BGR', '100', 'Bulgaria', 'Europe'],
  ['KHM', '116', 'Cambodia', 'Southeast Asia'],
  ['CMR', '120', 'Cameroon', 'Sub-Saharan Africa'],
  ['CAN', '124', 'Canada', 'North America'],
  ['CPV', '132', 'Cabo Verde', 'Sub-Saharan Africa'],
  ['CHL', '152', 'Chile', 'Latin America'],
  ['CHN', '156', 'China', 'East Asia'],
  ['COL', '170', 'Colombia', 'Latin America'],
  ['COM', '174', 'Comoros', 'Sub-Saharan Africa'],
  ['CRI', '188', 'Costa Rica', 'Latin America'],
  ['HRV', '191', 'Croatia', 'Europe'],
  ['CUB', '192', 'Cuba', 'Caribbean'],
  ['CYP', '196', 'Cyprus', 'Europe'],
  ['CZE', '203', 'Czechia', 'Europe'],
  ['DNK', '208', 'Denmark', 'Europe'],
  ['DJI', '262', 'Djibouti', 'Sub-Saharan Africa'],
  ['DOM', '214', 'Dominican Republic', 'Caribbean'],
  ['ECU', '218', 'Ecuador', 'Latin America'],
  ['EGY', '818', 'Egypt', 'North Africa'],
  ['SLV', '222', 'El Salvador', 'Latin America'],
  ['ERI', '232', 'Eritrea', 'Sub-Saharan Africa'],
  ['EST', '233', 'Estonia', 'Europe'],
  ['ETH', '231', 'Ethiopia', 'Sub-Saharan Africa'],
  ['FJI', '242', 'Fiji', 'Oceania'],
  ['FIN', '246', 'Finland', 'Europe'],
  ['FRA', '250', 'France', 'Europe'],
  ['GEO', '268', 'Georgia', 'West Asia'],
  ['DEU', '276', 'Germany', 'Europe'],
  ['GHA', '288', 'Ghana', 'Sub-Saharan Africa'],
  ['GRC', '300', 'Greece', 'Europe'],
  ['GRD', '308', 'Grenada', 'Caribbean'],
  ['GTM', '320', 'Guatemala', 'Latin America'],
  ['GUY', '328', 'Guyana', 'Caribbean'],
  ['HTI', '332', 'Haiti', 'Caribbean'],
  ['HND', '340', 'Honduras', 'Latin America'],
  ['HKG', '344', 'Hong Kong', 'East Asia'],
  ['HUN', '348', 'Hungary', 'Europe'],
  ['ISL', '352', 'Iceland', 'Europe'],
  ['IND', '356', 'India', 'South Asia'],
  ['IDN', '360', 'Indonesia', 'Southeast Asia'],
  ['IRN', '364', 'Iran', 'West Asia'],
  ['IRQ', '368', 'Iraq', 'West Asia'],
  ['IRL', '372', 'Ireland', 'Europe'],
  ['ISR', '376', 'Israel', 'West Asia'],
  ['ITA', '380', 'Italy', 'Europe'],
  ['JAM', '388', 'Jamaica', 'Caribbean'],
  ['JPN', '392', 'Japan', 'East Asia'],
  ['JOR', '400', 'Jordan', 'West Asia'],
  ['KAZ', '398', 'Kazakhstan', 'Central Asia'],
  ['KEN', '404', 'Kenya', 'Sub-Saharan Africa'],
  ['KOR', '410', 'South Korea', 'East Asia'],
  ['PRK', '408', 'North Korea', 'East Asia'],
  ['KWT', '414', 'Kuwait', 'West Asia'],
  ['KGZ', '417', 'Kyrgyzstan', 'Central Asia'],
  ['LAO', '418', 'Laos', 'Southeast Asia'],
  ['LVA', '428', 'Latvia', 'Europe'],
  ['LBN', '422', 'Lebanon', 'West Asia'],
  ['LBY', '434', 'Libya', 'North Africa'],
  ['LTU', '440', 'Lithuania', 'Europe'],
  ['LUX', '442', 'Luxembourg', 'Europe'],
  ['MAC', '446', 'Macau', 'East Asia'],
  ['MDG', '450', 'Madagascar', 'Sub-Saharan Africa'],
  ['MWI', '454', 'Malawi', 'Sub-Saharan Africa'],
  ['MYS', '458', 'Malaysia', 'Southeast Asia'],
  ['MDV', '462', 'Maldives', 'South Asia'],
  ['MLI', '466', 'Mali', 'Sub-Saharan Africa'],
  ['MLT', '470', 'Malta', 'Europe'],
  ['MUS', '480', 'Mauritius', 'Sub-Saharan Africa'],
  ['MEX', '484', 'Mexico', 'Latin America'],
  ['MDA', '498', 'Moldova', 'Europe'],
  ['MNG', '496', 'Mongolia', 'East Asia'],
  ['MNE', '499', 'Montenegro', 'Europe'],
  ['MAR', '504', 'Morocco', 'North Africa'],
  ['MOZ', '508', 'Mozambique', 'Sub-Saharan Africa'],
  ['MMR', '104', 'Myanmar', 'Southeast Asia'],
  ['NPL', '524', 'Nepal', 'South Asia'],
  ['NLD', '528', 'Netherlands', 'Europe'],
  ['NZL', '554', 'New Zealand', 'Oceania'],
  ['NIC', '558', 'Nicaragua', 'Latin America'],
  ['NGA', '566', 'Nigeria', 'Sub-Saharan Africa'],
  ['MKD', '807', 'North Macedonia', 'Europe'],
  ['NOR', '578', 'Norway', 'Europe'],
  ['OMN', '512', 'Oman', 'West Asia'],
  ['PAK', '586', 'Pakistan', 'South Asia'],
  ['PSE', '275', 'Palestine', 'West Asia'],
  ['PAN', '591', 'Panama', 'Latin America'],
  ['PRY', '600', 'Paraguay', 'Latin America'],
  ['PER', '604', 'Peru', 'Latin America'],
  ['PHL', '608', 'Philippines', 'Southeast Asia'],
  ['POL', '616', 'Poland', 'Europe'],
  ['PRT', '620', 'Portugal', 'Europe'],
  ['PRI', '630', 'Puerto Rico', 'Caribbean'],
  ['QAT', '634', 'Qatar', 'West Asia'],
  ['ROU', '642', 'Romania', 'Europe'],
  ['RUS', '643', 'Russia', 'Europe'],
  ['RWA', '646', 'Rwanda', 'Sub-Saharan Africa'],
  ['LCA', '662', 'Saint Lucia', 'Caribbean'],
  ['SAU', '682', 'Saudi Arabia', 'West Asia'],
  ['SEN', '686', 'Senegal', 'Sub-Saharan Africa'],
  ['SRB', '688', 'Serbia', 'Europe'],
  ['SYC', '690', 'Seychelles', 'Sub-Saharan Africa'],
  ['SGP', '702', 'Singapore', 'Southeast Asia'],
  ['SVK', '703', 'Slovakia', 'Europe'],
  ['SVN', '705', 'Slovenia', 'Europe'],
  ['SOM', '706', 'Somalia', 'Sub-Saharan Africa'],
  ['ZAF', '710', 'South Africa', 'Sub-Saharan Africa'],
  ['SSD', '728', 'South Sudan', 'Sub-Saharan Africa'],
  ['ESP', '724', 'Spain', 'Europe'],
  ['LKA', '144', 'Sri Lanka', 'South Asia'],
  ['SDN', '729', 'Sudan', 'North Africa'],
  ['SUR', '740', 'Suriname', 'Caribbean'],
  ['SWE', '752', 'Sweden', 'Europe'],
  ['CHE', '756', 'Switzerland', 'Europe'],
  ['SYR', '760', 'Syria', 'West Asia'],
  ['TWN', '158', 'Taiwan', 'East Asia'],
  ['TJK', '762', 'Tajikistan', 'Central Asia'],
  ['TZA', '834', 'Tanzania', 'Sub-Saharan Africa'],
  ['THA', '764', 'Thailand', 'Southeast Asia'],
  ['TLS', '626', 'Timor-Leste', 'Southeast Asia'],
  ['TTO', '780', 'Trinidad and Tobago', 'Caribbean'],
  ['TUN', '788', 'Tunisia', 'North Africa'],
  ['TUR', '792', 'Türkiye', 'West Asia'],
  ['TKM', '795', 'Turkmenistan', 'Central Asia'],
  ['UGA', '800', 'Uganda', 'Sub-Saharan Africa'],
  ['UKR', '804', 'Ukraine', 'Europe'],
  ['ARE', '784', 'United Arab Emirates', 'West Asia'],
  ['GBR', '826', 'United Kingdom', 'Europe'],
  ['USA', '840', 'United States', 'North America'],
  ['URY', '858', 'Uruguay', 'Latin America'],
  ['UZB', '860', 'Uzbekistan', 'Central Asia'],
  ['VEN', '862', 'Venezuela', 'Latin America'],
  ['VNM', '704', 'Vietnam', 'Southeast Asia'],
  ['YEM', '887', 'Yemen', 'West Asia'],
  ['ZMB', '894', 'Zambia', 'Sub-Saharan Africa'],
  ['ZWE', '716', 'Zimbabwe', 'Sub-Saharan Africa'],
];

export const COUNTRIES: Record<CountryCode, Country> = Object.fromEntries(
  TABLE.map(([code, numeric, name, region]) => [code, { code, numeric, name, region }]),
);

const BY_NUMERIC: Record<string, Country> = Object.fromEntries(
  TABLE.map(([code, numeric]) => [numeric, COUNTRIES[code]]),
);

export function country(code: CountryCode): Country {
  return COUNTRIES[code] ?? { code, numeric: '', name: code, region: 'Europe' };
}

export function countryByNumeric(numeric: string): Country | undefined {
  return BY_NUMERIC[numeric];
}
