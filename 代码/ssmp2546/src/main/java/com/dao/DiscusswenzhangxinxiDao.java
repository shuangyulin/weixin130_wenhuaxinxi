package com.dao;

import com.entity.DiscusswenzhangxinxiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.DiscusswenzhangxinxiVO;
import com.entity.view.DiscusswenzhangxinxiView;


/**
 * 文章信息评论表
 * 
 * @author 
 * @email 
 * @date 2021-04-20 17:07:00
 */
public interface DiscusswenzhangxinxiDao extends BaseMapper<DiscusswenzhangxinxiEntity> {
	
	List<DiscusswenzhangxinxiVO> selectListVO(@Param("ew") Wrapper<DiscusswenzhangxinxiEntity> wrapper);
	
	DiscusswenzhangxinxiVO selectVO(@Param("ew") Wrapper<DiscusswenzhangxinxiEntity> wrapper);
	
	List<DiscusswenzhangxinxiView> selectListView(@Param("ew") Wrapper<DiscusswenzhangxinxiEntity> wrapper);

	List<DiscusswenzhangxinxiView> selectListView(Pagination page,@Param("ew") Wrapper<DiscusswenzhangxinxiEntity> wrapper);
	
	DiscusswenzhangxinxiView selectView(@Param("ew") Wrapper<DiscusswenzhangxinxiEntity> wrapper);
	
}
