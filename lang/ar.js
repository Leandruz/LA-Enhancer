//Language: Arabic
//Translator:Mr.K a R i M.  -  http://forum.tribalwars.ae/member.php?37775-Mr-K-a-R-i-M
var filter_01 = "LA Enhancer";
var filter_02 = "التعليمات وطريقة عمل السكربت";
var filter_03 = "تم برمجة السكربت عن طريق";
var filter_04 = "تحميل الصفحات";
var filter_05 = "الى";
var filter_06 = "تفعيل";
var filter_07 = "اخفاء الكل/لا تخفي شء";
var filter_08 = "هجمات تجسس";
var filter_09 = "بدون خسائر";
var filter_10 = "بعض الخسائر";
var filter_11 = "تمت هزيمتك لكن دمرت بعض المباني";
var filter_12 = "تمت هزيمتك لكن تم التجسس";
var filter_13 = "تمت هزيمتك";
var filter_14 = "الترتيب على حسب:";
var filter_15 = "المسافة";
var filter_16 = "الوقت";
var filter_17 = "الاتجاه";
var filter_18 = "من الاقل للاكثر";
var filter_19 = "من الاكثر للاقل";
var filter_20 = "اخفاء الغنائم";
var filter_21 = "مليء";
var filter_22 = "غير كامل";
var filter_23 = "اخفاء الهجمات";
var filter_24 = "اكثر من";
var filter_25 = "اثل من";
var filter_26 = "يساوي";
var filter_27 = "اخفاء القرى التي تم نهبها خلال اخر";
var filter_28 = "دقائق";
var filter_29 = "اعادة تعيين";
var filter_30 = "اخفاء مستوى الحائط";
var filter_31 = "اخفاء المسافة";
var filter_32 = "اخفاء";
var filter_33 = "عرض";
var filter_34 = "القارات";
var filter_35 = "اخفاء تقارير التجسس مع موارد";
var filter_36 = "قرى منهوبة في اخر";
var filter_37 = "دقائق";
var filter_38 = "تشغيل الاعدادات الافتراضية بشكل اوتوماتيكي";
var filter_39 = "كل الصفوف تم مسحها";
var filter_40 = "مساعد النهب";
var filter_41 = "مساعد النهب - تحميل الصفحة";
var filter_42 = "اللغة";
var filter_43 = "اذهب للقرى التالية عندما ...";
var filter_44 = "عدد الوحدات لا يكون كافيا";
var filter_45 = "كشافة متواجدة";
var filter_46 = "جبوش النهب متوفرين";
var filter_47 = "قرى تم الارسال اليها خلال اخر";
var filter_48 = "دقائق";
var filter_49 = "مفاتيح ساخنة";
var filter_50 = "اعدادات الزر الرئيسي";
var filter_51 = "تجاوز القرية التالية";
var filter_52 = "القرية السابقة";
var filter_53 = "القرية التالية";
var filter_54 = "اذا الصف يطابق البروفايل";
var filter_55 = "اضغط";
var filter_56 = "تجاوز";
var filter_57 = "A";
var filter_58 = "B";
var filter_59 = "C";
var filter_60 = "اذا كان الصف لا يطابق اي من البروفايلات , اضغط";
var filter_61 = "اليوم"; //must be as it appears in tribalwars
var filter_62 = "الامس"; //must be as it appears in tribalwars
var instructions_01 = "انواع التاقرير التي يتم تحديدها ستكون مخفية";
var instructions_02 = "الفلترات التي لا يتم تحديدها لن يتم تفعيلها";
var instructions_03 = "ضع نقطة بين القارات مثلا,: 55.54.53";
var instructions_04 = "هذه الخاصية ستقوم بأخفاء القرى التي تم نهبها قبل __ دقائق. الاعدادت الافتراضية هي 60 دقيقة تغيير الوقت سيؤثر على القرى الجديدة فحسب والضغط على اعادة تعيين سيقوم باعادة كل شي الى وضعه الاصلي الى القرى التي يتم نهبها حاليا.";
var instructions_05 = "قم بتحميل وحفظ اعداداتك هنا. تغيير الملف سيقوم بفتح الملف الذي تم اختياره. الاعدادات الافتراضية ستعمل مع بدء عمل السكربت";
var instructions_06 = "ضبط حجم الصفحة إلى 100 لسرعة تحميل الصفحة";
var dialog_01 = "ها انت متاكد انك تريد اعادة تعيين القرى التي نهبتها مؤخرا؟";
var dialog_02 = "السكربت بالفعل يعمل على الاعدادت الافتراضيه له, هل تود ان تقوم بانشاء ملف اعدادت جديد وجعله ملف الاعدادت الافتراضية؟";
var dialog_03 = "اسم الملف";
var dialog_04 = "انت بالفعل لديك ملف بهذا الاسم, اختر اسم غيره";
var dialog_05 = "حقل الاسم لا يمكن ان يكون فارغ, يرجى المحاولة مرة اخرى";
var dialog_06 = "لا يمكنك مسح ملف الاعدادت الافتراضية";
var dialog_07 = "لا يمكنك استيراد وتصدير اعدادت الملف الافتراضي";
var dialog_08 = "للنسخ: Ctrl+C, انتر";
var dialog_09A = "[b]FA Filter: ";
var dialog_09B = "[/b][spoiler][i][u]التعليمات[/u]: لاستيراد البروفايل هذا,انسخ الكود التالي بعدها لأستيراد هذه الاعدادت قم بلصق الكود هذا فالحقل الذي سيخرج لك عند الضغط على كلمه استيراد في السكربت[/i][code]";
var dialog_09C = "[/code][/spoiler]";
var dialog_10 = "اعدادات الملف الشخصي";
var dialog_11 = "Ctrl+V للصق الاعدادات هنا";
var dialog_12 = "انت بالفعل لديك بروفايل بهذا الاسم";
var dialog_13 = "اعد تحميل السكربت لترى اللغة الجديدة";
var profile_01 = "ملف الاعدادات";
var profile_02 = "تطبيق";
var profile_03 = "اعادة تعيين ";
var profile_04 = "جديد";
var profile_05 = "ضبط الاعدادت الافتراضية";
var profile_06 = "مسح";
var profile_07 = "حفظ التغييرات";
var profile_08 = "تصدير";
var profile_09 = "استيراد";
var profile_10 = "افتراضي";