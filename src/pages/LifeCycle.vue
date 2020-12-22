<template>
 <div class="row">
  <div class="col-md-12">
    <card>
      <template slot="header">
        <div class="bg-img"></div>
        <!-- <img src="./../img/ramkan_ant.jpg" alt="" style="width: 40%;height: auto;display: block; margin:20px auto;"> -->
        <h2>
          วงจรชีวิต
          <br>
          <small>มดแดงเกาะแข้งเกาะขา เกาะเสื้อเกาผ้า ตุ้งแฉ่ง ตุ้งแฉ่ง</small>
        </h2>
      </template>
      <div class="content">
        <div style="display:flex">
          <img src="@/img/ant_life_cycle.gif" width="1000px" height="auto" alt="">
          <div style="margin-left: 20px">
          <p class="text-muted">
            มดเป็นแมลงที่มีการเจริญเติบโตแบบสมบูรณ์ (Complete metamorphosis) ในวงจรชีวิตประกอบด้วย ไข่ ตัวอ่อน ดักแด้ และตัวเต็มวัย (ดังรูปภาพ)
          </p>
          <p class="text-muted">
          เนื่องจากมดเป็นแมลงสังคม สมาชิกที่อยู่ในรังจะมีการแบ่งชั้นวรรณะแยกออกจากกันให้เห็นชัดเจน ประกอบด้วย
          </p>
          </div>
        </div>
        <p class="text-muted">
          <ul>
            <li>
              <h4>มดแม่รังหรือมดราชินี</h4>
              <p class="text-muted">
              มีขนาดใหญ่กว่ามดตัวอื่นที่อยู่ในรัง มีปีก อกหนา ท้องใหญ่ และมักมีตาเดี่ยว สามารถสืบพันธุ์ได้ ทำหน้าที่ในการสร้างรังและวางไข่ ตลอดจนควบคุมกิจกรรม ต่างๆ ภายในรัง
              </p>
            </li>
            <li>
              <h4>มดเพศผู้ </h4>
              <p class="text-muted">
                โดยทั่วไปจะมีปีก ส่วนอกหนาแต่ไม่เท่าของมดแม่รัง มีหน้าที่ผสมพันธุ์ พบเป็นจำนวนน้อยกว่ามดงานในแต่ละรัง
              </p>
            </li>
            <li>
              <h4>มดงาน</h4>
              <p class="text-muted">
                เป็นมดเพศเสียที่เป็นหมัน ไม่มีปีก ไม่มีตาเดี่ยว เป็นมดที่ออกหาอาหารและพบอยู่เสมอภายนอกรัง นอกจากหาอาหารแล้ว มดงานยังมีหน้าที่ในการสร้างรัง รักษารัง ดูแลตัวอ่อนและราชินีและป้องกันรังด้วย มดงานบางชนิดสามารถแบ่งออกเป็น มดงานที่มีรูปร่างแบบเดียว (monomorphic form) มดงานที่มีรูปร่าง 2 รูปแบบ (dimorphic form ; major worker; minor worker) และมดงานที่มีรูปร่างหลายแบบ่ (polymorphic form)
              </p>
            </li>
          </ul>
        </p>
      </div>
    </card>
  </div>
 </div>
</template>
<script>
export default {

};
</script>
<style scoped>
.bg-img{
  width: 100%;
  height: 300px;
  background-image: url('./../img/black_ant.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
