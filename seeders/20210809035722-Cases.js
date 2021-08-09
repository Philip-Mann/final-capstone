'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cases', [
      {
        name: 'Mr. X',
        race: 'White/Hispanic',
        sex: 'Male',
        age: '16 - 24',
        height: `5'6"`,
        location: 'Johnson County, Texas',
        body_condition: 'Decomposed',
        year: '1972',
        images: 'https://dnadoeproject.org/wp-content/uploads/2020/10/MrXJohnsonCo1972_Koppelman_web.jpg',
        cod: 'Gun Shot (Homicide)"',
        description: `Mr. X is the nickname given to a murder victim discovered on a farm near Cleburne, Johnson County, Texas in 1972. The male's case was reopened in 2012, which has led to numerous adjustments to his physical traits. The motive for his murder was possibly out of retaliation. After investigating the presence of carrion-seeking birds, a farmer located the victim's body in a wooded portion of his property. The unidentified male had been shot twice with a .25 caliber "Saturday night special" pistol; the cause of death was determined to be a wound to his chest. The semi-automatic firearm used in the murder was described as inexpensive and ineffective at a distance. No clothing was observed on the remains or at the scene. Early investigation proved difficult, as the remains were severely damaged from scavanging animals, and some portions of his body were not recovered. Police were able to infer that Mr. X had possibly not died at the scene and instead at a separate crime scene, as no spent casings were recorded to be where the body was. All of his fingerprints were taken, yet they were not able to confirm who he was. The decedent was later buried in a pauper's grave at the Rosehill Cemetery, after efforts to identify him failed. About twenty years later, a reporter for a local newspaper met with a man who claimed the murder was the work of "drug dealers," motivated by a need for retaliation.`,
        characteristics: 'Short, curly brown hair cut not long before his murder',
        agencies: `Johnson County Sheriff's Office - (817) 556-6058`,
        createdAt: new Date(),
        updatedAt: new Date()
     },
      {
        name: 'El Dorado Jane Doe',
        race: 'White',
        sex: 'Femal',
        age: '18 - 30',
        height: `5'10"`,
        location: 'El Dorado, Arkansas',
        body_condition: 'Recognizable Face',
        year: '1991',
        images: 'https://i.ibb.co/mSrjZFK/edjd.jpg',
        cod: 'Homicide',
        description: `El Dorado Jane Doe was a young woman who used several aliases, including Kelly Karr (or Carr) and Shannon/Sharon Wiley. A former lover (and alleged pimp) named James McAlphin was convicted of her murder after pleading guilty on a plea deal. McAlphin claims to know her identity, but has yet to reveal any credible details to authorities. 56 women have been ruled out as the victim. Proir to her death El Dorado Jane Doe had lived in Dallas, Shreveport, Louisiana and Little Rock. She may have originally been a runaway from Florida and told a number of stories about her past to different people. In some of these stories she claimed to have had two children or a daughter. She also made claims that she was in a witness protection program as her father was in the mafia and that she was wanted for robberies on the East Coast. When these stories were investigated by police they could not be confirmed though. Over the years she used multiple aliases including Cheryl Wick, Kelly Carr, Sharon Wiley and Mercedes and is known to have been arrested multiple times for charges such as prostitution, public lewdness and writing bad checks. El Dorado Jane Doe moved from Dallas to El Dorado, were she was living at the time of her death in early 1991. She had been working as a prostitute while in Dallas and using the name Kelly Carr/Karr. While in Dallas she had also met and began a relationship with a man called James McAlphin. She would frequently end up receiving treatment in the ER after being beaten, allegedly by McAlphin. El Dorado Jane Doe left McAlphin in June 1991 and moved in with a friend, although he still continued to contact her and would send her threatening messages. On July 10, 1991 El Dorado Jane Doe was found deceased in the Whitehall Motel in El Dorado, Arkansas. She had been shot by her former boyfriend, James McAlphin, who was charged with first degree murder and second degree battery in relation to her death. However, he denied shooting El Dorado Jane Doe and insists that her death was a suicide. He also claims to know her identity but has refused to disclose it unless he is promised money in return. El Dorado Jane Doe had an Arkansas identification card claiming her name was Cheryl Ann Wick in her possession when she was found but it was later determined that this was not her true identity after contacting Cheryl parents and discovering that Cheryl was actually alive. Cheryl told authorities that she did not know El Dorado Jane Doe's identity. This is believed to have resulted from a case of identity theft. A Bible with several names in it was also found in her possession. The names turned out to belong to a black familly living in Irving, Texas who El Dorado Jane Doe may have lived with for some time. This did not lead to her identity. Relatives of the victim were identified through forensic genealogy. The match was made when a second cousin was discovered from Alabama who did not recognize El Dorado Jane Doe but acknowledged a "family resemblance."`,
        characteristics: 'Naturally brown hair which she had dyed blond at the time of her death.',
        agencies: 'El Dorado Police Department - (870) 881-4800',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Opelika Jane Doe',
        race: 'Black',
        sex: 'Female',
        age: '3 - 7',
        height: `Unknown`,
        location: 'Opelika, Alabama',
        body_condition: `Skeletal`,
        year: `2012`,
        images: 'https://i.ibb.co/hf4F8kJ/Opelika-NCMEC.jpg',
        cod: 'Presumed Homicide',
        description: `Opelika Jane Doe was a child whose partial skeleton was found near a trailer park in 2012. In 2016, a lead surfaced that she was possibly seen alive near the area she was discovered, although this has yet to be confirmed. It is suspected the Jane Doe was a victim of abuse and neglect, and her death was ruled a probable homicide. It is believed she had been neglected and abused while alive. Only a few bones, including the skull and mandible, were found. Isotope testing suggested the girl was likely native to Alabama or its bordering states. The location of the remains indicated the individual or individuals who disposed of the body were familiar with the area and most likely native to Opelika. A $20,000 reward is available for information leading to her identity and that of those responsible for her death. In 2016, investigators received a tip including photographs taken during vacation bible school sessions at the Greater Peace Church in 2011. The pictures depicted an unidentified girl strongly resembling the Jane Doe. The child seen alive appeared to have been neglected, and she had a visible defect in one of her eyes. All attempts to locate and identify this girl have proved unsuccessful.`,
        characteristics: `She likely had a deformity or scarring to her left eye.`,
        agencies: 'Opelika Police Department - (817) 304-8873',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Boy in the Box',
        race: 'White',
        sex: 'Male',
        age: '3 - 6',
        height: `3'4"`,
        location: 'Philadelphia, Pennsylvania',
        body_condition: `Recognizable Face`,
        year: `1957`,
        images: 'https://i.ibb.co/XJhfhBq/Boy-in-the-Box.jpg',
        cod: 'Blunt Force Trauma',
        description: `Boy in the Box (also known as America's Unknown Child and The Fox Chase Boy) is the nickname given to a boy found murdered in the Fox Chase area of Philadelphia, Pennsylvania in 1957. Due to the cool weather, a time of death could only be given between a couple of days to a few weeks. However, due to the rain between the week of February 18-25 (and the lack of water damage to the card board box he was discovered in), it is hypothesized he was killed in the timeframe of the earlier estimate. The child's body was found nude, wrapped in a Native American style blanket cut in half. He was placed in a cardboard box, which led to his nickname. The body was found by a college student walking around in the area. He waited an entire day to call police, due to the fact that he was stalking women, and didn't want to get arrested. It turned out that another man who was looking at his illegal cage, found the body first, but never told police. The boy had been beaten severely, as many bruises were visible on his body. Severe bruising of the face pointed to blunt force trauma as the cause of death. Despite an exhausting investigation of countless leads by police and high publicity of the case, the boy still remains unidentified, and the case is considered cold. However, there exists a 24-hour hotline to a special task force in charge of the case to provide tips, and callers can remain anonymous if they wish.`,
        characteristics: `His hair had been recently cut in a way that suggested it was not the work of a skilled barber.`,
        agencies: `Philadelphia Medical Examiner's Office - (215) 685-7445`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Little Miss Nobody',
        race: 'White',
        sex: 'Female',
        age: '3 - 6',
        height: `3'6"`,
        location: 'Congress, Arizona',
        body_condition: `Decomposed`,
        year: `1960`,
        images: 'https://i.ibb.co/BfkqrSr/Little-Miss-Nobody.jpg',
        cod: 'Suspected Homicide',
        description: `"Little Miss Nobody" was a child found deceased in an Arizona desert in 1960. The child's body was discovered in a shallow grave in a desert near Congress, Yavapai County, Arizona. Her cause of death was not successfully determined, yet foul play has been considered a possibility as she was buried in a shallow grave and a pocket knife with blood on it was near the scene. She was exhumed in 2018, where a facial reconstruction was created for the first time. Examination of her skeleton suggested she was most likely between three and six when she died, and she was probably stood at about 3'6.`,
        characteristics: `Brown hair that may have been dyed auburn.`,
        agencies: `Yavapai County Medical Examiner - (928) 771-3163`,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
