const { supabase } = require('../config/supabaseClient');

class SanPham {
    constructor(id_san_pham, ten_san_pham, mo_ta, gia, so_luong_ton, hinh_anh, id_danh_muc) {
        this.id_san_pham = id_san_pham;
        this.ten_san_pham = ten_san_pham;
        this.mo_ta = mo_ta;
        this.gia = gia;
        this.so_luong_ton = so_luong_ton;
        this.hinh_anh = hinh_anh;
        this.id_danh_muc = id_danh_muc;
    }

    static async themSanPham(ten_san_pham, gia, mo_ta, id_danh_muc, so_luong_ton = 0, hinh_anh = '') {
        const { error } = await supabase.from('san_pham').insert([{
            ten_san_pham,
            gia,
            mo_ta,
            id_danh_muc,
            so_luong_ton,
            hinh_anh
        }]);
        if (error) throw new Error(error.message);
    }

    static async layTatCaSanPham() {
        const { data, error } = await supabase.from('san_pham').select('*');
        if (error) {
            console.error('Lỗi Supabase:', error);
            return [];
        }
        return data || [];
    }
}

module.exports = SanPham;
