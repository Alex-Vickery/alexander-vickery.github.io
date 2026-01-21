import { Publication, PublicationStatus } from "../types";

export const publications: Publication[] = [
  {
    id: "speeding-up-deferred-acceptance",
    title: "Speeding Up Deferred Acceptance",
    subtitle: "",
    authors: [
      {
        name: "Gregory Gutin",
        url: "https://pure.royalholloway.ac.uk/en/persons/gregory-gutin/",
      },
      { name: "Daniel Karapetyan", url: "https://people.cs.nott.ac.uk/pszdk/" },
      {
        name: "Phillip R Neary",
        url: "https://sites.google.com/site/prneary/",
      },
      { name: "Alexander Vickery", url: "https://www.alexander-vickery.com" },
      {
        name: "Anders Yeo",
        url: "https://portal.findresearcher.sdu.dk/en/persons/yeo/",
      },
    ],
    status: PublicationStatus.PUBLISHED,
    journal: "(Forthcoming) Journal of Mechanism and Institution Design",
    year: "2026",
    abstract:
      "A run of the deferred acceptance (DA) algorithm may contain proposals that are sure to be rejected. In this paper we introduce the accelerated deferred acceptance algorithm that proceeds in a similar manner to DA but with sure-to-be rejected proposals ruled out. Accelerated deferred acceptance outputs the same stable matching as DA but does so more efficiently: it terminates in weakly fewer rounds, requires weakly fewer proposals, and stable pairs match no later. Computational experiments show that the efficiency savings can be strict.",
    highlights: [
      "We propose a new algorithm - Accelerated Deferred Acceptance (ADA) - that modifies the Deferred Acceptance (DA) algorithm. Under  ADA, when a woman receives a proposal, she rejects all men ranked below her top proposer (pre-emptive rejections), rather than rejecting only those that proposed concurrently.",
      "We prove that ADA always produces the same output as DA, meaning that it inherits properties like strategy-proofness for proposers. We also prove theoretically that ADA is weakly more efficient.",
      "To test the efficiency savings, we developed and introduced a novel market generator capable of sampling random markets of any size. The generator uses a scalar parameter to control the bias of the sampling distribution, ranging from uniform preferences to 'universal rankings' (identical preferences).",
      "Through computational experiments, we demonstrate that the efficiency savings are often strict and substantial. For example, in large markets with correlated preferences, ADA reduced the number of proposals by 96% compared to DA.",
    ],
    resultsFigureUrl: "/assets/figures/ada_figure.png",
    resultsFigureTitle:
      "Figure 1: The proportion of final pairs matched by round",
    resultsFigureExplanation:
      "In a run of DA and in a run of ADA, women only ever trade up. Given this, once a woman is matched she stays matched and, in particular, once a stable pair forms they remain together forever more.\n\n Exploting this feature, in *Figure 1* we plot our novel measure of '*the round in which stable pairs first match*', for both algorithms, for a market with 1,024 participants and correlated preferences. ADA's trajectory is given by the solid line and DA's by the dashed one. By the time that ADA wraps up in round 123, DA is only 7% of the way to completion (it takes 1,820 rounds). Moreover, as of round 123, DA has only identified 13% of the equilibrium pairings; the remaining 87% of individuals are either unmatched or are currently paired with someone who they will not end up with.\n\n We note that the shape of both plots is concave: they increase linearly up until ~95% stable pairings are found, followed by a tapering off. That is, each algorithm requires a (relatively) large number of rounds to find matches for the last ~5% of individuals. In the paper, we show that this shape is not an artefact of this class of preferences. Rather, it is common to every market that we considered.",
    jelCodes: ["C63", "C78", "D47"],
    bibtex: `@article{gutin2024speedingdeferredacceptance,
  title={Speeding Up Deferred Acceptance},
  author={Gutin, Gregory and Karapetyan, Daniel and Neary, Phillip R. and Vickery, Alexander and Yeo, Anders},
  archivePrefix={arXiv},
  eprint = {2409.06865},
  primaryClass = {econ.TH},
  year={2024},
  doi={https://doi.org/10.48550/arXiv.2409.06865},
}`,
    paperUrl: "https://www.mechanism-design.org/",
    workingPaperUrl: "/assets/publications/ADAv3.pdf",
    codeUrl: "https://rdmc.nottingham.ac.uk/handle/internal/11470",
    imageUrl: "https://picsum.photos/seed/tax/800/450",
  },
  {
    id: "divorce-parental-conflicts",
    title: "Divorce, Parental Conflicts and Child Skills: A Story of Selection",
    subtitle: "",
    authors: [
      {
        name: "Gloria Moroni",
        url: "https://gloriamoroni.wixsite.com/gloriamoroni/about",
      },
      { name: "Alexander Vickery", url: "https://www.alexander-vickery.com" },
    ],
    status: PublicationStatus.PUBLISHED,
    journal: "Labour Economics",
    year: "2025",
    abstract:
      "This paper uses data from the UK Millennium Cohort Study (MCS) to study how parental divorce in early childhood affects a child's skill development. We estimate a dynamic model of child skill formation that accounts for the endogenous nature of parental divorce including a measure of interparental conflicts. Our results show that the skill disadvantages among children of divorce stem almost entirely from the effects of selection. Here, skill gaps materialise due to disadvantages in household characteristics that also increase divorce risk. Inter-parental conflicts, parental education, and family financial resources emerge as key pre-divorce characteristics that explain divorce gaps in children's cognitive and socio-emotional skills from age 3, through age 11. Inter-parental conflicts are often unobserved and overlooked in the literature, but our results demonstrate that they indeed play a major role, particularly for gaps in socio-emotional skills. Moreover, such gaps are found to be more pronounced among more vulnerable children, i.e. those with lower levels of socio-emotional skills.",
    highlights: [
      "We incorporate a measure of inter-parental conflicts into a model of skill development - a variable that is often unobserved or overlooked in existing literature - alongside a rich set of family background variables to better characterise parental selection into divorce.",
      "Using a decomposition approach, we demonstrate that cognitive and socio-emotional skill disadvantages found among children of divorce stem almost entirely from selection effects (pre-divorce characteristics) rather than the divorce itself.",
      "We provide novel evidence that divorce skill gaps are not uniform; they are significantly more pronounced for 'vulnerable' children, specifically those at the lower end of the skills distributions.",
      "By estimating a dynamic model of skill formation with an endogenous divorce decision, we show that interventions targeting pre-divorce characteristics could be effective at narrowing skill gaps, whereas policies aimed solely at discouraging divorce would not.",
    ],
    resultsFigureUrl: "/assets/figures/div_skill_figure.png",
    resultsFigureTitle:
      "Figure 4: Offsetting differences in observable characteristics between groups",
    resultsFigureExplanation:
      "In *Figure 4* we visualise our counterfactual analysis used determine how much of the skill gap between children of divorced and intact families would remain if specific pre-divorce characteristics were equalised. Each sub-figure plots the remaining divorce skill gap on the vertical axis against specific skill quantiles (25th to 90th percentile) on the horizontal axis for children at ages 3, 5, 7, and 11.\n\n The purple dashed line highlights the raw, observed skill gap found in the data, serving as our baseline. Then, the colored bars represent the gap remaining under different simulations: blue for equalising parental education, red for financial resources, green for inter-parental conflicts, and yellow for exogenously changing the divorce decision without altering other family characteristics.\n\n *Results for cognitive skills:*\n For cognitive skills (top panels), our results indicate that gaps are primarily driven by socioeconomic disparities. Removing differences in parental education (blue bars) and family financial resources (red bars) is most effective at narrowing these gaps, particularly for children at the lower end of the skill distribution. In fact, equalising parental education completely eliminates the gap for children below the 50th quantile. Conversely, the yellow bars show that simply preventing divorce without improving family characteristics leads to negligible reductions in the gap, suggesting that family structure itself is not the primary driver of cognitive disadvantages.\n\n *Results for socio-emotional skills:*\n For socio-emotional skills (bottom panels) our results highlight the critical role of family dynamics, specifically inter-parental conflicts. Reducing conflicts (green bars) is most effective, narrowing the gap across all ages and quantiles, and completely offsetting it for children at the 90th percentile. While equalising parental education also reduces the gap consistently, the benefit of equalising financial resources (red bars) is largely limited to children in the lower quantiles. Similar to cognitive skills, the yellow bars demonstrate that solely discouraging divorce is likely an ineffective strategy for offsetting socio-emotional skill gaps.",
    jelCodes: ["J12", "J13", "J24", "C21", "D1"],
    bibtex: `@article{MORONI2025102830,
  title={Divorce, Parental Conflicts and Child Skills: A Story of Selection},
  author={Moroni, Gloria and Vickery, Alexander},
  journal={Labour Economics},
  volume={97},
  pages={102830},
  issn={0927-5371},
  year={2025},
  doi={https://doi.org/10.1016/j.labeco.2025.102830},
}`,
    paperUrl: "https://doi.org/10.1016/j.labeco.2025.102830",
    workingPaperUrl: "/assets/publications/divorce_conflicts.pdf",
    codeUrl:
      "https://github.com/Alex-Vickery/Divorce-parental-conflicts-and-child-skills-A-story-of-selection",
    imageUrl: "https://picsum.photos/seed/tax/800/450",
  },
  {
    id: "the-role-of-own-group-density",
    title:
      "The Role of Own-Group Density & Local Social Norms for Ethnic Marital Sorting: Evidence from the UK",
    subtitle: "",
    authors: [
      {
        name: "Dan Anderberg",
        url: "https://pure.royalholloway.ac.uk/en/persons/dan-anderberg/",
      },
      { name: "Alexander Vickery", url: "https://www.alexander-vickery.com" },
    ],
    status: PublicationStatus.PUBLISHED,
    journal: "European Economic Review",
    year: "2021",
    abstract:
      "We exploit the post-war immigration-induced regional variation in ethnic composition among British-born individuals to study inter-ethnic marriages in the UK. Black and Asian individuals are more likely to marry intra-ethnically in regions where the own ethnicity share is relatively large. In order to disentangle the relative roles played by supply effects, preferences and local social norms we estimate a structural marriage market model that allows for conformity behaviour. Using the estimated model, we make predictions for a set of more recent cohorts whose marital choices are still to be completed.",
    highlights: [
      "We establish the key stylized fact that Black and Asian individuals are significantly more likely to marry within their own ethnicity in regions where the local population share of their own group is relatively high.",
      'We extend the Choo and Siow marriage market model to include "conformity preferences", where the utility of a marriage depends on how common that marriage type is in the local area. We show that the model can be identified using a multi-market approach exploiting regional demographic variation.',
      'Our estimation reveals that "principal preferences" (the underlying utility of matching) exhibit significant complementarities in ethnicity. We find that these ethnic preferences are far stronger drivers of marital sorting than educational qualifications.',
      "Using our model we predict marriage patterns for younger cohorts (born 1990-2006) and show that as minority population shares grow, Black and Asian individuals are expected to become less likely to marry inter-ethnically. This trend is amplified by endogenously evolving social norms that reinforce intra-group marriage as it becomes more common.",
    ],
    resultsFigureUrl: "/assets/figures/own_group_fig.png",
    resultsFigureTitle:
      "Figure 6: Distribution of Partner Type by Own Type and Gender",
    resultsFigureExplanation:
      "In *Figure 6* we illustrate the raw marital sorting patterns for married males, categorised by their own ethnicity (white, Black, Asian) and qualification level (GCSE/Low vs. A-Level/High). The bars represent the distribution of their partners' ethnicity and qualification types.\n\n *Descriptive results*\nWhite males predominantly marry with white partners, with a very small proportion marrying non-white partners compared to other groups. There is also a visible pattern of sorting by education: white men with low qualifications predominantly marry white women with low qualifications, and those with high qualifications tend to marry white women with high qualifications. In contrast, Black males show a more varied choice of partners. For married Black males, marrying a white partner is as common as marrying a Black partner, indicating a higher rate of inter-ethnic marriage relative to the other groups. Similar to white males, Asian males are most likely to marry within their own ethnic group. While intra-ethnic marriage is dominant, about one-fifth of Asian males married to UK-born partners are married to white partners. The figure also confirms that marriages between Black and Asian individuals are relatively rare.",
    jelCodes: ["D10", "J11", "J12", "J15"],
    bibtex: `@article{ANDERBERG2021103774,
  title={The Role of Own-Group Density & Local Social Norms for Ethnic Marital Sorting: Evidence from the UK},
  author={Anderberg, Dan and Vickery, Alexander},
  journal={European Economic Review},
  volume={138},
  pages={103774},
  issn={0014-2921},
  year={2021},
  doi={https://doi.org/10.1016/j.euroecorev.2021.103774},
}`,
    paperUrl: "https://doi.org/10.1016/j.euroecorev.2021.103774",
    workingPaperUrl: "/assets/publications/own_group_density.pdf",
    codeUrl:
      "https://github.com/Alex-Vickery/The-role-of-own-group-density-local-social-norms-for-ethnic-marital-sorting-Evidence-from-the-UK",
    imageUrl: "https://picsum.photos/seed/tax/800/450",
  },
  {
    id: "ipv-childrens-human-capital",
    title: "Intimate Partner Violence & Children's Human Capital",
    authors: [
      {
        name: "Dan Anderberg",
        url: "https://pure.royalholloway.ac.uk/en/persons/dan-anderberg/",
      },
      {
        name: "Gloria Moroni",
        url: "https://gloriamoroni.wixsite.com/gloriamoroni/about",
      },
      { name: "Alexander Vickery", url: "https://www.alexander-vickery.com" },
    ],
    status: PublicationStatus.WORKING_PAPER,
    journal: "IFS Working Paper, CESifo Working Paper",
    year: "2025",
    abstract:
      "We use a dynamic latent factor model to study how exposure to intimate partner violence (IPV) affects young children's accumulation of cognitive and socio-emotional skills. The model allows for both a direct effect of exposure as well as indirect effects via changes in parental investments and mother's mental health. IPV has adverse effects on both skills, with more immediate and larger effects for socio-emotional skills and with the skill deficits growing in exposure duration. The indirect effects dominate for both skills. Early interventions that support parental investment and mother's mental health have potential for offsetting the adverse IPV-effects but only if subsequent IPV exposure is eliminated.",
    highlights: [
      "We employ a dynamic latent factor model to quantify how Intimate Partner Violence (IPV) exposure affects the accumulation of cognitive and socio-emotional skills, distinguishing between the direct effects of exposure and the indirect effects operating through changes in parental investments and maternal mental health.",
      "We find that the adverse impacts of IPV on child development stem largely from indirect mechanisms rather than the direct effect of witnessing abuse. Specifically, we find that deficits in the early years (up to age three) arise primarily through reduced parental investments and the deterioration of the mother's mental health.",
      "Unlike studies relying on police or hospital records, we use repeated self-reported measures from the ALSPAC dataset. This allows us to analyse a more comprehensive distribution of abuse and its timing, capturing less visible but more pervasive forms of IPV.",
      "Our results reveal distinctly different trajectories for different skills: IPV has larger and more immediate negative effects on socio-emotional skills, whereas deficits in cognitive skills are smaller initially and emerge more gradually over time.",
      "Through counterfactual simulations, we demonstrate that early interventions targeting maternal mental health and parental investment are likely to mitigate skill deficits. However, these interventions are likely to be effective in the long run only if subsequent IPV exposure is eliminated; otherwise, the benefits can be eroded.",
    ],
    resultsFigureUrl: "/assets/figures/ipv_figure.png",
    resultsFigureTitle: "Figure 1: Incidence of IPV",
    resultsFigureExplanation:
      "In *Figure 1* we describe the prevalence and dynamics of Intimate Partner Violence (IPV) within the sample over five survey occasions: during pregnancy (32 weeks) and when the child was 8, 21, 33, and 47 months old.\n\n*IPV Incidence - panel (a)*\nThis panel contrasts point-in-time abuse rates with cumulative exposure. The point-in-time incidence, represented by the blue dashed line, shows that the proportion of mothers reporting IPV at any single survey occasion remains relatively stable, hovering between 7% and 10% throughout the post-birth period. In contrast, the cumulative incidence (red dotted line) rises steadily over time. By the final survey at 47 months, 21.1% of mothers have disclosed experiencing IPV on at least one occasion. This highlights that while the rate at any single point-in-time might seem low, a significant proportion of mothers - over one in five - are exposed to abuse at some point during their child's early years.\n\n*IPV Persistence - panel (b)*\nThis panel illustrates how strongly past abuse predicts future abuse by plotting the coefficients from a regression of current IPV status on the previous period's status. Our findings show that the coefficient remains high and stable, averaging around 0.45. This implies that a mother who disclosed abuse in the previous survey is, on average, 45 percentage points more likely to report abuse in the current survey compared to a mother who did not, indicating that IPV in this sample is highly persistent rather than being a transitory event.",
    jelCodes: ["I12", "J12", "J24"],
    bibtex: `@techreport{Anderberg2025IPV,
  title={Intimate Partner Violence & Children's Human Capital},
  author={Anderberg, Dan and Moroni, Gloria and Vickery, Alexander},
  year={2025},
  institution={Institute for Fiscal Studies},
  type={Working Paper}
}`,
    workingPaperUrl:
      "https://ifs.org.uk/publications/intimate-partner-violence-and-childrens-human-capital",
    codeUrl:
      "https://github.com/Alex-Vickery/intimate-partner-violence-and-childrens-human-capital",
    imageUrl: "https://picsum.photos/seed/labor/800/450",
  },
  {
    id: "gay-varsity",
    title:
      "Gay Varsity: Subject Choices, Grades, and Early Careers for UK LGB University Students",
    authors: [
      {
        name: "Jefferson Frank",
        url: "https://pure.royalholloway.ac.uk/en/persons/jefferson-frank/",
      },
      { name: "Alexander Vickery", url: "https://www.alexander-vickery.com" },
    ],
    status: PublicationStatus.WORKING_PAPER,
    journal: "Revise & Resubmit at Labour Economics",
    year: "2025",
    abstract:
      "Using data on UK students attending university from 2012 - 2020, we look at how LGB students differ from their heterosexual counterparts. LGB men and women both have large shifts towards Humanities subjects, and away from LEM (law, economics, management) and STEM. Gay and bisexual men do well in degree outcomes in the Humanities, and about the same as heterosexual men in other subjects. Lesbian and bisexual women do about the same as heterosexual women in the Humanities and poorly in other subjects. Male and female LGB students suffer in salaries in their early career.",
    highlights: [
      'Unlike previous studies that rely on smaller surveys or inferred sexual orientation from cohabitation (e.g., the US American Community Survey), we use comprehensive administrative data from the UK\'s Higher Education Statistics Agency (HESA). This dataset covers over 2 million observations and includes contemporaneous self-identified sexual orientation for about 45,000 students, allowing for a robust "like-for-like" comparison that controls for university entrance grades (A-levels) and demographics.',
      "We find a similarity in subject choices between LGB men and LGB women: both groups display large, significant shifts towards Humanities subjects and away from relatively higher-earning LEM (Law, Economics, Management) and STEM fields compared to their heterosexual counterparts.",
      "We contribute new evidence on university performance (grades), finding that LGB men achieve significantly more First-Class degrees in Humanities than heterosexual men, whereas LGB women perform significantly worse than heterosexual women in LEM and STEM subjects.",
      "Controlling for degree subject, grades, and demographics, we find that both LGB men and LGB women earn significantly less (about 6%) than their heterosexual counterparts in their first jobs after graduation.",
    ],
    resultsFigureUrl: "/assets/figures/lgb_figure.png",
    resultsFigureTitle:
      "Figure 1: Difference in LGB/H subject enrollment rates by subject returns (£)",
    resultsFigureExplanation:
      "In *Figure 1* we illustrate the difference in university subject enrollment rates between *LGB* (Lesbian, Gay, Bisexual) students and *Heterosexual* (H) students, ordered by the potential financial returns of those subjects. The figure plots the difference in enrollment rates on the vertical axis against degree subjects ordered by increasing average earnings on the horizontal axis. For each subject, the difference is shown separately for men (left glyph) and women (right glyph), with shapes indicating the field: circles for Humanities (HUM), squares for STEM, and diamonds for Law, Economics, and Management (LEM).\n\n*Descriptive findings*\nThe figure reveals a visible downward trend, indicating that LGB students are disproportionately enrolled in relatively lower-earning subjects (predominantly Humanities) and under-represented in relatively higher-earning subjects (STEM and LEM). Specific disparities highlighted include a strong under-representation of LGB men in Engineering and LGB women in Economics. Additionally, subjects like Nursing/Allied to Medicine show significant disparities for LGB women.",
    jelCodes: ["J15", "I23", "J71"],
    bibtex: `@techreport{frank2025gayvarsity,
  title={Gay Varsity: Subject Choices, Grades, and Early Careers for UK LGB University Students},
  author={Frank, Jefferson and Vickery, Alexander},
  year={2025},
  type={Working Paper}
}`,
    workingPaperUrl: "/assets/publications/Gay Varsity June 25.pdf",
    codeUrl:
      "https://github.com/Alex-Vickery/Gay-Varsity-Subject-Choices-Grades-and-Early-Careers-for-UK-LGB-University-Students",
    imageUrl: "https://picsum.photos/seed/labor/800/450",
  },
  {
    id: "looking-up-the-ladder",
    title:
      "Looking Up the Ladder: The Gender of Top Peers and Student Outcomes",
    subtitle: "",
    authors: [
      { name: "Youjin Hahn", url: "https://sites.google.com/site/youjinhahn/" },
      {
        name: "Gloria Moroni",
        url: "https://gloriamoroni.wixsite.com/gloriamoroni/about",
      },
      {
        name: "Valentina Tonei",
        url: "https://sites.google.com/site/valentinatonei/",
      },
      { name: "Alexander Vickery", url: "https://www.alexander-vickery.com" },
    ],
    status: PublicationStatus.WORK_IN_PROGRESS,
    year: "2026",
    abstract:
      "We exploit a unique educational setting in South Korea to identify the relationship between the gender composition of the set of students that are outperforming a given student - defined as 'the gender composition of the ordinal ranking' - and the development of adolescent gender role attitudes. In this unique setting, students were randomly assigned to schools within their district, and to classes within their school. In addition, students were randomly assigned to single-sex schools or mixed-sex schools within their district. Using classroom level data, containing the complete gender composition and ordinal rankings within the class, we estimate a simple model of the development of gender role attitudes. We identify the model because ordinal rankings and the gender composition are exogenous, conditional on district fixed effects, due to randomisation introduced by the random assignment policy.",
    jelCodes: ["I21", "J16", "Z13"],
    bibtex: `@misc{hahn2026looking,
  title={Looking Up the Ladder: The Gender of Top Peers and Student Outcomes},
  author={Hahn, Youjin and Moroni, Gloria and Tonei, Valentina and Vickery, Alexander},
  year={2026},
  note={Work in Progress}
}`,
    imageUrl: "https://picsum.photos/seed/macro/800/450",
  },
  {
    id: "reaching-for-the-sky",
    title:
      "Reaching for the SKY: Parental Investments in Academic Skills and Competition for University Places",
    subtitle: "",
    authors: [
      { name: "Alexander Vickery", url: "https://www.alexander-vickery.com" },
    ],
    status: PublicationStatus.WORK_IN_PROGRESS,
    year: "2024",
    abstract:
      "I study the development of child academic skills through adolescence in anticipation of entry to university in the context of South Korea. I look at how heterogeneity in initial household income and child skills affects parents' decisions to invest in private education for their child, and how the resulting choices contribute to inequality in university admissions in the first instance, and also to lower social mobility in terms of lifetime earnings. I use a non-linear factor approach to estimate human capital production functions that are placed within an equilibrium framework to account for the fact that places at top universities are highly attractive but also limited. I find that there are strong complementarities between different academic skills and that private education in one subject can have strong spillover effects on the accumulation of skills in cognate subjects. The implied equilibrium competition for limited places at top universities contributes to low inter-generational social mobility, and, conversely, policies that would limit competition could improve equality and the allocation of talent.",
    jelCodes: ["I24", "J24", "D58"],
    bibtex: `@misc{vickery2024,
  title={Reaching for the SKY: Parental Investments in Academic Skills and Competition for University Places},
  author={Vickery, Alexander.},
  year={2024},
  note={Work in Progress}
}`,
    imageUrl: "https://picsum.photos/seed/macro/800/450",
  },
];
