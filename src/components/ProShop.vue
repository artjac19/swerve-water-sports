<script setup>
import PayPalForm from './PayPalForm.vue';

</script>

<template>
<div class="vert-container">
    <h2 style="margin-top: 17vh;">The Proshop </h2>
    <p style="text-align: center">We carry a variety of boardsport and watersport products and everything you will need with them. Give us a call we
    can help you find equipment and or give advice.</p>
    <table id="proShopTable" style="margin-left: auto; margin-right: auto; color: white;">
  <tr height="150px" class="tableRowForSearch">
    <td style="width:14%; height:14%; text-align:center; vertical-align:middle">
      <img src="http://swervewatersports.com/pic/proshop/Tye Dye T.jpg" alt="Swerve T-Shirt" style="max-height:100%; max-width:100%" />
    </td>
    <td style="width: 16%; text-align: center;">Swerve T-Shirt</td>
    <td style="width: 8%; text-align: center;">25</td>
    <td style="width: 40%; text-align: center;">Swerve Watersports Classic T shirt</td>
    <td style="width: 20%;">
      <PayPalForm class="photo"
                  buttonId="SR6JWSKSTPXPG"
                  label="Swerve T-Shirt"
                  description="Swerve Watersports Classic T shirt"
                  :options="[
                    { value: 'Small', label: 'Small $25.00 USD' },
                    { value: 'Medium', label: 'Medium $25.00 USD' },
                    { value: 'Large', label: 'Large $25.00 USD' },
                    { value: 'XL', label: 'XL $25.00 USD' },
                    { value: 'XS', label: 'XS $25.00 USD' }
                  ]"
                  :styles="[
                    { value: 'Tye Dye', label: 'Tye Dye' },
                    { value: 'T shirt', label: 'T shirt' },
                    { value: 'Grey V neck', label: 'Grey V neck' },
                    { value: 'Long Sleeve Light Blue', label: 'Long Sleeve Light Blue' }
                  ]"
                  colorPreferences="true"
                  currency="USD" />
    </td>
  </tr>

  <tr height="150px">
    <td style="width:14%; height:14%; text-align:center; vertical-align:middle">
      <img src="http://swervewatersports.com/pic/proshop/barefootsuit.jpg" alt="Dolphin Barefoot Suit" style="max-height:100%; max-width:100%" />
    </td>
    <td style="width: 16%; text-align: center;">Dolphin Barefoot Suit</td>
    <td style="width: 8%; text-align: center;">385</td>
    <td style="width: 40%; text-align: center;">Barefoot Jump suit padded and floatation</td>
    <td style="width: 20%;">
      <PayPalForm class="photo"
                  buttonId="WWG4WXW2PADYE"
                  label="Dolphin Barefoot Suit"
                  description="Barefoot Jump suit padded and floatation"
                  :options="[
                    { value: 'Small Grey', label: 'Small Grey $329.00 USD' },
                    { value: 'Medium Yellow', label: 'Medium Yellow $329.00 USD' }
                  ]"
                  currency="USD" />
    </td>
  </tr>

  <tr height="150px">
    <td style="width:14%; height:14%; text-align:center; vertical-align:middle">
      <img src="http://swervewatersports.com/pic/proshop/dubery.jpg" alt="Polarized Sunglasses" style="max-height:100%; max-width:100%" />
    </td>
    <td style="width: 16%; text-align: center;">Polarized Sunglasses</td>
    <td style="width: 8%; text-align: center;">32</td>
    <td style="width: 40%; text-align: center;">Dubery Sunglasses Polarized for UVA and UVB protection</td>
    <td style="width: 20%;">
      <PayPalForm class="photo"
                  buttonId="EGS8R3GTDD5QL"
                  label="Polarized Sunglasses"
                  description="Dubery Sunglasses Polarized for UVA and UVB protection"
                  :options="[
                    { value: 'Dubery', label: 'Dubery' }
                  ]"
                  currency="USD" />
    </td>
  </tr>

  <tr height="150px">
    <td style="width:14%; height:14%; text-align:center; vertical-align:middle">
      <img src="http://swervewatersports.com/pic/proshop/freeride.jpg" alt="HO Freeride" style="max-height:100%; max-width:100%" />
    </td>
    <td style="width: 16%; text-align: center;">HO Freeride</td>
    <td style="width: 8%; text-align: center;">365</td>
    <td style="width: 40%; text-align: center;">New 67" HO Freeride slalom blank w/ fin 175+ 2014</td>
    <td style="width: 20%;">
      <PayPalForm class="photo"
                  buttonId="AE57YP9P2RKVG"
                  label="HO Freeride"
                  description="New 67&quot; HO Freeride slalom blank w/ fin 175+ 2014"
                  currency="USD" />
    </td>
  </tr>

  <tr height="150px">
    <td style="width:14%; height:14%; text-align:center; vertical-align:middle">
      <img src="http://swervewatersports.com/pic/proshop/trickrope.jpg" alt="Trick rope" style="max-height:100%; max-width:100%" />
    </td>
    <td style="width: 16%; text-align: center;">Trick rope</td>
    <td style="width: 8%; text-align: center;">55</td>
    <td style="width: 40%; text-align: center;">Trick rope with adjustable loops and float</td>
    <td style="width: 20%;">
      <PayPalForm class="photo"
                  buttonId="WAX9QKLYWT7MA"
                  label="Trick rope"
                  description="Trick rope with adjustable loops and float"
                  currency="USD" />
    </td>
  </tr>

  <tr height="150px">
    <td style="width:14%; height:14%; text-align:center; vertical-align:middle">
      <img src="http://swervewatersports.com/pic/proshop/barefootrope.jpg" alt="Barefoot Rope" style="max-height:100%; max-width:100%" />
    </td>
    <td style="width: 16%; text-align: center;">Barefoot Rope</td>
    <td style="width: 8%; text-align: center;">85</td>
    <td style="width: 40%; text-align: center;">12 strand red kevlar barefoot rope Floats Non-stretch 600lb test 75' 80' 85' 90'</td>
    <td style="width: 20%;">
      <PayPalForm class="photo"
                  buttonId="4UDD4YYR6WCLU"
                  label="Barefoot Rope"
                  description="12 strand red kevlar barefoot rope Floats Non-stretch 600lb test 75' 80' 85' 90'"
                  currency="USD" />
    </td>
  </tr>

  <tr height="150px">
    <td style="width:14%; height:14%; text-align:center; vertical-align:middle">
      <img src="http://swervewatersports.com/pic/proshop/liner.jpg" alt="Kevlar Glove Liners" style="max-height:100%; max-width:100%" />
    </td>
    <td style="width: 16%; text-align: center;">Kevlar Glove Liners</td>
    <td style="width: 8%; text-align: center;">18</td>
    <td style="width: 40%; text-align: center;">Kevlar liners to prevent blisters, wear these magic gloves inside your gloves to prevent blisters and sore hands from skiing</td>
    <td style="width: 20%;">
      <PayPalForm class="photo"
                  buttonId="9H37A53V38JRS"
                  label="Kevlar Glove Liners"
                  description="Kevlar liners to prevent blisters, wear these magic gloves inside your gloves to prevent blisters and sore hands from skiing"
                  currency="USD" />
    </td>
  </tr>

  <tr height="150px">
    <td style="width:14%; height:14%; text-align:center; vertical-align:middle">
      <img src="http://swervewatersports.com/pic/proshop/sunhat.jpg" alt="Sun Hats" style="max-height:100%; max-width:100%" />
    </td>
    <td style="width: 16%; text-align: center;">Sun Hats</td>
    <td style="width: 8%; text-align: center;">35</td>
    <td style="width: 40%; text-align: center;">Best hat for blocking the sun in the boat</td>
    <td style="width: 20%;">
      <PayPalForm class="photo"
                  buttonId="2DL2GPUPAJK6G"
                  label="Sun Hats"
                  description="Best hat for blocking the sun in the boat"
                  currency="USD" />
    </td>
  </tr>

  <tr height="150px">
    <td style="width:14%; height:14%; text-align:center; vertical-align:middle">
      <img src="http://swervewatersports.com/pic/proshop/hoodedt.jpg" alt="Hooded T Shirt Cotton Sunshirt" style="max-height:100%; max-width:100%" />
    </td>
    <td style="width: 16%; text-align: center;">Hooded T Shirt Cotton Sunshirt</td>
    <td style="width: 8%; text-align: center;">45</td>
    <td style="width: 40%; text-align: center;">Hooded T Shirt Cotton Sunshirt long sleeves, charcoal and black available</td>
    <td style="width: 20%;">
      <PayPalForm class="photo"
                  buttonId="EFS95EQL4PQEY"
                  label="Hooded T Shirt Cotton Sunshirt"
                  description="Hooded T Shirt Cotton Sunshirt long sleeves, charcoal and black available"
                  :options="[
                    { value: 'Small', label: 'Small $45.00 USD' },
                    { value: 'Medium', label: 'Medium $45.00 USD' },
                    { value: 'Large', label: 'Large $45.00 USD' },
                    { value: 'XL', label: 'XL $45.00 USD' },
                    { value: 'XS', label: 'XS $45.00 USD' }
                  ]"
                  :styles="[
                    { value: 'Charcoal', label: 'Charcoal' },
                    { value: 'Black', label: 'Black' }
                  ]"
                  currency="USD" />
    </td>
  </tr>

  <tr height="150px">
    <td style="width:14%; height:14%; text-align:center; vertical-align:middle">
      <img src="http://swervewatersports.com/pic/proshop/watersjumpsuit.jpg" alt="Waters Wetsuits Jump Suit" style="max-height:100%; max-width:100%" />
    </td>
    <td style="width: 16%; text-align: center;">Waters Wetsuits Jump Suit</td>
    <td style="width: 8%; text-align: center;">385</td>
    <td style="width: 40%; text-align: center;">Jump Suit padded, flexible and looks great</td>
    <td style="width: 20%;">
      <PayPalForm class="photo"
                  buttonId="LE8A43ZHDF66N"
                  label="Waters Wetsuits Jump Suit"
                  description="Jump Suit padded, flexible and looks great"
                  :options="[
                    { value: 'xs', label: 'xs $385.00 USD' },
                    { value: 's', label: 's $385.00 USD' },
                    { value: 'm', label: 'm $385.00 USD' },
                    { value: 'l', label: 'l $385.00 USD' },
                    { value: 'xl', label: 'xl $385.00 USD' }
                  ]"
                  currency="USD" />
    </td>
  </tr>

  <tr height="150px">
    <td style="width:14%; height:14%; text-align:center; vertical-align:middle">
      <img src="http://swervewatersports.com/pic/proshop/Dolphin Vest.jpg" alt="Dolphin Wetsuits Ski Vest" style="max-height:100%; max-width:100%" />
    </td>
    <td style="width: 16%; text-align: center;">Dolphin Wetsuits Ski Vest</td>
    <td style="width: 8%; text-align: center;">129</td>
    <td style="width: 40%; text-align: center;">Ski Vest Great padding and float for a competition vest lasts longer than the competition</td>
    <td style="width: 20%;">
      <PayPalForm class="photo"
                  buttonId="Q6HUM4ATRSNAC"
                  label="Dolphin Wetsuits Ski Vest"
                  description="Ski Vest Great padding and float for a competition vest lasts longer than the competition"
                  :options="[
                    { value: 'S green front zip', label: 'S green front zip $129.00 USD' },
                    { value: 'M Pink Front zip', label: 'M Pink Front zip $129.00 USD' },
                    { value: 'Large yellow front zip', label: 'Large yellow front zip $129.00 USD' },
                    { value: 'XS blue Front zip', label: 'XS blue Front zip $129.00 USD' },
                    { value: 'Large Red and Blue Front Zip', label: 'Large Red and Blue Front Zip $129.00 USD' },
                    { value: 'XL green Back Zip', label: 'XL green Back Zip $129.00 USD' },
                    { value: 'Medium Red Back Zip', label: 'Medium Red Back Zip $129.00 USD' },
                    { value: 'Medium Orange Back Zip', label: 'Medium Orange Back Zip $129.00 USD' }
                  ]"
                  currency="USD" />
    </td>
  </tr>

  <tr height="150px">
    <td style="width:14%; height:14%; text-align:center; vertical-align:middle">
      <img src="http://swervewatersports.com/pic/proshop/Stealth Bomber Glove.jpg" alt="Stealth Bomber Glove" style="max-height:100%; max-width:100%" />
    </td>
    <td style="width: 16%; text-align: center;">Stealth Bomber Glove</td>
    <td style="width: 8%; text-align: center;">85</td>
    <td style="width: 40%; text-align: center;">Great Tough Glove for slalom and Skiing</td>
    <td style="width: 20%;">
      <PayPalForm class="photo"
                  buttonId="29KVQARGML7LS"
                  label="Stealth Bomber Glove"
                  description="Great Tough Glove for slalom and Skiing"
                  :options="[
                    { value: 'XXS', label: 'XXS' },
                    { value: 'XS', label: 'XS' },
                    { value: 'S', label: 'S' },
                    { value: 'M', label: 'M' },
                    { value: 'L', label: 'L' },
                    { value: 'XL', label: 'XL' },
                    { value: 'XXL', label: 'XXL' }
                  ]"
                  currency="USD" />
    </td>
  </tr>

  <tr height="150px">
    <td style="width:14%; height:14%; text-align:center; vertical-align:middle">
      <img src="http://swervewatersports.com/pic/proshop/Stealth Mingo Glove.jpg" alt="Stealth Mingo Glove" style="max-height:100%; max-width:100%" />
    </td>
    <td style="width: 16%; text-align: center;">Stealth Mingo Glove</td>
    <td style="width: 8%; text-align: center;">79</td>
    <td style="width: 40%; text-align: center;">Looks great and grips better</td>
    <td style="width: 20%;">
      <PayPalForm class="photo"
                  buttonId="LYJUMUJF5U524"
                  label="Stealth Mingo Glove"
                  description="Looks great and grips better"
                  :options="[
                    { value: 'XXS', label: 'XXS' },
                    { value: 'XS', label: 'XS' },
                    { value: 'S', label: 'S' },
                    { value: 'M', label: 'M' },
                    { value: 'L', label: 'L' },
                    { value: 'XL', label: 'XL' },
                    { value: 'XXL', label: 'XXL' }
                  ]"
                  currency="USD" />
    </td>
  </tr>

  <tr height="150px">
    <td style="width:14%; height:14%; text-align:center; vertical-align:middle">
      <img src="http://swervewatersports.com/pic/proshop/Stealth Lite Glove.jpg" alt="Stealth Lite Glove" style="max-height:100%; max-width:100%" />
    </td>
    <td style="width: 16%; text-align: center;">Stealth Lite Glove</td>
    <td style="width: 8%; text-align: center;">69</td>
    <td style="width: 40%; text-align: center;">Simple classic reliable slalom glove</td>
    <td style="width: 20%;">
      <PayPalForm class="photo"
                  buttonId="8U9TZ6P3NQJBW"
                  label="Stealth Lite Glove"
                  description="Simple classic reliable slalom glove"
                  :options="[
                    { value: 'XXS', label: 'XXS' },
                    { value: 'XS', label: 'XS' },
                    { value: 'S', label: 'S' },
                    { value: 'M', label: 'M' },
                    { value: 'L', label: 'L' },
                    { value: 'XL', label: 'XL' },
                    { value: 'XXL', label: 'XXL' }
                  ]"
                  currency="USD" />
    </td>
  </tr>

  <tr height="150px">
    <td style="width:14%; height:14%; text-align:center; vertical-align:middle">
      <img src="http://swervewatersports.com/pic/proshop/Stealth Kevlar Glove.jpg" alt="Stealth Kevlar Glove" style="max-height:100%; max-width:100%" />
    </td>
    <td style="width: 16%; text-align: center;">Stealth Kevlar Glove</td>
    <td style="width: 8%; text-align: center;">89</td>
    <td style="width: 40%; text-align: center;">The best grip, vise grip on the handle with this durable glove</td>
    <td style="width: 20%;">
      <PayPalForm class="photo"
                  buttonId="BXES6PDM8W7LQ"
                  label="Stealth Kevlar Glove"
                  description="The best grip, vise grip on the handle with this durable glove"
                  :options="[
                    { value: 'XXS', label: 'XXS' },
                    { value: 'XS', label: 'XS' },
                    { value: 'S', label: 'S' },
                    { value: 'M', label: 'M' },
                    { value: 'L', label: 'L' },
                    { value: 'XL', label: 'XL' },
                    { value: 'XXL', label: 'XXL' }
                  ]"
                  currency="USD" />
    </td>
  </tr>

  <tr height="150px">
    <td style="width:14%; height:14%; text-align:center; vertical-align:middle">
      <img src="http://swervewatersports.com/pic/proshop/S Lines Slalom.jpg" alt="S Lines Slalom" style="max-height:100%; max-width:100%" />
    </td>
    <td style="width: 16%; text-align: center;">S Lines Slalom</td>
    <td style="width: 8%; text-align: center;">110</td>
    <td style="width: 40%; text-align: center;">Salom ropes with the brightest colors and the closest measurements don’t get anything but the best</td>
    <td style="width: 20%;">
      <PayPalForm class="photo"
                  buttonId="D9ECCQNYLN5SC"
                  label="S Lines Slalom"
                  description="Salom ropes with the brightest colors and the closest measurements don’t get anything but the best"
                  colorPreferences="true"
                  currency="USD" />
    </td>
  </tr>

  <tr height="150px">
    <td style="width:14%; height:14%; text-align:center; vertical-align:middle">
      <img src="http://swervewatersports.com/pic/proshop/S Lines Jump Rope.jpg" alt="S Lines Jump Rope" style="max-height:100%; max-width:100%" />
    </td>
    <td style="width: 16%; text-align: center;">S Lines Jump Rope</td>
    <td style="width: 8%; text-align: center;">70</td>
    <td style="width: 40%; text-align: center;">Jump Rope</td>
    <td style="width: 20%;">
      <PayPalForm class="photo"
                  buttonId="6TTX7VUUJMPUG"
                  label="S Lines Jump Rope"
                  description="Jump Rope"
                  :options="[
                    { value: 'Green', label: 'Green' }
                  ]"
                  currency="USD" />
    </td>
  </tr>

  <tr height="150px">
    <td style="width:14%; height:14%; text-align:center; vertical-align:middle">
      <img src="http://swervewatersports.com/pic/proshop/Swerve Boardshorts.jpg" alt="Swerve Boardshorts" style="max-height:100%; max-width:100%" />
    </td>
    <td style="width: 16%; text-align: center;">Swerve Boardshorts</td>
    <td style="width: 8%; text-align: center;">45</td>
    <td style="width: 40%; text-align: center;">Boardshorts vairety of styles and colors in stock</td>
    <td style="width: 20%;">
      <PayPalForm class="photo"
                  buttonId="SR6JWSKSTPXPG"
                  label="Swerve Boardshorts"
                  description="Boardshorts vairety of styles and colors in stock"
                  :options="[
                    { value: '28', label: '28' },
                    { value: '30', label: '30' },
                    { value: '32', label: '32' },
                    { value: '34', label: '34' },
                    { value: '36', label: '36' }
                  ]"
                  currency="USD" />
    </td>
  </tr>

  <tr height="150px">
    <td style="width:14%; height:14%; text-align:center; vertical-align:middle">
      <img src="http://swervewatersports.com/pic/proshop/swervehat.jpg" alt="Swerve Hat" style="max-height:100%; max-width:100%" />
    </td>
    <td style="width: 16%; text-align: center;">Swerve Hat</td>
    <td style="width: 8%; text-align: center;">35</td>
    <td style="width: 40%; text-align: center;">Swerve Hat</td>
    <td style="width: 20%;">
      <PayPalForm class="photo"
                  buttonId="4YUFN34LSVLAQ"
                  label="Swerve Hat"
                  description="Swerve Hat"
                  currency="USD" />
    </td>
  </tr>

  <tr height="150px">
    <td style="width:14%; height:14%; text-align:center; vertical-align:middle">
      <img src="http://swervewatersports.com/pic/proshop/hoodie.jpg" alt="Swerve Watersports Hoodie" style="max-height:100%; max-width:100%" />
    </td>
    <td style="width: 16%; text-align: center;">Swerve Watersports Hoodie</td>
    <td style="width: 8%; text-align: center;">45</td>
    <td style="width: 40%; text-align: center;">Blue Hoodie</td>
    <td style="width: 20%;">
      <PayPalForm class="photo"
                  buttonId="YTLG3THPYTYBE"
                  label="Swerve Watersports Hoodie"
                  description="Blue Hoodie"
                  :options="[
                    { value: 'Small', label: 'Small $45.00 USD' },
                    { value: 'Medium', label: 'Medium $45.00 USD' },
                    { value: 'Large', label: 'Large $45.00 USD' },
                    { value: 'XL', label: 'XL $45.00 USD' },
                    { value: 'XS', label: 'XS $45.00 USD' }
                  ]"
                  currency="USD" />
    </td>
  </tr>

  <tr height="150px">
    <td style="width:14%; height:14%; text-align:center; vertical-align:middle">
      <img src="http://swervewatersports.com/pic/proshop/slines.jpg" alt="S Lines Handle" style="max-height:100%; max-width:100%" />
    </td>
    <td style="width: 16%; text-align: center;">S Lines Handles</td>
    <td style="width: 8%; text-align: center;">135</td>
    <td style="width: 40%; text-align: center;">Slalom and Jump Handles with protective plastic</td>
    <td style="width: 20%;">
      <PayPalForm class="photo"
                  buttonId="5K7TTDUUX678N"
                  label="S Lines Handles"
                  description="Slalom and Jump Handles with protective plastic"
                  :options="[
                    { value: '11&quot Jump Handle', label: '11&quot; Jump Handle $135.00 USD' },
                    { value: '12&quot Slalom Handle', label: '12&quot; Slalom Handle $135.00 USD' },
                    { value: '13&quot Slalom Handle', label: '13&quot; Slalom Handle $135.00 USD' }
                  ]"
                  currency="USD" />
    </td>
  </tr>

  <tr height="150px">
    <td style="width:14%; height:14%; text-align:center; vertical-align:middle">
      <img src="http://swervewatersports.com/pic/proshop/skiing.jpg" alt="Skiing" style="max-height:100%; max-width:100%" />
    </td>
    <td style="width: 16%; text-align: center;">Skiing at Swerve</td>
    <td style="width: 8%; text-align: center;">135</td>
    <td style="width: 40%; text-align: center;">How to pay for time on the water</td>
    <td style="width: 20%;">
      <PayPalForm class="photo"
                  buttonId="THWYXNZ5ZKD78"
                  label="Skiing at Swerve"
                  description="How to pay for time on the water"
                  :options="[
                    { value: 'Lesson', label: 'Lesson $50.00 USD' },
                    { value: 'Ten Pack', label: 'Ten Pack $400.00 USD' },
                    { value: '1 Day Lessons', label: '1 Day Lessons $140.00 USD' },
                    { value: 'Collegiate Day Stay', label: 'Collegiate Day Stay $140.00 USD' },
                    { value: 'Event Practice 4 passes', label: 'Event Practice 4 passes $15.00 USD' },
                    { value: 'Season Pass', label: 'Season Pass $2,450.00 USD' }
                  ]"
                  currency="USD" />
    </td>
  </tr>

  <tr height="150px">
    <td style="width:14%; height:14%; text-align:center; vertical-align:middle">
      <img src="http://swervewatersports.com/pic/proshop/kidscamp.jpg" alt="Kids Camp" style="max-height:100%; max-width:100%" />
    </td>
    <td style="width: 16%; text-align: center;">Kids Camp Per Day</td>
    <td style="width: 8%; text-align: center;">120-160</td>
    <td style="width: 40%; text-align: center;">Kids Camps 4 weeks during summer endless fun and skiing!</td>
    <td style="width: 20%;">
      <PayPalForm class="photo"
                  buttonId="2PLA39WVMXTAN"
                  label="Kids Camp Per Day"
                  description="Kids Camps 4 weeks during summer endless fun and skiing!"
                  :options="[
                    { value: 'Day Camp 10-4 per day', label: 'Day Camp 10-4 per day $120.00 USD' },
                    { value: 'Overnight Camp per day', label: 'Overnight Camp per day $160.00 USD' }
                  ]"
                  currency="USD" />
    </td>
  </tr>
</table>

</div>
</template>