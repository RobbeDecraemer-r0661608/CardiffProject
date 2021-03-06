// Config code

const player_rotate_speed = 0.001; // Bigger number = faster!

const player_move_speed = 0.1; // Bigger number = faster!

const projectile_speed = 0.1; // Bigger number = faster!

const fps = 60; // depricated

const points_on_hit = 100;

const player_sprite_scale = 0.5; // Bigger number = larger sprite!

const pickup_sprite_scale = 1.75; // Bigger number = larger sprite!

const pickup_time_delay = 5; // Delay (in seconds) between pickups appearing

const bulletRechargeTime = 1; // Smaller number = faster fire rate

const bullet_scale = 1.5; // Bigger number = larger sprite

const bullet_lifespan = 200; // Bigger number = longer range

const integrator_step = 1.0; // depricated

const frictionCoeff = 0.025; // depricated

const trail_width = 2; // Width of the default trail

const trail_tail = 10; // The amount of frames the tail of the trail is ignored for the owner of the 

const colors = ["#004DFF", "#FF00AC", "#56FF38", "#FF1700", "#FFFF00", "#FFFFFF"];

const spawns = [{ x: 200, y: 200 }, { x: 400, y: 200 }, { x: 200, y: 400 }, { x: 400, y: 400 }, { x: 600, y: 200 }, { x: 300, y: 300 }];