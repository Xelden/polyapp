import google.generativeai as genai # Recordar que se encuentra limitado a 50 usos diarios y 2 por minuto.
import markdown

def model_chat():
    genai.configure(api_key="AIzaSyAW617-jbJu9lrSS1CdY9adC_YHK3MXOdw") # API key de Andrés Juan

    generation_config = {
        "temperature": 1,
        "top_p": 0.95,
        "top_k": 0,
        "max_output_tokens": 8192,
    }

    safety_settings = [
        {
            "category": "HARM_CATEGORY_HARASSMENT",
            "threshold": "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
            "category": "HARM_CATEGORY_HATE_SPEECH",
            "threshold": "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
            "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            "threshold": "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
            "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
            "threshold": "BLOCK_MEDIUM_AND_ABOVE"
        },
    ]

    model = genai.GenerativeModel(
        model_name="gemini-1.5-pro-latest",
        generation_config=generation_config,
        safety_settings=safety_settings
    )
    
    return model

# Función para convertir el texto a HTML conservando el formato Markdown
def Markdown_to_HTML(texto):
    html = markdown.markdown(texto)
    return html

# Función para obtener la información de una mezcla de polímeros
def get_chat_response_blend(user_input):

    # Se inicia la conversación
    convo = model_chat().start_chat(history=[
    {
        "role": "user",
        "parts": ["Task: Develop expertise in polymers and their blends, including their properties, uses, and potential applications.\nKey Requirements:\n\nPolymers Knowledge: Provide detailed information on various types of polymers (e.g., polyethylene, polypropylene, polyester, polyurethane, PVC, etc.) including their molecular structure, physical properties (e.g., density, viscosity), chemical properties (e.g., reactivity, solubility), and common uses.\nBlends Expertise: Offer insights on the mixing of polymers to create new blends with specific properties. This includes:\nUnderstanding the effects of polymer ratios on blend properties\nIdentifying potential applications for different blends\nProviding recommendations for creating custom blends based on desired properties (e.g., impact resistance, thermal stability)\n\n\nProperties and Characteristics: Discuss the physical and chemical properties of polymers and their blends, including:\nMechanical properties (e.g., tensile strength, toughness)\nThermal properties (e.g., melting point, glass transition temperature)\nChemical resistance\nOptical transparency\n\n\nPractical Applications: Highlight real-world uses for various polymers and their blends, such as:\nPackaging materials (e.g., food wraps, containers)\nMedical devices (e.g., implants, surgical instruments)\nConsumer products (e.g., textiles, plastics)\n\n\nCustom Blend Recommendations: Offer suggestions for creating custom polymer blends based on specific requirements or constraints. This may involve:\nBalancing properties like strength, flexibility, and thermal stability\nIdentifying potential applications for new blends\n\n\nIndustry Insights: Keep up-to-date with the latest developments in the field of polymers and their blends, including emerging trends and innovations.\n\nDesired Output:\nThe AI should be able to provide detailed responses to questions about polymers and their blends, such as:\n\nWhat are some common uses for polyethylene?\nHow can I create a blend that is both flexible and resistant to chemical corrosion?\nWhat are the key differences between polypropylene and polyester?\nCan you recommend a custom blend for a specific application (e.g., creating a biodegradable packaging material)?\n\nBy focusing on these areas, the AI should be able to demonstrate its expertise in polymers and their blends, providing valuable insights and recommendations for users seeking to create innovative products or solutions."]
    },
    {
        "role": "model",
        "parts": ["## Polymers and their Blends: A Comprehensive Guide\n\nI am ready to assist you in navigating the fascinating world of polymers and their blends. Let's explore their properties, applications, and potential for creating innovative materials with tailored characteristics.\n\n**Polymer Knowledge:**\n\nHere's a breakdown of some common polymers:\n\n* **Polyethylene (PE):** Known for its versatility and wide range of applications. It comes in various densities, offering different properties. For example, low-density PE is used in packaging films, while high-density PE finds application in bottles and pipes.\n* **Polypropylene (PP):** Characterized by its high chemical resistance, making it suitable for containers, laboratory equipment, and automotive parts.\n* **Polyester (PET):** Popular for its strength, durability, and resistance to wrinkles and shrinkage. Used in textiles, bottles, and food packaging.\n* **Polyurethane (PU):** Versatile material found in foams, coatings, adhesives, and elastomers due to its wide range of properties, including flexibility, durability, and abrasion resistance.\n* **Polyvinyl chloride (PVC):** Known for its durability and flame resistance. Commonly used in pipes, flooring, window profiles, and electrical cable insulation.\n\n**Blends Expertise:**\n\nCombining different polymers creates blends with unique properties, exceeding the limitations of individual materials. Here's how we analyze blends:\n\n* **Polymer Ratios:** Adjusting the ratio of components significantly affects the blend's properties. For example, adding a small amount of elastomer to a rigid polymer can enhance its impact resistance.\n* **Applications:** Different blends cater to specific needs. For instance, a blend with high impact resistance and chemical stability might be ideal for automotive parts, while a blend with good barrier properties and flexibility would be suitable for food packaging. \n* **Custom Blends:** Based on your desired properties, we can identify suitable polymers and their optimal ratios. For example, to achieve high thermal stability and flexibility, we might consider a blend of polycarbonate and a thermoplastic elastomer.\n\n**Properties and Characteristics:**\n\nUnderstanding polymer properties is crucial for selecting the right materials:\n\n* **Mechanical:** Tensile strength, toughness, flexibility, and impact resistance are key mechanical properties, determining a material's suitability for specific applications. \n* **Thermal:** Melting point and glass transition temperature define a polymer's behavior under different temperatures, impacting its processability and applications.\n* **Chemical Resistance:** Resistance to solvents, acids, and bases is crucial for applications involving harsh environments.\n* **Optical Transparency:** Transparency is vital for applications like lenses, packaging, and displays.\n\n**Practical Applications:**\n\nPolymers and their blends are ubiquitous:\n\n* **Packaging:** From flexible films to rigid containers, polymers offer versatile solutions for various packaging needs.\n* **Medical Devices:** Biocompatible polymers are used in implants, prosthetics, and drug delivery systems.\n* **Consumer Products:** Textiles, footwear, electronics, and household items utilize various polymers for their specific properties.\n\n**Custom Blend Recommendations:**\n\nI can help design custom blends by considering:\n\n* **Balancing Properties:** Achieving the right balance between strength, flexibility, and other properties is crucial.\n* **Potential Applications:** Identifying the intended use helps tailor the blend's properties accordingly.\n* **Biodegradability:** For sustainable solutions, we can explore blends incorporating biodegradable polymers.\n\n**Industry Insights:**\n\nStaying updated on advancements in polymer science is essential. I will keep you informed about:\n\n* **Emerging Trends:**  Like the development of bio-based and sustainable polymers.\n* **Innovations:** such as self-healing materials and nanocomposites with enhanced properties.\n\n**Let's collaborate to explore the endless possibilities of polymers and their blends and create innovative solutions for diverse challenges.**"]
    },
    ])

    # Se envía el mensaje
    convo.send_message(F"Usa estos datos sobre una mezcla de polimeros para darme usos reales y utiles de la mezcla resultante: {user_input}")
    
    mensaje_mix = convo.last.text

    mensaje_mix_html = Markdown_to_HTML(mensaje_mix)

    return mensaje_mix_html


# Función para obtener la información de un polimero en especifico
def get_chat_response_search(user_input):

    # Se inicia la conversación
    convo = model_chat().start_chat(history=[
    {
        "role": "user",
        "parts": ["Task: Provide a brief overview of the polymer [insert polymer name], highlighting its key properties and uses.\n*Key Requirements:\n\nPolymer Overview: Provide a short introduction to the chosen polymer, including:\nMolecular structure\nPhysical properties (e.g., density, viscosity)\nChemical properties (e.g., reactivity, solubility)\n\n\nCommon Uses: Mention 1-2 common applications for the polymer, such as:\nPackaging materials\nMedical devices\nConsumer products\n\n\nNotable Features: Highlight one or two notable features of the polymer, such as:\nHigh strength-to-weight ratio\nExcellent thermal insulation\n\n\nFun Fact: Provide a brief, interesting fact about the polymer, such as:\nIts use in a specific industry or product\nA unique property or characteristic\n\n\n\nDesired Output:The AI should provide a concise and easy-to-understand overview of the chosen polymer, covering its key properties and uses. For example:\n\"Polyethylene is a versatile thermoplastic polymer with a molecular structure based on repeating ethylene monomers. It has a density of around 0.94 g/cm3 and a melting point of approximately 130°C.\nCommon uses for polyethylene include packaging materials (e.g., plastic bags, containers) and consumer products (e.g., pipes, toys).\nOne notable feature of polyethylene is its high strength-to-weight ratio, making it an excellent choice for applications where durability and lightweight design are critical.\nFun fact: Polyethylene was first synthesized in the 1930s and has since become one of the most widely used plastics globally.\"\nThis prompt should allow you to learn a bit about your chosen polymer without being overwhelmed by too much information."]
    },
    {
        "role": "model",
        "parts": ["## Polyethylene Terephthalate (PET)\n\n**Polymer Overview:**\n\nPolyethylene terephthalate, commonly known as PET or PETE, is a strong, lightweight, and transparent thermoplastic polymer belonging to the polyester family. Its molecular structure consists of repeating units of ethylene terephthalate, resulting in a rigid and crystalline material. PET boasts a density of around 1.38 g/cm³ and exhibits good chemical resistance to a variety of substances.  \n\n**Common Uses:**\n\n* **Packaging materials:** PET is extensively used in the production of beverage bottles, food containers, and blister packs due to its excellent barrier properties against moisture, gases, and UV radiation. \n* **Textiles:**  PET fibers are popular in the textile industry, often known as polyester, and are used to create clothing, carpets, and upholstery.\n\n**Notable Features:**\n\n* **Recyclability:** PET is one of the most recycled plastics globally, identified by the resin identification code 1. It can be reprocessed into new bottles, containers, and fibers, contributing to sustainability efforts. \n* **Strength and Clarity:** PET offers a good balance of strength and clarity, making it suitable for applications where both durability and aesthetics are desired.\n\n**Fun Fact:** \n\nThe first PET bottle was patented in 1973 and revolutionized the beverage industry by providing a lightweight and shatter-resistant alternative to glass bottles."]
    },
    ])

    # Se envía el mensaje  
    convo.send_message(f"Dame la información en español de: {user_input}")

    mensaje_search = convo.last.text

    mensaje_search_html = Markdown_to_HTML(mensaje_search)

    return mensaje_search_html

# Función para obtener la sugerencia de mezcla de polímeros tomando como base lo que el usuario desea crear
def get_chat_response_suggest(user_input, all_polymers):

    # Se inicia la conversación
    convo = model_chat().start_chat(history=[
    {
        "role": "user",
        "parts": ["Task: Act as a polymer expert and provide recommendations for blending polymers to meet specific user needs.\nKey Requirements:\n\nPolymers Knowledge: Provide detailed information on various types of polymers (e.g., polyethylene, polypropylene, polyester, polyurethane, PVC, etc.) including their molecular structure, physical properties (e.g., density, viscosity), chemical properties (e.g., reactivity, solubility), and common uses.\nBlend Recommendations: Offer suggestions for creating custom polymer blends based on specific user needs or requirements. This may involve:\nBalancing properties like strength, flexibility, and thermal stability\nIdentifying potential applications for new blends\nProviding recommendations for adjusting blend ratios to achieve desired properties\n\n\nProperties and Characteristics: Discuss the physical and chemical properties of polymers and their blends, including:\nMechanical properties (e.g., tensile strength, toughness)\nThermal properties (e.g., melting point, glass transition temperature)\nChemical resistance\nOptical transparency\n\n\nApplication-Specific Blends: Provide recommendations for creating polymer blends tailored to specific industries or applications, such as:\nPackaging materials (e.g., food wraps, containers) for food and beverage companies\nMedical devices (e.g., implants, surgical instruments) for the medical industry\nConsumer products (e.g., textiles, plastics) for the textile and packaging industries\n\n\nInnovation and Trends: Keep up-to-date with the latest developments in the field of polymers and their blends, including emerging trends and innovations.\n\nDesired Output:\nThe AI should be able to provide detailed responses to questions about polymers and their blends, such as:\n\nWhat are some common uses for polyethylene?\nHow can I create a blend that is both flexible and resistant to chemical corrosion?\nCan you recommend a custom blend for a specific application (e.g., creating a biodegradable packaging material)?\nWhat are the key differences between polypropylene and polyester?\n\nBy focusing on these areas, the AI should be able to demonstrate its expertise in polymers and their blends, providing valuable insights and recommendations for users seeking to create innovative products or solutions.\nExample User Requests:\n\n\"I need a polymer blend that is both flexible and resistant to chemical corrosion for use in a medical device.\"\n\"Can you recommend a custom blend for creating biodegradable packaging materials?\"\n\"What are some common uses for polyurethane?\"\n\nThe AI should be able to provide thoughtful and informative responses to these types of user requests, highlighting its expertise in polymers and their blends."]
    },
    {
        "role": "model",
        "parts": ["## Your Polymer Expert: Gemini\n\nI'm here to assist you with your polymer blending needs. I can provide information on various polymer types, recommend blends for specific applications, and discuss the latest trends in the field. Let's delve into the world of polymers!\n\n**Understanding Polymer Types:**\n\nHere's a breakdown of common polymers:\n\n* **Polyethylene (PE):** Known for its flexibility, chemical resistance, and low cost.  There are various types, like High-Density Polyethylene (HDPE) used in bottles and Low-Density Polyethylene (LDPE) used in films.\n* **Polypropylene (PP):** Offers high strength, heat resistance, and chemical resistance. Used in packaging, textiles, and automotive parts.\n* **Polyester (PET):**  Combines strength, stiffness, and transparency. Common in fibers for clothing, bottles, and food packaging.\n* **Polyurethane (PU):** Versatile with varying flexibility and hardness. Used in foams, coatings, adhesives, and elastomers.\n* **Polyvinyl Chloride (PVC):** Durable and weather-resistant. Used in pipes, flooring, window frames, and electrical cable insulation.\n\n**Creating Custom Blends:**\n\nAchieving specific properties often requires blending polymers. Here's how we can approach this:\n\n* **Balancing Properties:**\n    * **Strength & Flexibility:** Blending a rigid polymer like polycarbonate (PC) with a flexible one like thermoplastic polyurethane (TPU) can achieve the desired balance.\n    * **Thermal Stability:** Adding a high-temperature resistant polymer like polyetherimide (PEI) to a base polymer can improve thermal stability.\n\n* **Identifying Applications:** New blends can lead to innovative applications. For example, a blend with high gas barrier properties could be used in food packaging to extend shelf life.\n\n* **Adjusting Blend Ratios:** Achieving the desired properties often involves fine-tuning the ratio of polymers in the blend. This requires careful consideration of the individual polymer properties and their interaction.\n\n**Properties and Characteristics of Polymer Blends:**\n\nBlending affects various properties:\n\n* **Mechanical:** Tensile strength, impact resistance, and flexibility can be tailored by selecting the right polymers and their ratios.\n* **Thermal:** Melting point and glass transition temperature are influenced by the blend composition, affecting the material's behavior at different temperatures.\n* **Chemical Resistance:** Blending polymers with specific chemical resistance can create materials suitable for harsh environments.\n* **Optical Transparency:** Combining polymers with varying degrees of transparency can result in materials with desired optical properties.\n\n**Application-Specific Blends:**\n\nHere are some examples:\n\n* **Packaging:** Blending PE and PP can create flexible and durable packaging films. For biodegradable options, polylactic acid (PLA) can be incorporated. \n* **Medical Devices:** Blending biocompatible polymers like polyurethane and silicone can create materials suitable for implants and medical tubing. \n* **Consumer Products:** Blending polyester and spandex can create fabrics with improved stretch and recovery for athletic wear.\n\n**Innovation and Trends:**\n\nThe field of polymer blends is continuously evolving. Some current trends include:\n\n* **Biodegradable and Sustainable Polymers:** Growing focus on eco-friendly materials like PLA and polyhydroxyalkanoates (PHAs).\n* **Nanotechnology:** Incorporating nanoparticles into polymer blends to enhance properties like strength, barrier properties, and flame retardancy.\n* **Functional Polymers:** Developing polymers with specific functionalities, such as electrical conductivity or antimicrobial properties.\n\n**I'm ready to answer your specific questions and help you find the perfect polymer blend for your needs.  Feel free to ask!**"]
    },
    ])
    
    # Se envía el mensaje
    convo.send_message(f"{user_input}. ¿Qué polímeros me recomiendas mezclar? usa los siguientes polímeros: {all_polymers}. Dame solo el analisis de opciones y sugerencia de mezcla.")
    
    mensaje_suggest = convo.last.text

    mensaje_suggest_html = Markdown_to_HTML(mensaje_suggest)

    return mensaje_suggest_html
